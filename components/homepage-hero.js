import { useRef, useEffect } from 'react';
import '@lottiefiles/lottie-player';
import dynamic from 'next/dynamic';
import { create } from '@lottiefiles/lottie-interactivity';
import { useDimensions } from 'react-hook-dimensions';

import BLOG from '@/blog.config';

const WavingPalm = dynamic(() => import('@/components/WavingPalm'), { ssr: false });


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
    <header className={`relative max-w-screen-lg xl:max-w-screen-xl mx-auto ${
      BLOG.font === 'serif' ? 'font-serif' : 'font-sans'
    }`}>
      <div className="px-4 md:px-0 my-10 xl:my-8 lg:flex z-10 relative">
        <div className="lg:w-1/2">
          <h1 className="text-4xl mt-8 sm:text-6xl lg:text-5xl leading-none font-extrabold tracking-tight text-gray-900 mb-8 sm:mb-10 dark:text-white">
            WE CONNECT PEOPLE TO DATA AND TECHNOLOGY
          </h1>
          <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium text-gray-500 mb-10 sm:mb-11 dark:text-gray-200">
            <WavingPalm /> &nbsp;We believe in technology to solve people&apos;s problems and generate measurable results for customers.
          </p>
          <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 text-center">
            <a onClick={() => { window.Chatra('openChat', true) }} className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200">Let&apos;s Talk</a>
          </div>
        </div>
        <div ref={elementRef} className="lg:w-1/2 transform -translate-y-10 scale-110">
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
    </header> 
  )
}

export default CorporateHome