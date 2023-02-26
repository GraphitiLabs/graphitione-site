import React from 'react';

import HeroImage from '../images/about-hero.jpg';

function HeroAbout() {
  return (
    <section className="relative">

      {/* Background image */}
      {/* <div className="absolute inset-0">
              <img className="w-full h-full object-cover" src={HeroImage} width="1440" height="394" alt="About" />
        <div className="absolute inset-0 bg-gray-900 opacity-75" aria-hidden="true"></div>
      </div> */}

      {/* Hero content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-4 md:pt-40 md:pb-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400" data-aos="fade-up">The story behind Graphiti</h1>
            <p className="text-2xl text-gray-700" data-aos="fade-up" data-aos-delay="200">
            Our vision is to build products that use artificial intelligence to increase the usability and capability of blockchains, in the same way that big data and AI revolutionized the tech industry in the past decade.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default HeroAbout;