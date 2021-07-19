import { useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';
import { useDimensions } from 'react-hook-dimensions';

import BLOG from '@/blog.config';

const CommerceHome = () => {
  const lottieRef = useRef();
  const [elementRef, elementDimensions, updateElementDimensions] = useDimensions({
    dependencies: [],
    defaults: {
      height: 200,
      scrollY: 93,
    },
    layoutEffect: true,
  });

  useEffect(() => {
    lottieRef.current.addEventListener('load', function (e) {
      create({
        mode: 'scroll',
        player: '#firstLottie',
        actions: [
          {
            visibility:[0,1],
            type: "loop",
            frames: [0, 60],
          },
        ],
      });
    });
  }, [lottieRef, elementDimensions]);

  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
          display: "none",
        },
        visible: {
          opacity: 1,
          display: "block",
        },
      }}
      initial="initial"
      animate="visible"
      transition={{
        duration: 1.0,
      }}
      onAnimationComplete={() => {
        updateElementDimensions();
      }}
    >
      <header className={`max-w-7xl xl:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ${
        BLOG.font === 'serif' ? 'font-serif' : 'font-sans'
      }`}>
        <div className="md:flex md:justify-around md:items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl lg:text-5xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 sm:mt-14 mb-3 dark:text-white">
              <span>🛒</span><br />
              Everything <mark className="bg-clip-text decoration-clone bg-gradient-to-b from-yellow-400 to-red-500 text-transparent">eCommerce</mark> in three simple plans.
            </h1>
            <p className="text-xl dark:text-white">Take the guesswork out of managing your new or growing online business.</p>
            <ul className="list-inside my-3 space-y-2 dark:text-white">
              <li className="flex space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="flex-grow">Improve planning with inventory management tools</span>
              </li>
              <li className="flex space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="flex-grow">Craft personalized shopping experiences with customer groups</span>
              </li>
              <li className="flex space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="flex-grow">Choose from leading shipping and payment providers to find your best fit solutions, without penalties</span>
              </li>
            </ul>
          </div>
          <div ref={elementRef} className="flex-1">
            <div className="transform translate-y-10 md:-translate-y-8 scale-110">
              <lottie-player
                ref={lottieRef}
                id="firstLottie"
                src="/json/digital-marketing.json"
                loop
                autoplay
                style={{ width: elementDimensions.width, height: elementDimensions.height }}
              />
            </div>
          </div>
        </div>
      </header>
    </motion.div>
  )
}

export default CommerceHome