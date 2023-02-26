import React from 'react';

function Process() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20 border-t border-gray-800 ">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4" data-aos="fade-up">Built with performance and decentralization in mind</h2>
            <p className="text-xl text-gray-700" data-aos="fade-up" data-aos-delay="200">Our AI-Rollup (AIR) solution allows models to run effectively on chain!</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up">
              {/* <div aria-hidden="true" className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block" style={{ width: 'calc(100% - 32px)', left: 'calc(50% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="200"></div> */}
              <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* <rect className="fill-current text-blue-500" width="24" height="24" rx="32" /> */}
                <path strokeWidth=".1" strokeLinecap="square" className="stroke-current text-blue-500" fill="currentColor" d="M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13A10,10 0 0,1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z" />
                </svg>
              <h4 className="h4 mb-2">Efficient</h4>
              <p className="text-lg  text-gray-700 text-center">Our system brings
              <span className='font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'> speed and scalability </span>
              to AI that effectively runs on blockchains. We minimize resource consumption without compromising performance.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
              {/* <div aria-hidden="true" className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block" style={{ width: 'calc(100% - 32px)', left: 'calc(50% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="400"></div> */}
              <svg className="w-16 h-16 mb-4" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                <path className="stroke-current text-blue-500" fill="currentColor" d="M27 22.25c-0.831 0.002-1.598 0.277-2.215 0.739l0.010-0.007-3.299-2.998c0.82-1.097 1.313-2.479 1.313-3.977 0-1.614-0.572-3.094-1.525-4.249l0.009 0.011 3.644-3.643c0.584 0.391 1.302 0.624 2.074 0.624 2.077 0 3.76-1.683 3.76-3.76s-1.683-3.76-3.76-3.76c-2.077 0-3.76 1.683-3.76 3.76 0 0.773 0.233 1.491 0.633 2.088l-0.009-0.014-3.643 3.643c-1.145-0.944-2.627-1.517-4.244-1.517-0.937 0-1.828 0.192-2.638 0.54l0.044-0.017-1.032-1.874c0.791-0.688 1.288-1.695 1.288-2.819 0-2.060-1.67-3.729-3.729-3.729s-3.729 1.67-3.729 3.729c0 2.060 1.67 3.729 3.729 3.729 0.007 0 0.015-0 0.022-0h-0.001c0.398-0.006 0.778-0.073 1.133-0.194l-0.026 0.008 1.037 1.883c-1.757 1.243-2.89 3.265-2.894 5.553v0.001c0.010 0.697 0.125 1.364 0.33 1.99l-0.013-0.047-1.423 0.603c-0.681-0.971-1.795-1.597-3.056-1.597-2.056 0-3.722 1.666-3.722 3.722s1.666 3.722 3.722 3.722c2.056 0 3.722-1.666 3.722-3.722 0-0.264-0.027-0.521-0.079-0.769l0.004 0.024 1.419-0.602c1.167 2.093 3.367 3.485 5.892 3.485 1.73 0 3.308-0.654 4.5-1.728l-0.006 0.005 3.309 3.007c-0.335 0.544-0.535 1.201-0.539 1.906v0.001c0 2.071 1.679 3.75 3.75 3.75s3.75-1.679 3.75-3.75c0-2.071-1.679-3.75-3.75-3.75v0zM7.69 5c0-1.243 1.007-2.25 2.25-2.25s2.25 1.007 2.25 2.25c0 1.243-1.007 2.25-2.25 2.25v0c-1.242-0.002-2.248-1.008-2.25-2.25v-0zM5 22.92c-1.242-0.001-2.248-1.007-2.248-2.249s1.007-2.249 2.249-2.249c1.242 0 2.248 1.006 2.249 2.248v0c-0.002 1.242-1.008 2.248-2.25 2.25h-0zM27 2.75c1.243 0 2.25 1.007 2.25 2.25s-1.007 2.25-2.25 2.25c-1.243 0-2.25-1.007-2.25-2.25v0c0.002-1.242 1.008-2.248 2.25-2.25h0zM10.69 16c0-0 0-0 0-0.001 0-2.932 2.377-5.309 5.309-5.309s5.309 2.377 5.309 5.309c0 2.932-2.377 5.309-5.309 5.309h-0c-2.931-0.003-5.306-2.378-5.31-5.308v-0zM27 28.25c-1.243 0-2.25-1.007-2.25-2.25s1.007-2.25 2.25-2.25c1.243 0 2.25 1.007 2.25 2.25v0c-0.002 1.242-1.008 2.248-2.25 2.25h-0z"></path>
                </g>
              </svg>
              <h4 className="h4 mb-2">Trustless</h4>
              <p className="text-lg  text-gray-700 text-center">We run Al models off-chain and produce <span className='font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'> zero-knowledge proofs</span> of their execution. The proof is verified on consensus-based smart contract enabled blockchains.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* <rect className="fill-current text-blue-500" width="64" height="64" rx="32" /> */}
                <path strokeWidth=".1" className="stroke-current text-blue-500" fill="currentColor" d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />                  <path className="stroke-current text-gray-100" strokeWidth="2" strokeLinecap="square" d="M36 32l-4-3-4 3V22h8z" />
              </svg>
              <h4 className="h4 mb-2">Tamper Proof</h4>
              <p className="text-lg  text-gray-700 text-center">
              <span className='font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>
                Intellectual property remains invisible </span>
                to users. The hash of the model is committed on chain so that only approved models are used to serve clients. </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Process;
