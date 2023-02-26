import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';
import Modal from '../utils/Modal';

import TabsImage01 from '../images/tabs-image-01.jpg';
import HeroImage01 from '../images/hero-image-01.jpg';

function Tabs() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const [checked, setCheck] = useState(false);

  const heightFix = () => {
    if (tabs.current.children[tab - 1]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12" data-aos-id-tabs>
            <h2 className="h2 mb-4 text-gray-700" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">Bringing the first suite of AI-powered blockchain tools to you</h2>
            {/* <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-tabs]">
            </p> */}
          </div>

          {/* Section content */}
          <div>
            {/* Tabs buttons */}
            <div className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-200 rounded-full group transition duration-500 ${tab !== 1 && 'opacity-60'}`}
                onClick={() => setTab(1)}
              >
                <svg className="w-4 h-4 fill-current text-blue-500 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M9.1 19.7L8.8 19L9 18.6C7.1 18.1 6 17.3 6 17V14.8C7.3 15.4 8.8 15.8 10.6 16C11.3 15.2 12.2 14.5 13.1 14H12C9.6 14 7.3 13.4 6 12.5V9.6C7.5 10.4 9.6 11 12 11S16.5 10.5 18 9.6V12.4C17.7 12.6 17.4 12.8 17 13C18 13 19 13.2 20 13.6V7C20 4.8 16.4 3 12 3S4 4.8 4 7V17C4 18.8 6.4 20.3 9.7 20.8C9.5 20.5 9.3 20.1 9.1 19.7M12 5C15.9 5 18 6.5 18 7S15.9 9 12 9 6 7.5 6 7 8.1 5 12 5M17 18C17.6 18 18 18.4 18 19S17.6 20 17 20 16 19.6 16 19 16.4 18 17 18M17 15C14.3 15 11.9 16.7 11 19C11.9 21.3 14.3 23 17 23S22.1 21.3 23 19C22.1 16.7 19.7 15 17 15M17 21.5C15.6 21.5 14.5 20.4 14.5 19S15.6 16.5 17 16.5 19.5 17.6 19.5 19 18.4 21.5 17 21.5Z" />                </svg>
                <span className="text-gray-700 group-hover:text-blue-500 transition-colors duration-150 ease-in-out">AI Oracles</span>
              </button>

              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-200 rounded-full group transition duration-500 ${tab !== 2 && 'opacity-60'}`}
                onClick={() => setTab(2)}
              >
                <svg className="w-4 h-4 fill-current text-blue-500 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /> </svg>
                <span className="text-gray-700 group-hover:text-blue-500 transition-colors duration-150 ease-in-out">DeFi Insights</span>
              </button>

              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-200 rounded-full group transition duration-500 ${tab !== 3 && 'opacity-60'}`}
                onClick={() => setTab(3)}
              >
                <svg className="w-4 h-4 fill-current text-blue-500 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M12,5H9L13,1L17,5H14V9.43C13.25,9.89 12.58,10.46 12,11.12V5M10.4,15H8.5L7.8,13H4.6L3.9,15H2L5.2,6H7.2L10.4,15M7.35,11.65L6.2,8L5.05,11.65H7.35M23,11L19,7V10C15.39,9.85 12.31,12.57 12,16.17C10.44,16.72 9.62,18.44 10.17,20C10.72,21.56 12.44,22.38 14,21.83C15.56,21.27 16.38,19.56 15.83,18C15.53,17.14 14.85,16.47 14,16.17C14.47,12.17 18.47,11.97 18.95,11.97V14.97L23,11Z" />
                </svg>
                <span className="text-gray-700 group-hover:text-blue-500 transition-colors duration-150 ease-in-out">Smart DAOs</span>
              </button>

              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-200 rounded-full group transition duration-500 ${tab !== 4 && 'opacity-60'}`}
                onClick={() => setTab(4)}
              >
                <svg className="w-4 h-4 fill-current text-blue-500 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M9.75 20.85C11.53 20.15 11.14 18.22 10.24 17C9.35 15.75 8.12 14.89 6.88 14.06C6 13.5 5.19 12.8 4.54 12C4.26 11.67 3.69 11.06 4.27 10.94C4.86 10.82 5.88 11.4 6.4 11.62C7.31 12 8.21 12.44 9.05 12.96L10.06 11.26C8.5 10.23 6.5 9.32 4.64 9.05C3.58 8.89 2.46 9.11 2.1 10.26C1.78 11.25 2.29 12.25 2.87 13.03C4.24 14.86 6.37 15.74 7.96 17.32C8.3 17.65 8.71 18.04 8.91 18.5C9.12 18.94 9.07 18.97 8.6 18.97C7.36 18.97 5.81 18 4.8 17.36L3.79 19.06C5.32 20 7.88 21.47 9.75 20.85M20.84 5.25C21.06 5.03 21.06 4.67 20.84 4.46L19.54 3.16C19.33 2.95 18.97 2.95 18.76 3.16L17.74 4.18L19.82 6.26M11 10.92V13H13.08L19.23 6.85L17.15 4.77L11 10.92Z" />                </svg>
                <span className="text-gray-700 group-hover:text-blue-500 transition-colors duration-150 ease-in-out">AI Art NFTs</span>
              </button>

              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-200 rounded-full group transition duration-500 ${tab !== 5 && 'opacity-60'}`}
                onClick={() => setTab(5)}
              >
                <svg className="w-4 h-4 fill-current text-blue-500 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M11.5,10C14,10 16,12 16,14.5C16,17 14,19 11.5,19C9,19 7,17 7,14.5C7,12 9,10 11.5,10M11.5,11.5C10.94,11.5 10.42,11.65 10,11.92L14.08,16C14.35,15.58 14.5,15.06 14.5,14.5A3,3 0 0,0 11.5,11.5M8.5,14.5A3,3 0 0,0 11.5,17.5C12.06,17.5 12.58,17.35 13,17.08L8.92,13C8.65,13.42 8.5,13.94 8.5,14.5Z" />
                </svg>
                <span className="text-gray-700 group-hover:text-blue-500 transition-colors duration-150 ease-in-out">Content Moderation</span>
              </button>

              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-200 rounded-full group transition duration-500 ${tab !== 6 && 'opacity-60'}`}
                onClick={() => setTab(6)}
              >
                <svg className="w-4 h-4 fill-current text-blue-500 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M17.81,4.47C17.73,4.47 17.65,4.45 17.58,4.41C15.66,3.42 14,3 12,3C10.03,3 8.15,3.47 6.44,4.41C6.2,4.54 5.9,4.45 5.76,4.21C5.63,3.97 5.72,3.66 5.96,3.53C7.82,2.5 9.86,2 12,2C14.14,2 16,2.47 18.04,3.5C18.29,3.65 18.38,3.95 18.25,4.19C18.16,4.37 18,4.47 17.81,4.47M3.5,9.72C3.4,9.72 3.3,9.69 3.21,9.63C3,9.47 2.93,9.16 3.09,8.93C4.08,7.53 5.34,6.43 6.84,5.66C10,4.04 14,4.03 17.15,5.65C18.65,6.42 19.91,7.5 20.9,8.9C21.06,9.12 21,9.44 20.78,9.6C20.55,9.76 20.24,9.71 20.08,9.5C19.18,8.22 18.04,7.23 16.69,6.54C13.82,5.07 10.15,5.07 7.29,6.55C5.93,7.25 4.79,8.25 3.89,9.5C3.81,9.65 3.66,9.72 3.5,9.72M9.75,21.79C9.62,21.79 9.5,21.74 9.4,21.64C8.53,20.77 8.06,20.21 7.39,19C6.7,17.77 6.34,16.27 6.34,14.66C6.34,11.69 8.88,9.27 12,9.27C15.12,9.27 17.66,11.69 17.66,14.66A0.5,0.5 0 0,1 17.16,15.16A0.5,0.5 0 0,1 16.66,14.66C16.66,12.24 14.57,10.27 12,10.27C9.43,10.27 7.34,12.24 7.34,14.66C7.34,16.1 7.66,17.43 8.27,18.5C8.91,19.66 9.35,20.15 10.12,20.93C10.31,21.13 10.31,21.44 10.12,21.64C10,21.74 9.88,21.79 9.75,21.79M16.92,19.94C15.73,19.94 14.68,19.64 13.82,19.05C12.33,18.04 11.44,16.4 11.44,14.66A0.5,0.5 0 0,1 11.94,14.16A0.5,0.5 0 0,1 12.44,14.66C12.44,16.07 13.16,17.4 14.38,18.22C15.09,18.7 15.92,18.93 16.92,18.93C17.16,18.93 17.56,18.9 17.96,18.83C18.23,18.78 18.5,18.96 18.54,19.24C18.59,19.5 18.41,19.77 18.13,19.82C17.56,19.93 17.06,19.94 16.92,19.94M14.91,22C14.87,22 14.82,22 14.78,22C13.19,21.54 12.15,20.95 11.06,19.88C9.66,18.5 8.89,16.64 8.89,14.66C8.89,13.04 10.27,11.72 11.97,11.72C13.67,11.72 15.05,13.04 15.05,14.66C15.05,15.73 16,16.6 17.13,16.6C18.28,16.6 19.21,15.73 19.21,14.66C19.21,10.89 15.96,7.83 11.96,7.83C9.12,7.83 6.5,9.41 5.35,11.86C4.96,12.67 4.76,13.62 4.76,14.66C4.76,15.44 4.83,16.67 5.43,18.27C5.53,18.53 5.4,18.82 5.14,18.91C4.88,19 4.59,18.87 4.5,18.62C4,17.31 3.77,16 3.77,14.66C3.77,13.46 4,12.37 4.45,11.42C5.78,8.63 8.73,6.82 11.96,6.82C16.5,6.82 20.21,10.33 20.21,14.65C20.21,16.27 18.83,17.59 17.13,17.59C15.43,17.59 14.05,16.27 14.05,14.65C14.05,13.58 13.12,12.71 11.97,12.71C10.82,12.71 9.89,13.58 9.89,14.65C9.89,16.36 10.55,17.96 11.76,19.16C12.71,20.1 13.62,20.62 15.03,21C15.3,21.08 15.45,21.36 15.38,21.62C15.33,21.85 15.12,22 14.91,22Z" />
                </svg>
                <span className="text-gray-700 group-hover:text-blue-500 transition-colors duration-150 ease-in-out">2FA Biometric Auth</span>
              </button>

              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-200 rounded-full group transition duration-500 ${tab !== 7 && 'opacity-60'}`}
                onClick={() => setTab(7)}
              >
                <svg className="w-4 h-4 fill-current text-blue-500 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z" />                </svg>
                <span className="text-gray-700 group-hover:text-blue-500 transition-colors duration-150 ease-in-out">More Coming...</span>
              </button>
            </div>

            {/* Tabs items */}
            <div className="relative flex flex-col mt-16" data-aos="fade-up" ref={tabs}>
              {/* <div className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]" ref={tabs}> */}
              {/* Item 1 */}
              <Transition
                show={tab === 1}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <div className="relative bg-gradient-to-r from-blue-200 to-sky-100 py-8 md:py-16 px-6 md:pr-16 rounded-xl">
                    <h4 className="h4 mb-2">Predictions sent straight to your smart contracts</h4>
                    <p className="text-lg text-gray-700">Get AI powered insights about twitter sentiment trading signals, NFT price predictions, and access TradFi models on-chain to power unique smart contact applications. </p>
                  </div>
                </article>
              </Transition>

              {/* Item 2 */}
              <Transition
                show={tab === 2}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <div className="relative bg-gradient-to-r from-blue-200 to-sky-100 py-8 md:py-16 px-6 md:pr-16 rounded-xl">
                    <h4 className="h4 mb-2">Augment your DeFi apps with better trading tools and lending capability</h4>
                    <p className="text-lg text-gray-700">Build and incorporate decentralized crypto trading signals into your smart contracts and DApps! Identify transaction behavior that is malicious, and automatically raise fees for these users.</p>
                  </div>
                </article>
              </Transition>


              {/* Item 3 */}
              <Transition
                show={tab === 3}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <div className="relative bg-gradient-to-r from-blue-200 to-sky-100 py-8 md:py-16 px-6 md:pr-16 rounded-xl">
                    <h4 className="h4 mb-2">DAOs that leverage trustless insight</h4>
                    <p className="text-lg text-gray-700">Grant DAO members access to trustless AI feeds to make better decisions. Have decentralized moderation on DAO proposals to mitigate clutter and spam. Make optimized decisions by governing ML driven smart contracts.</p>
                  </div>
                </article>
              </Transition>

              {/* Item 4 */}
              <Transition
                show={tab === 4}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <div className="relative bg-gradient-to-r from-blue-200 to-sky-100 py-8 md:py-16 px-6 md:pr-16 rounded-xl">
                    <h4 className="h4 mb-2">Infuse NFTs with AI!</h4>
                    <p className="text-lg text-gray-700"> Add randomness and ingenuity to generative NFTs by involving ML models in their creation. Allow these NFTs to evolve using AI based NFT potions. Own your AI art with our novel zero-knowledge proofs!</p>
                  </div>
                </article>
              </Transition>

              {/* Item 5 */}
              <Transition
                show={tab === 5}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <div className="relative bg-gradient-to-r from-blue-200 to-sky-100 py-8 md:py-16 px-6 md:pr-16 rounded-xl">
                    <h4 className="h4 mb-2">Tired of shadow bans but don’t want spam?</h4>
                    <p className="text-lg text-gray-700">Use trustless sentiment analysis to detect aggression and offensive language, to keep your DApp user friendly.
                    Use privacy preserving spam detection to curate content in a Web3 native way. </p>
                  </div>
                </article>
              </Transition>

              {/* Item 6 */}
              <Transition
                show={tab === 6}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <div className="relative bg-gradient-to-r from-blue-200 to-sky-100 py-8 md:py-16 px-6 md:pr-16 rounded-xl">
                    <h4 className="h4 mb-2">A new layer of security</h4>
                    <p className="text-lg text-gray-700">Leverage biometric authentication models on crypto wallets to protect your users funds!
                     Provide zero-knowledge proofs of membership to existing Web3 services.
                    </p>
                  </div>
                </article>
              </Transition>

              {/* Item 7 */}
              <Transition
                show={tab === 7}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                <div className="relative bg-gradient-to-r from-blue-200 to-sky-100 py-8 md:py-16 px-6 md:pr-16 rounded-xl">
                    <h4 className="h4 mb-2">We're working hard!</h4>
                    <p className="text-lg text-gray-700">We're constantly ideating to add new offerings. If you have a specific use case you'd like us to build out, reach out to us!</p>
                  </div>
                </article>
              </Transition>
            </div>
          </div>

          {/* Text */}
          <div className="max-w-3xl mx-auto sm:max-w-none sm:grid content-center gap-y-2 sm:justify-center text-center pt-6 pb-6" data-aos-id-tabs>
            <p className="text-xl text-gray-700" data-aos="fade-up">Have a use case in mind that we don’t have?</p>
            <p className="text-xl text-gray-700" data-aos="fade-up">Get in touch and we’ll build it for you!</p>
          </div>

          {/* Button */}
          <div className="max-w-3xl mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div data-aos="fade-up" data-aos-delay="400">
              <a className="btn text-white bg-blue-500 hover:bg-blue-600 rounded-xl w-full mb-4 sm:w-auto sm:mb-0" href="#0" onClick={(e) => { setCheck(false); e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }}>
                Reach out to us!
              </a>
            </div>
          </div>

          <Modal id="modal" ariaLabel="modal-headlinew to" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
            <div class="relative w-full h-full max-w-xl md:h-auto">

              <div class="relative bg-white rounded-xl shadow dark:bg-gray-700">

                <div class="flex content-center items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-xl font-semibold text-gray-700 dark:text-white">
                    Reach out to us!
                  </h3>
                  <div data-aos="fade-up" data-aos-delay="400">
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-xl text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={(e) => setVideoModalOpen(false)}>
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                  </div>
                </div>

                <div class="flex justify-center grid-cols-2 content-between gap-3">
                  <div class="mb-3 mt-3 xl:w-44">
                    <input
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput5"
                      value="ketan@graphiti.app"
                      aria-label="readonly input example"
                      readonly />
                  </div>

                  <div class="">
                    <button type="button" class="mb-3 mt-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-xl text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={(e) => { navigator.clipboard.writeText("ketan@graphiti.app"); setCheck(true); }}>
                      {
                        checked ?
                        <svg class="w-7 h-7 text-green-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                        </svg>
                      :
                        <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
                        </svg>
                      }
                    </button>

                  </div>
                </div>

              </div>

              {/* <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button data-modal-hide="staticModal" type="button" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700">I accept</button>
                    <button data-modal-hide="staticModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                  </div> */}
            </div>
          </Modal>

        </div>
      </div>
    </section>
  );
}

export default Tabs;
