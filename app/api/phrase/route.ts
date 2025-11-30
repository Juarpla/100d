import { NextResponse } from 'next/server';

export async function GET() {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return NextResponse.json(
            { error: 'Gemini API key not configured' },
            { status: 500 }
        );
    }

    try {
        // CORRECCIÓN: Usamos el modelo que SÍ aparece en tu lista: 'gemini-2.5-flash'
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: `Generate a beautiful, inspirational romantic phrase about love and relationships from the perspective of a member of The Church of Jesus Christ of Latter-day Saints (LDS). Keep it concise (1-2 sentences, maximum 30 words). Do not include quotation marks in your response.`
                                }
                            ]
                        }
                    ],
                    // MANTENER ESTO: Los filtros de seguridad son necesarios para evitar bloqueos en temas religiosos
                    safetySettings: [
                        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
                        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
                        { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_ONLY_HIGH" },
                        { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" }
                    ],
                    generationConfig: {
                        temperature: 0.9,
                        maxOutputTokens: 1024,
                    }
                }),
                // Cache for 24 hours
                cache: 'no-store'
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Gemini API error details:', {
                status: response.status,
                statusText: response.statusText,
                body: errorText
            });
            throw new Error(`Gemini API error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log("🎉 Gemini API response data:", data.candidates?.[0]);

        // Verificación de seguridad
        const candidate = data.candidates?.[0];
        if (!candidate?.content?.parts?.[0]?.text) {
            console.warn("⚠️ Respuesta vacía. Razón de parada:", candidate?.finishReason);
        }

        const phrase = candidate?.content?.parts?.[0]?.text?.trim() ||
            "Every moment with you is a treasure. Here are some of the first moments we spent together.";

        return NextResponse.json({ phrase }, {
            headers: {
                'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=172800'
            }
        });
    } catch (error) {
        console.error('Error fetching phrase from Gemini:', error);
        return NextResponse.json({
            phrase: "Every moment with you is a treasure. Here are some of the first moments we spent together."
        });
    }
}