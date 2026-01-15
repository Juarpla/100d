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

  const [timeLeft4Months, setTimeLeft4Months] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false
  });

  const [timeLeftTrip, setTimeLeftTrip] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false
  });

  const [timeLeftGoal, setTimeLeftGoal] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lovePhrase, setLovePhrase] = useState("Every moment with you is a treasure. Here are some of the first moments we spent together.");
  const [isPhraseLoading, setIsPhraseLoading] = useState(true);

  const images = [
    "/love/WhatsApp Image 2025-11-14 at 17.38.08.jpeg",
    "/love/WhatsApp Image 2025-11-14 at 17.45.19 (1).jpeg",
    "/love/WhatsApp Image 2025-11-14 at 17.45.19 (2).jpeg",
    "/love/WhatsApp Image 2025-12-09 at 00.41.54.jpeg",
    "/love/WhatsApp Image 2025-12-11 at 18.39.13.jpeg",
    "/love/WhatsApp Image 2025-12-18 at 17.01.31.jpeg",
    "/love/WhatsApp Image 2025-12-19 at 15.28.37.jpeg",
    "/love/Gemini_Generated_Image_2aq19h2aq19h2aq1.png",
    "/love/WhatsApp Image 2025-12-30 at 01.25.27.jpeg",
    "/love/WhatsApp Image 2026-01-04 at 16.34.37.jpeg"
  ];

  const calculateTimeLeft = (targetDate: string) => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isComplete: true
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
      isComplete: false
    };
  };

  useEffect(() => {
    const targetDate = '2025-11-23T00:00:00';
    setTimeLeft(calculateTimeLeft(targetDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(imageTimer);
  }, [images.length]);

  useEffect(() => {
    const updateGetMonths = () => {
      setTimeLeft4Months(calculateTimeLeft('2026-02-15T00:00:00'));
    };

    updateGetMonths();
    const timer = setInterval(updateGetMonths, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateTrip = () => {
      setTimeLeftTrip(calculateTimeLeft('2026-08-15T00:00:00'));
    };

    updateTrip();
    const timer = setInterval(updateTrip, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateGetGoal = () => {
      setTimeLeftGoal(calculateTimeLeft('2027-03-20T00:00:00'));
    };

    updateGetGoal();
    const timer = setInterval(updateGetGoal, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchLovePhrase = async () => {
      try {
        setIsPhraseLoading(true);
        const response = await fetch('/api/phrase');
        const data = await response.json();
        if (data.phrase) {
          setLovePhrase(data.phrase);
        }
      } catch (error) {
        console.error('Error fetching love phrase:', error);
        // Keep the default phrase on error
      } finally {
        setIsPhraseLoading(false);
      }
    };

    fetchLovePhrase();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-red-100 dark:from-pink-900 dark:via-purple-900 dark:to-red-900">
      <main className="flex min-h-screen flex-col items-center justify-center px-2 sm:px-4 py-4 sm:py-8 relative">
        {/* Dancing Fruits in Love - Visible and sized appropriately */}
        <div className="absolute top-4 left-2 sm:top-8 sm:left-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-dance-left z-10">🍍</div>
        <div className="absolute top-4 right-2 sm:top-12 sm:right-12 text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-dance-right z-10">🍓</div>
        <div className="absolute bottom-4 left-2 sm:bottom-12 sm:left-16 text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-dance-right z-10">🍓</div>
        <div className="absolute bottom-4 right-2 sm:bottom-16 sm:right-20 text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-dance-left z-10">🍍</div>

        {/* Hearts floating between them - Hidden on small screens */}
        <div className="hidden md:block absolute top-20 left-28 lg:left-32 text-3xl lg:text-4xl animate-pulse z-10">💕</div>
        <div className="hidden md:block absolute top-24 right-28 lg:right-32 text-2xl lg:text-3xl animate-pulse delay-300 z-10">💖</div>
        <div className="hidden md:block absolute bottom-24 left-28 lg:left-32 text-2xl lg:text-3xl animate-pulse delay-500 z-10">💗</div>
        <div className="hidden md:block absolute bottom-28 right-32 lg:right-36 text-3xl lg:text-4xl animate-pulse delay-700 z-10">💝</div>

        {/* Main content container */}
        <div className="max-w-4xl w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 relative z-20">

          {/* Title Section */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-4 px-2">
              Juan & Walewska
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-semibold px-2">
              🎉 Almost 6 Beautiful Months Together! 🎉
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-1 sm:mt-2 px-2">
              Getting closer and closer to our one-year anniversary! ❤️
            </p>
          </div>

          {/* Photo Gallery Carousel */}
          <div className="mb-4 sm:mb-6 md:mb-8 relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] group">
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

            {/* Navigation buttons */}
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              aria-label="Previous image"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              aria-label="Next image"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image counter dots - now clickable */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all cursor-pointer hover:bg-white ${
                    index === currentImageIndex 
                      ? 'bg-white w-6 sm:w-8' 
                      : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Countdown Section */}
          {!timeLeft.isComplete && (
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4 sm:mb-6 px-2">
                Countdown to November 23rd
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                <div className="bg-gradient-to-br from-pink-400 to-red-400 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    {timeLeft.days}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">
                    Days
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    {timeLeft.hours}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">
                    Hours
                  </div>
                </div>
                <div className="bg-gradient-to-br from-red-400 to-purple-400 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">
                    Minutes
                  </div>
                </div>
                <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">
                    Seconds
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Separator */}
          <div className="flex items-center justify-center my-6 sm:my-8 md:my-10">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent dark:via-pink-700"></div>
            <div className="mx-4 text-2xl sm:text-3xl md:text-4xl">💝</div>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent dark:via-pink-700"></div>
          </div>

          {/* Countdown to 4 Months */}
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4 sm:mb-6 px-2">
              Countdown to January 15th - Celebrating 6 Months of Dating
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
              <div className="bg-gradient-to-br from-pink-400 to-red-400 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {timeLeft4Months.days}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">
                  Days
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {timeLeft4Months.hours}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">
                  Hours
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-400 to-purple-400 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {timeLeft4Months.minutes}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">
                  Minutes
                </div>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {timeLeft4Months.seconds}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">
                  Seconds
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="flex items-center justify-center my-6 sm:my-8 md:my-10">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent dark:via-purple-700"></div>
            <div className="mx-4 text-2xl sm:text-3xl md:text-4xl">🎉</div>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent dark:via-purple-700"></div>
          </div>

          {/* Countdown to Trip */}
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4 sm:mb-6 px-2">
              Countdown to celebrate 1 year of dating
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
              <div className="bg-gradient-to-br from-pink-400 to-red-400 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {Math.floor(timeLeftTrip.days / 7)}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">
                  Weeks
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {timeLeftTrip.days % 7}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">
                  Days
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-400 to-purple-400 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {timeLeftTrip.hours}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">
                  Hours
                </div>
              </div>
              </div>
          </div>

          {/* Separator */}
          <div className="flex items-center justify-center my-6 sm:my-8 md:my-10">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent dark:via-purple-700"></div>
            <div className="mx-4 text-2xl sm:text-3xl md:text-4xl">👑</div>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent dark:via-purple-700"></div>
          </div>

          {/* Secret goal to Trip */}
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4 sm:mb-6 px-2">
              Countdown to Complete our sacred goal
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
              <div className="bg-gradient-to-br from-pink-400 to-red-400 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {Math.floor(timeLeftGoal.days / 30)}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">
                  Months
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {timeLeftGoal.days % 30}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">
                  Days
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-400 to-purple-400 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {timeLeftGoal.hours}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">
                  Hours
                </div>
              </div>
            </div>
          </div>

          {/* Love message */}
          <div className="text-center mt-4 sm:mt-6 md:mt-8 p-4 sm:p-5 md:p-6 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/30 dark:to-purple-900/30 rounded-lg sm:rounded-xl">
            {isPhraseLoading ? (
              <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 italic leading-relaxed animate-pulse">
                Loading inspiration...
              </p>
            ) : (
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed">
                &ldquo;{lovePhrase}&rdquo; 💑
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
