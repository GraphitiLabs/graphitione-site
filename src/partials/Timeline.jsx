import React from 'react';

function Timeline() {
  return (
    <section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
<div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Bringing the world's ideas to life</h2>
            <p className="text-xl  text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div> */}

          {/* Items */}
          <div className="max-w-3xl mx-auto -my-4 md:-my-6" data-aos-id-timeline>

            {/* 1st item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                {/* <div className="font-mono text-lg text-blue-500 mb-2">Early work</div> */}
                <div className="flex items-center mb-3">
                  <div className="absolute -left-3 inline-flex text-sm font-semibold py-1 px-2  text-gray-700  bg-green-200 rounded-full">Jun 2021</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-blue-500 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Researched attacks on blockchains</h4>
                </div>
                <p className="text-lg  text-gray-700">Researched reinforcement learning tools to model selfish mining techniques on blockchains and attacks on development pipelines. </p>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                {/* <div className="font-mono text-lg text-blue-500 mb-2">New features</div> */}
                <div className="flex items-center mb-3">
                  <div className="absolute -left-3 inline-flex text-sm font-semibold py-1 px-2  text-gray-700  bg-green-200 rounded-full">Aug 2021</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-blue-500 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Columbia Blockchain Cyberdefense Challenge</h4>
                </div>
                <p className="text-lg  text-gray-700">Won the Columbia Blockchain Cyberdefense challenge sponsored by IBM and Certik. Used insights from reinforcement learning and development pipeline attacks.</p>
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                {/* <div className="font-mono text-lg text-blue-500 mb-2">Pivoting</div> */}
                <div className="flex items-center mb-3">
                  <div className="absolute -left-3 inline-flex text-sm font-semibold py-1 px-2  text-gray-700  bg-green-200 rounded-full">Mar 2022</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-blue-500 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Columbia Lionhack</h4>
                </div>
                <p className="text-lg  text-gray-700">Won Columbia's Lionhack 2021 with an MVP that enabled artists to prove ownership of their AI-generated art.</p>
              </div>
            </div>

            {/* 4th item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                {/* <div className="font-mono text-lg text-blue-500 mb-2">Huge milestone</div> */}
                <div className="flex items-center mb-3">
                  <div className="absolute -left-3 inline-flex text-sm font-semibold py-1 px-2  text-gray-700  bg-green-200 rounded-full">May 2022</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-blue-500 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">FTX Regrant Program</h4>
                </div>
                <p className="text-lg  text-gray-700">Received funding from the FTX Regrant Program to research blockchain AI safety.</p>
              </div>
            </div>

            {/* 5th item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                {/* <div className="font-mono text-lg text-blue-500 mb-2">Huge milestone</div> */}
                <div className="flex items-center mb-3">
                  <div className="absolute -left-3 inline-flex text-sm font-semibold py-1 px-2  text-gray-700  bg-green-200 rounded-full">Jun 2022</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-blue-500 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Researching Cryptographic Primitives</h4>
                </div>
                <p className="text-lg  text-gray-700">R&D to identify the right cryptographic primitives for making trustless AI viable.</p>
              </div>
            </div>

            {/* 6th item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                {/* <div className="font-mono text-lg text-blue-500 mb-2">Huge milestone</div> */}
                <div className="flex items-center mb-3">
                  <div className="absolute -left-3 inline-flex text-sm font-semibold py-1 px-2  text-gray-700  bg-green-200 rounded-full">Nov 2022</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-blue-500 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Zero-Knowledge GPU Hardware Acceleration</h4>
                </div>
                <p className="text-lg  text-gray-700">Worked on GPU parallelization of ZK provers to gain insight into scalability.</p>
              </div>
            </div>

            {/* 7th item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                {/* <div className="font-mono text-lg text-blue-500 mb-2">Huge milestone</div> */}
                <div className="flex items-center mb-3">
                  <div className="absolute -left-3 inline-flex text-sm font-semibold py-1 px-2  text-gray-700  bg-green-200 rounded-full">Dec 2022</div>
                  <div className="absolute left-0 w-2 h-2 bg-blue-500 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Customer Discovery</h4>
                </div>
                <p className="text-lg  text-gray-700">Conducted over 30 interviews in the US and India for targeted customer discovery.</p>
              </div>
            </div>

          </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Timeline;