'use client';

import { useEffect, useRef } from 'react';

interface CounterProps {
  value: number;
  label: string;
  className?: string;
  animationType?: 'days' | 'hours' | 'minutes' | 'seconds';
}

export default function Counter({ value, label, className = '', animationType = 'seconds' }: CounterProps) {
  const prevValueRef = useRef(value);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (value !== prevValueRef.current) {
      prevValueRef.current = value;

      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }

      if (elementRef.current) {
        elementRef.current.classList.remove(`animate-counter-pop-${animationType}`);
        void elementRef.current.offsetWidth;
        elementRef.current.classList.add(`animate-counter-pop-${animationType}`);
      }

      animationTimeoutRef.current = setTimeout(() => {
        if (elementRef.current) {
          elementRef.current.classList.remove(`animate-counter-pop-${animationType}`);
        }
      }, 400);
    }
  }, [value, animationType]);

  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className="relative">
      <div
        className={className}
        aria-label={`${value} ${label}`}
        role="img"
      >
        {value}
      </div>
      <div className="relative text-xs sm:text-sm md:text-base text-white font-medium mt-1 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
        {label}
      </div>
    </div>
  );
}