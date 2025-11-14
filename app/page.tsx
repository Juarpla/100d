'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/love/WhatsApp Image 2025-11-14 at 17.38.08.jpeg",
    "/love/WhatsApp Image 2025-11-14 at 17.45.18.jpeg",
    "/love/WhatsApp Image 2025-11-14 at 17.45.19 (1).jpeg",
    "/love/WhatsApp Image 2025-11-14 at 17.45.19 (2).jpeg",
    "/love/WhatsApp Image 2025-11-14 at 17.45.19.jpeg"
  ];

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-11-23T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isComplete: true
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        isComplete: false
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(imageTimer);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-red-100 dark:from-pink-900 dark:via-purple-900 dark:to-red-900">
      <main className="flex min-h-screen flex-col items-center justify-center px-4 py-8">
        {/* Hearts decoration */}
        <div className="absolute top-8 left-8 text-6xl animate-pulse">💕</div>
        <div className="absolute top-12 right-12 text-5xl animate-pulse delay-300">❤️</div>
        <div className="absolute bottom-12 left-16 text-5xl animate-pulse delay-500">💖</div>
        <div className="absolute bottom-16 right-20 text-6xl animate-pulse delay-700">💝</div>

        {/* Main content container */}
        <div className="max-w-4xl w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12">

          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Juan & Walewska
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-semibold">
              🎉 Almost 100 Days Together! 🎉
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
              3 Beautiful Months of Love
            </p>
          </div>

          {/* Photo Gallery Carousel */}
          <div className="mb-8 relative overflow-hidden rounded-2xl shadow-lg" style={{ height: '400px' }}>
            {images.map((img, index) => (
              <div
                key={img}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={img}
                  alt={`Memory ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
            {/* Image counter dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-white w-8' 
                      : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Countdown Section */}
          {!timeLeft.isComplete ? (
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-6">
                Countdown to November 23rd
              </h2>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-br from-pink-400 to-red-400 rounded-xl p-4 shadow-lg">
                  <div className="text-3xl md:text-5xl font-bold text-white">
                    {timeLeft.days}
                  </div>
                  <div className="text-sm md:text-base text-white/90 font-medium">
                    Days
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl p-4 shadow-lg">
                  <div className="text-3xl md:text-5xl font-bold text-white">
                    {timeLeft.hours}
                  </div>
                  <div className="text-sm md:text-base text-white/90 font-medium">
                    Hours
                  </div>
                </div>
                <div className="bg-gradient-to-br from-red-400 to-purple-400 rounded-xl p-4 shadow-lg">
                  <div className="text-3xl md:text-5xl font-bold text-white">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-sm md:text-base text-white/90 font-medium">
                    Minutes
                  </div>
                </div>
                <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-xl p-4 shadow-lg">
                  <div className="text-3xl md:text-5xl font-bold text-white">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-sm md:text-base text-white/90 font-medium">
                    Seconds
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text mb-4">
                🎊 Congratulations! 🎊
              </h2>
              <p className="text-2xl md:text-3xl text-gray-800 dark:text-white font-semibold mb-4">
                Happy 100 Days Together!
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Celebrating 3 amazing months of love and happiness! 💕
              </p>
            </div>
          )}

          {/* Love message */}
          <div className="text-center mt-8 p-6 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/30 dark:to-purple-900/30 rounded-xl">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic">
              &ldquo;Every moment with you is a treasure. Here are some of the first moments we spent together.&rdquo; 💑
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
