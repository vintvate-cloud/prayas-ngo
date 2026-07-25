// src/components/AboutUs.tsx
import React from 'react';

export default function AboutUs() {
  return (
    // h-screen ensures it takes exactly one full viewport height
    // overflow-hidden prevents page scrolling on desktop
    <section className="w-full h-screen flex flex-col bg-white overflow-hidden p-4 md:p-8">
      
      {/* ─── Top Heading ─── */}
      <div className="w-full flex-shrink-0 text-center mb-6 md:mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-red-600 uppercase tracking-wider">
          About Us
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* ─── Content Area (Split 50/50) ─── */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center min-h-0">
        
        {/* Left Side: YouTube Video */}
        {/* Taking exactly 50% width on desktop and taking full available height of the flex container */}
        <div className="w-full md:w-1/2 h-64 md:h-full max-h-[500px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100 bg-gray-200">
          <iframe
            className="w-full h-full object-cover"
            // Replace the video ID below with your actual YouTube video ID
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
            title="About Prayas Samaj Sevi Sanstha"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Side: Text Information */}
        {/* Taking the other 50% width. Adding overflow-y-auto just in case the text gets too long for smaller screens */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center overflow-y-auto pr-2 md:pr-4">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            PRAYAS <span className="text-red-600 block sm:inline">समाज सेवी संस्था</span>
          </h3>
          
          <div className="space-y-4 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
            <p>
              Welcome to Prayas Samaj Sevi Sanstha. We are dedicated to creating a meaningful impact in our community through relentless effort, compassion, and sustainable development initiatives. 
            </p>
            <p>
              Our mission is to bridge the gap between resources and those in need, focusing on education, health, and empowerment. By working together at the grassroots level, we ensure that every initiative drives positive, long-lasting change.
            </p>
            <p>
              Join us on our journey to uplift lives and build a stronger, more inclusive society for everyone.
            </p>
          </div>

          {/* Optional Call to Action Button */}
          <div className="mt-8">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95">
              Read More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
