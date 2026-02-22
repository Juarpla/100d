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

  const [timeLeftBirthday, setTimeLeftBirthday] = useState({
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
      setTimeLeft4Months(calculateTimeLeft('2026-03-15T00:00:00'));
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
    const updateBirthday = () => {
      setTimeLeftBirthday(calculateTimeLeft('2026-03-16T00:00:00'));
    };

    updateBirthday();
    const timer = setInterval(updateBirthday, 1000);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-blue-900/30 animate-gradient"></div>

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.15),transparent_50%)] animate-pulse-slow"></div>

      <main className="flex min-h-screen flex-col items-center justify-center px-2 sm:px-4 py-4 sm:py-8 relative">
        {/* Floating Fruits with advanced animations */}
        <div className="absolute top-4 left-2 sm:top-8 sm:left-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl z-10 animate-float-slow hover:scale-125 transition-transform duration-500 cursor-pointer drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">🍍</div>
        <div className="absolute top-4 right-2 sm:top-12 sm:right-12 text-5xl sm:text-6xl md:text-7xl lg:text-8xl z-10 animate-float-reverse hover:scale-125 transition-transform duration-500 cursor-pointer drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">🍓</div>
        <div className="absolute bottom-4 left-2 sm:bottom-12 sm:left-16 text-5xl sm:text-6xl md:text-7xl lg:text-8xl z-10 animate-float-reverse hover:scale-125 transition-transform duration-500 cursor-pointer drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">🍓</div>
        <div className="absolute bottom-4 right-2 sm:bottom-16 sm:right-20 text-5xl sm:text-6xl md:text-7xl lg:text-8xl z-10 animate-float-slow hover:scale-125 transition-transform duration-500 cursor-pointer drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">🍍</div>

        {/* Hearts with advanced floating animations */}
        <div className="hidden md:block absolute top-20 left-28 lg:left-32 text-3xl lg:text-4xl animate-float-gentle z-10 opacity-90 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">💕</div>
        <div className="hidden md:block absolute top-24 right-28 lg:right-32 text-2xl lg:text-3xl animate-float-gentle-reverse z-10 opacity-90 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" style={{animationDelay: '0.3s'}}>💖</div>
        <div className="hidden md:block absolute bottom-24 left-28 lg:left-32 text-2xl lg:text-3xl animate-float-gentle z-10 opacity-90 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" style={{animationDelay: '0.5s'}}>💗</div>
        <div className="hidden md:block absolute bottom-28 right-32 lg:right-36 text-3xl lg:text-4xl animate-float-gentle-reverse z-10 opacity-90 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" style={{animationDelay: '0.7s'}}>💝</div>

        {/* Main content container - Apple Glass Morphism */}
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-3xl rounded-3xl sm:rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] border border-white/20 p-4 sm:p-6 md:p-8 lg:p-12 relative z-20 hover:shadow-[0_8px_48px_0_rgba(236,72,153,0.4)] transition-all duration-700">

          {/* Title Section - Apple Style */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent mb-2 sm:mb-4 px-2 tracking-tight hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(236,72,153,0.3)]">
              Juan & Walewska
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold px-2 animate-fade-in-up drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{animationDelay: '0.1s'}}>
              🎉 Almost 6 Beautiful Months Together! 🎉
            </p>
            <p className="text-base sm:text-lg text-gray-200 mt-1 sm:mt-2 px-2 animate-fade-in-up drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]" style={{animationDelay: '0.2s'}}>
              Getting closer and closer to our one-year anniversary! ❤️
            </p>
          </div>

          {/* Photo Gallery Carousel - Apple Style */}
          <div className="mb-4 sm:mb-6 md:mb-8 relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] group animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

            <div className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden">
              {images.map((img, index) => (
                <div
                  key={img}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
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

              {/* Navigation buttons - Apple Style */}
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white rounded-full p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg border border-white/20 hover:scale-110"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white rounded-full p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg border border-white/20 hover:scale-110"
                aria-label="Next image"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image counter dots - Minimalist Apple Style */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 bg-black/20 backdrop-blur-md px-3 py-2 rounded-full">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 cursor-pointer ${
                      index === currentImageIndex 
                        ? 'bg-white w-6 sm:w-8 shadow-lg shadow-white/50' 
                        : 'bg-white/40 w-1.5 sm:w-2 hover:bg-white/60'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Countdown Section - Futuristic Apple Style */}
          {!timeLeft.isComplete && (
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6 px-2 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Countdown to November 23rd
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                <div className="group relative bg-gradient-to-br from-pink-500/30 to-red-500/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-pink-400/30 hover:border-pink-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-red-500/0 group-hover:from-pink-500/20 group-hover:to-red-500/20 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                  <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-pink-200 to-red-200 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    {timeLeft.days}
                  </div>
                  <div className="relative text-xs sm:text-sm md:text-base text-white font-medium mt-1 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    Days
                  </div>
                </div>
                <div className="group relative bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                  <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    {timeLeft.hours}
                  </div>
                  <div className="relative text-xs sm:text-sm md:text-base text-white font-medium mt-1 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    Hours
                  </div>
                </div>
                <div className="group relative bg-gradient-to-br from-red-500/30 to-purple-500/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-red-400/30 hover:border-red-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-purple-500/0 group-hover:from-red-500/20 group-hover:to-purple-500/20 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                  <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-red-200 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    {timeLeft.minutes}
                  </div>
                  <div className="relative text-xs sm:text-sm md:text-base text-white font-medium mt-1 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    Minutes
                  </div>
                </div>
                <div className="group relative bg-gradient-to-br from-pink-500/30 to-red-600/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-pink-400/30 hover:border-pink-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-600/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-red-600/0 group-hover:from-pink-500/20 group-hover:to-red-600/20 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                  <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-pink-200 to-red-300 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    {timeLeft.seconds}
                  </div>
                  <div className="relative text-xs sm:text-sm md:text-base text-white font-medium mt-1 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    Seconds
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Separator - Modern Minimalist */}
          <div className="flex items-center justify-center my-6 sm:my-8 md:my-10 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <div className="grow h-px bg-gradient-to-r from-transparent via-pink-400/70 to-transparent"></div>
            <div className="mx-4 text-2xl sm:text-3xl md:text-4xl animate-pulse-gentle drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">💝</div>
            <div className="grow h-px bg-gradient-to-r from-transparent via-pink-400/70 to-transparent"></div>
          </div>

          {/* Countdown to 7 Months - Apple Style */}
          <div className="text-center mb-4 sm:mb-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6 px-2 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Countdown to March 15th - Celebrating 7 Months of Dating
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
              <div className="group relative bg-gradient-to-br from-pink-500/30 to-red-500/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-pink-400/30 hover:border-pink-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-red-500/0 group-hover:from-pink-500/20 group-hover:to-red-500/20 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-pink-200 to-red-200 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {timeLeft4Months.days}
                </div>
                <div className="relative text-xs sm:text-sm md:text-base text-white font-medium mt-1 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Days
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {timeLeft4Months.hours}
                </div>
                <div className="relative text-xs sm:text-sm md:text-base text-white font-medium mt-1 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Hours
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-red-500/30 to-purple-500/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-red-400/30 hover:border-red-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-purple-500/0 group-hover:from-red-500/20 group-hover:to-purple-500/20 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-red-200 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {timeLeft4Months.minutes}
                </div>
                <div className="relative text-xs sm:text-sm md:text-base text-white font-medium mt-1 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Minutes
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-pink-500/30 to-red-600/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-pink-400/30 hover:border-pink-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-600/30">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-red-600/0 group-hover:from-pink-500/20 group-hover:to-red-600/20 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-pink-200 to-red-300 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {timeLeft4Months.seconds}
                </div>
                <div className="relative text-xs sm:text-sm md:text-base text-white font-medium mt-1 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Seconds
                </div>
              </div>
            </div>
          </div>

          {/* Separator - Birthday */}
          <div className="flex items-center justify-center my-6 sm:my-8 md:my-10 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
            <div className="grow h-px bg-gradient-to-r from-transparent via-pink-400/70 to-transparent"></div>
            <div className="mx-4 text-2xl sm:text-3xl md:text-4xl animate-pulse-gentle drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">🎂</div>
            <div className="grow h-px bg-gradient-to-r from-transparent via-pink-400/70 to-transparent"></div>
          </div>

          {/* Wale's Birthday Countdown - Apple Style */}
          <div className="text-center mb-4 sm:mb-6 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6 px-2 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Countdown to Wale&apos;s Birthday 🎉
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
              <div className="group relative bg-gradient-to-br from-pink-500/30 to-red-500/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-pink-400/30 hover:border-pink-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-red-500/0 group-hover:from-pink-500/20 group-hover:to-red-500/20 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-pink-200 to-red-200 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {timeLeftBirthday.days}
                </div>
                <div className="relative text-xs sm:text-sm md:text-base text-white font-medium mt-1 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Days
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {timeLeftBirthday.hours}
                </div>
                <div className="relative text-xs sm:text-sm md:text-base text-white font-medium mt-1 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Hours
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-red-500/30 to-purple-500/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-red-400/30 hover:border-red-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-purple-500/0 group-hover:from-red-500/20 group-hover:to-purple-500/20 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-red-200 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {timeLeftBirthday.minutes}
                </div>
                <div className="relative text-xs sm:text-sm md:text-base text-white font-medium mt-1 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Minutes
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-pink-500/30 to-red-600/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-pink-400/30 hover:border-pink-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-600/30">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-red-600/0 group-hover:from-pink-500/20 group-hover:to-red-600/20 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-pink-200 to-red-300 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {timeLeftBirthday.seconds}
                </div>
                <div className="relative text-xs sm:text-sm md:text-base text-white font-medium mt-1 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Seconds
                </div>
              </div>
            </div>
          </div>

          {/* Separator - Trip */}
          <div className="flex items-center justify-center my-6 sm:my-8 md:my-10 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
            <div className="grow h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent"></div>
            <div className="mx-4 text-2xl sm:text-3xl md:text-4xl animate-pulse-gentle drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">🎉</div>
            <div className="grow h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent"></div>
          </div>

          {/* Countdown to Trip - Apple Style */}
          <div className="text-center mb-4 sm:mb-6 animate-fade-in-up" style={{animationDelay: '1s'}}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6 px-2 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Countdown to celebrate 1 year of dating
            </h2>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
              <div className="group relative bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-blue-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {Math.floor(timeLeftTrip.days / 7)}
                </div>
                <div className="relative text-xs sm:text-sm md:text-base text-white font-medium mt-1 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Weeks
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-purple-500/30 to-blue-500/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-purple-200 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {timeLeftTrip.days % 7}
                </div>
                <div className="relative text-xs sm:text-sm md:text-base text-white font-medium mt-1 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Days
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-cyan-500/30 to-purple-500/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-cyan-200 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {timeLeftTrip.hours}
                </div>
                <div className="relative text-xs sm:text-sm md:text-base text-white font-medium mt-1 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Hours
                </div>
              </div>
            </div>
          </div>

          {/* Separator - Sacred Goal */}
          <div className="flex items-center justify-center my-6 sm:my-8 md:my-10 animate-fade-in-up" style={{animationDelay: '1.1s'}}>
            <div className="grow h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent"></div>
            <div className="mx-4 text-2xl sm:text-3xl md:text-4xl animate-pulse-gentle drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">👑</div>
            <div className="grow h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent"></div>
          </div>

          {/* Secret goal - Apple Style */}
          <div className="text-center mb-4 sm:mb-6 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6 px-2 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Countdown to Complete our sacred goal
            </h2>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
              <div className="group relative bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {Math.floor(timeLeftGoal.days / 30)}
                </div>
                <div className="relative text-xs sm:text-sm md:text-base text-white/70 font-medium mt-1 tracking-wider">
                  Months
                </div>
                <div className="relative text-xs sm:text-sm md:text-base text-white font-medium mt-1 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Months
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-pink-500/30 to-purple-500/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-pink-400/30 hover:border-pink-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/20 group-hover:to-purple-500/20 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {timeLeftGoal.days % 30}
                </div>
                <div className="relative text-xs sm:text-sm md:text-base text-white font-medium mt-1 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Days
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-600/30">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:to-pink-600/20 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
                <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-purple-200 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {timeLeftGoal.hours}
                </div>
                <div className="relative text-xs sm:text-sm md:text-base text-white font-medium mt-1 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Hours
                </div>
              </div>
            </div>
          </div>

          {/* Love message - Apple Glassmorphism */}
          <div className="text-center mt-4 sm:mt-6 md:mt-8 p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl hover:bg-white/[0.15] transition-all duration-700 animate-fade-in-up" style={{animationDelay: '1.3s'}}>
            {isPhraseLoading ? (
              <p className="text-base sm:text-lg md:text-xl text-gray-300 italic leading-relaxed animate-pulse-gentle drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                Loading inspiration...
              </p>
            ) : (
              <p className="text-base sm:text-lg md:text-xl text-white italic leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                &ldquo;{lovePhrase}&rdquo; 💑
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
