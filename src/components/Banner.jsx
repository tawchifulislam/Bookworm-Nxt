import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <div
      className="hero min-h-[70vh] md:min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url(/banner.webp)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="hero-overlay bg-linear-to-b from-[#1a2e35]/80 via-[#1a2e35]/60 to-[#1a2e35]/90"></div>

      <div className="hero-content text-slate-200 text-center relative z-10">
        <div className="max-w-3xl px-4">
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Find Your <span className="text-amber-500">Next Read</span>
          </h1>

          <div className="mb-8 space-y-2">
            <p className="text-lg md:text-xl italic font-medium text-slate-300 drop-shadow-md">
              &quot;Remember that wherever your heart is, there you will find
              your treasure.&quot;
            </p>
            <p className="text-amber-500 font-semibold text-sm md:text-base tracking-widest uppercase">
              — Paulo Coelho, The Alchemist
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/all-books"
              className="btn btn-md md:btn-lg bg-amber-600 hover:bg-amber-700 border-none text-white px-8 md:px-12 shadow-xl transition-all duration-300 hover:scale-105"
            >
              Browse Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
