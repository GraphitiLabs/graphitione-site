import React from 'react';

import AndrewPNG from '../images/a.png';
import KetanPNG from '../images/k.png';
import JunfengPNG from '../images/junfeng.png';
import VinesPNG from '../images/vines.png';

function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-black">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Meet the team</h2>
            <p className="text-xl text-gray-700">
            We are a team of successful ex-founders, AI researchers, cybersecurity engineers, Wall Street quant devs, and blockchain developers.
            Our expert academic and industry advisors possess a wealth of qualifications and experience, including significant experience in founding and growing successful startups.
            </p>
          </div>

          {/* Team members */}
          <div className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3" data-aos-id-team>
            {/* 1st member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={KetanPNG} width="170" height="170" alt="Ketan Jog" />
                <h4 className="text-xl font-medium mb-1">Ketan Jog</h4>
                <div className="text-gray-700 mb-1">CEO & Cofounder</div>
                {/* <a className="block text-blue-500 hover:text-gray-200 transition duration-170 ease-in-out" href="#0">@laraamprecht</a> */}
              </div>
            </div>

            {/* 2nd member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={AndrewPNG} width="170" height="170" alt="Andrew Magid" />
                <h4 className="text-xl font-medium mb-1">Andrew Magid</h4>
                <div className="text-gray-700 mb-1">CTO & Cofounder</div>
                {/* <a className="block text-blue-500 hover:text-gray-200 transition duration-170 ease-in-out" href="#0">@marie_moon</a> */}
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center pb-3 md:pb-6 pt-12">
            <h4 className="h3 mb-4">Advised by experts in the field</h4>
            {/* <p className="text-xl text-gray-700">Makers and academics who understand the need for real tangible products built on chain blah blah blah. we are in the vacuum tube stage </p> */}
          </div>

          <div className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3" data-aos-id-team>
            {/* 3rd member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={JunfengPNG} width="100" height="100" alt="Junfeng Yang" />
                <h4 className="text-xl font-medium mb-1">Prof. Junfeng Yang</h4>
                <div className="text-gray-700 mb-1">Advisor</div>
                {/* <a className="block text-blue-500 hover:text-gray-200 transition duration-170 ease-in-out" href="#0">@mr_sebastian</a> */}
              </div>
            </div>

            {/* 4th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={VinesPNG} width="100" height="100" alt="Michael Vines" />
                <h4 className="text-xl font-medium mb-1">Michael Vines</h4>
                <div className="text-gray-700 mb-1">Advisor</div>
                {/* <a className="block text-blue-500 hover:text-gray-200 transition duration-170 ease-in-out" href="#0">@timothychandran</a> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;