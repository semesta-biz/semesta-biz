import { useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';
import { useDimensions } from 'react-hook-dimensions';

import BLOG from '@/blog.config';

const CorporateHome = () => {
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
        // container: '#wrapper',
        actions: [
          {
            visibility:[0,1],
            type: "loop",
            frames: [0, 60],
          },
        ],
      });
    });
  }, [lottieRef, updateElementDimensions]);

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
      <header className={`px-5 md:px-0 ${BLOG.font === 'serif' ? 'font-serif' : 'font-sans'}`}>
        <div className="container md:flex mx-auto">
          <div>
            <h1 className="text-2xl lg:text-5xl leading-none font-extrabold tracking-tight mt-10 sm:mt-14 mb-3 text-gray-900">
              We build <mark className="bg-clip-text decoration-clone bg-gradient-to-b from-[#feac0e] via-[#da3654] to-[#da3654] text-transparent">fast sites & apps</mark>
            </h1>
            <hr className="w-1/4 border-[#27b5d3] border-t-8 my-3"></hr>
            <p className="text-xl text-gray-800">Work with us to get your business an outstanding digital profile with a tailored-made website.</p>
            <ul className="list-inside my-3 space-y-2 text-gray-800">
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
          <div ref={elementRef} className="container mx-auto h-48 md:h-auto overflow-hidden">
            <div className="mt-16 md:-mt-3">
              <lottie-player
                ref={lottieRef}
                id="firstLottie"
                src="/json/lf30_editor_hultmyav.json"
                style={{ width: (elementDimensions.width + 45), height: (elementDimensions.height + 45) }}
              />
            </div>
          </div>
        </div>
      </header>
    </motion.div> 
  )
}

export default CorporateHome