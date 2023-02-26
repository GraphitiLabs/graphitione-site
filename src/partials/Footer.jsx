import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16 text-center ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm m-5">&copy; 2023 Graphiti, Inc. All rights reserved.</div>

            {/* <div className="md:col-span-10 lg:col-span-7 grid sm:grid-cols-3 gap-8"> */}
              {/* other links */}
              <div className="grid content-center gap-5 grid-cols-3 text-center">
                <div className='mb-1 text-center'>
                  <a className='text-gray-700 hover:text-blue-500 transition duration-150 ease-in-out px-4 py-2 text-center justify-center' href="mailto:ketan@graphiti.app">Contact</a>
                </div>

                <div className='mb-1 text-center'>
                  <a className='text-gray-700 hover:text-blue-500 transition duration-150 ease-in-out px-4 py-2 text-center' href="https://discord.com/invite/64WBQTEXz4">Discord</a>
                </div>

                <div className='mb-1 text-center'>
                  <a className='text-gray-700 hover:text-blue-500 transition duration-150 ease-in-out px-4 py-2 text-center' href="https://twitter.com/graphitiAI">Twitter</a>
                </div>
              </div>

            </div>

          {/* </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
