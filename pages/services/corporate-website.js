import { useRef } from 'react';
import Head from 'next/head';
// import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";

import BLOG from '@/blog.config';

const Header = dynamic(() => import('@/components/Header-homepage'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

const plans = [
  {
    name: 'B40',
    price: '49.99',
    features: [
      (<><span className="inline-block md:hidden">Custom domain support</span><span>✅</span></>),
      (<><span className="inline-block md:hidden">Product limit</span> <span>unlimited</span></>),
      (<><span>10GB</span> <span className="inline-block md:hidden">storage</span></>),
      (<><span>2</span> <span className="inline-block md:hidden">support staff</span></>),
      (<><span className="mr-3">✅</span><span className="inline-block md:hidden">Bandwith</span></>),
      (<><span className="mr-3">✅</span><span className="inline-block md:hidden">Sales page drag & drop builder</span></>),
      (<><span className="mr-3">✅</span><span className="inline-block md:hidden">Theme editor (HTML/CSS/JS)</span></>),
      (<><span className="mr-3">✅</span><span className="inline-block md:hidden">Minimum purchase checkout</span></>),
      (<><span className="mr-3">✅</span><span className="inline-block md:hidden">Sokongan Payment Gateway</span></>),
    ],
  },
  {
    name: 'M40',
    price: '79.99',
    features: [
      (<><span className="inline-block md:hidden">Custom domain support</span> <span>✅</span></>),
      (<><span className="inline-block md:hidden">Product limit</span> <span>unlimited</span></>),
      (<><span>20GB</span> <span className="inline-block md:hidden">storage</span></>),
      (<><span>5</span> <span className="inline-block md:hidden">support staff</span></>),
      (<><span className="mr-3">✅</span><span className="inline-block md:hidden">Bandwith</span></>),
      (<><span className="mr-3">✅</span><span className="inline-block md:hidden">Sales page drag & drop builder</span></>),
      (<><span className="mr-3">✅</span><span className="inline-block md:hidden">Theme editor (HTML/CSS/JS)</span></>),
      (<><span className="mr-3">✅</span><span className="inline-block md:hidden">Minimum purchase checkout</span></>),
      (<><span className="mr-3">✅</span><span className="inline-block md:hidden">Sokongan Payment Gateway</span></>),
    ],
  },
  {
    name: 'T20',
    price: '99.99',
    features: [
      (<><span className="inline-block md:hidden">Custom domain support</span> <span>✅</span></>),
      (<><span className="inline-block md:hidden">Product limit</span> <span>unlimited</span></>),
      (<><span>30GB</span> <span className="inline-block md:hidden">storage</span></>),
      (<><span>8</span> <span className="inline-block md:hidden">support staff</span></>),
      (<><span className="mr-3">✅</span><span className="inline-block md:hidden">Bandwith</span></>),
      (<><span className="mr-3">✅</span><span className="inline-block md:hidden">Sales page drag & drop builder</span></>),
      (<><span className="mr-3">✅</span><span className="inline-block md:hidden">Theme editor (HTML/CSS/JS)</span></>),
      (<><span className="mr-3">✅</span><span className="inline-block md:hidden">Minimum purchase checkout</span></>),
      (<><span className="mr-3">✅</span><span className="inline-block md:hidden">Sokongan Payment Gateway</span></>),
    ],
  },
];

const features = [
  {
    name: 'Define project goals',
    description:
      'We’ll discuss the main objectives of your website to keep them in mind during the whole project.',
    icon: <img src="https://d2kiq8w3rnav4q.cloudfront.net/images/home/human-agency/animat-image-color.gif" />,
  },
  {
    name: 'Suitable toolset',
    description:
      'Thanks to our know-how we’ll present you a couple of technologies, that will let your website meet your goals best.',
    icon: <img src="https://d2kiq8w3rnav4q.cloudfront.net/images/home/human-agency/animat-diamond-color.gif" />,
  },
  {
    name: 'Transparent work environment',
    description:
      'Email, Whatsapp, Github repository, you’ll get access to all of these to keep an eye on the progress of your website',
    icon: <img src="https://d2kiq8w3rnav4q.cloudfront.net/images/home/human-agency/animat-lightbulb-color.gif" />,
  },
  {
    name: 'Afterproject relationship',
    description:
      'Best of all is we stay in touch with all our clients after the website is built, handling all your feature requests and maintenance, so you can focus on growing your business.',
    icon: <img src="https://d2kiq8w3rnav4q.cloudfront.net/images/home/human-agency/animat-rocket-color.gif" />,
  },
];

const variants = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  initial: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  initial: {
    y: -1000,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const ServicesPages = () => {
  const processRef = useRef();
  return (
    <>
      <Head>
        <title>Blazing fast corporate websites for better business exposure &bull; {BLOG.title}</title>
        <meta name="robots" content="follow, index" />
        <meta charSet="UTF-8" />
        {BLOG.seo.keywords && (
          <meta name="keywords" content="jamstack, corporate website, static pages" />
        )}
        <meta name="description" content="Maximize your business potential with performant websites built with the latest, innovative technologies." />
        <meta property="og:locale" content={BLOG.lang} />
        <meta property="og:title" content={`Corporate Website &bull; ${BLOG.title}`} />
        <meta property="og:description" content={BLOG.description} />
        <meta
          property="og:url"
          content={BLOG.link}
        />
        <meta
          property="og:image"
          content="https://cdn.statically.io/gh/semesta-biz/semesta-biz/main/public/img/sm.png"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Maximize your business potential with performant websites built with the latest, innovative technologies." />
        <meta name="twitter:title" content={`Corporate Website &bull; ${BLOG.title}`} />
        <meta
          name="twitter:image"
          content="https://cdn.statically.io/gh/semesta-biz/semesta-biz/main/public/img/sm.png"
        />
      </Head>
      <div className="relative">
        <div className="z-0 absolute top-[27%] md:top-[60%] left-1/4 md:left-1/3 w-32 h-32 lg:w-96 lg:h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" />
        <div className="z-0 absolute top-[27%] md:top-[62%] right-1/4 md:left-1/3 w-32 h-32 lg:w-96 lg:h-96 bg-purple-300 rounded-full mix-blend-overlay filter blur-xl opacity-50 animate-blob" />
        <div className="z-0 absolute top-[24%] md:top-[60%] left-1/2 w-32 h-32 lg:w-96 lg:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000" />
        <Header navBarTitle={`Corporate Website &bull; ${BLOG.title}`} />
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
        >
          <header className={`relative ${
            BLOG.font === 'serif' ? 'font-serif' : 'font-sans'
          }`}>
            <div className="relative lg:flex lg:justify-around md:items-center">
              <div className="pr-6 pl-6 md:pl-0 md:pr-4 flex-shrink w-full md:w-1/2 z-10 md:z-auto">
                <h1 className="text-2xl lg:text-5xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 sm:mt-14 mb-3 dark:text-white">
                  <span>👨🏻‍💼</span><br />
                  Everything <mark className="bg-clip-text decoration-clone bg-gradient-to-b from-blue-600 to-pink-500 text-transparent">Corporate Website</mark> in three simple plans.
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
              <motion.div variants={variants} className="md:relative z-0 md:z-auto flex -space-x-96 space-y-12 py-10 overflow-hidden">
                <motion.img
                  className="hidden md:inline-block h-96"
                  src="/img/start-woo@2x.jpeg"
                  alt="start woocommerce"
                  variants={itemVariants}
                />
              </motion.div>
            </div>
          </header>
        </motion.div>
        
        <div className="py-3 md:py-12 max-w-7xl xl:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8" ref={processRef}>
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase text-center">Pricing</h2>
          <p className="mt-4 max-w-2xl text-4xl text-gray-500 dark:text-gray-200 lg:mx-auto text-center">
            Perfect for SMBs and enterprise
          </p>
          <section className="flex flex-col lg:flex-row items-start items-center lg:justify-center w-full lg:px-10 md:py-12 relative space-y-3 md:space-y-0">
            <article className="hidden md:block bg-white w-4/5 py-10 border-t border-transparent border-b rounded-b rounded-r-none">
              <div className="max-h-[283px] text-center sticky top-[7%] backdrop-filter backdrop-blur mb-3">
                <h5 className="font-bold text-gray-400 text-base">Pick a suitable plan</h5>
                <h2 className="pb-4 flex justify-center font-bold">
                  <span className="text-5xl proportional-nums">Plan Name</span>
                </h2>
              </div>
              <ul className="divide-y space-y-3">
                <li>Custom domain support</li>
                <li className="pt-3">Product limit</li>
                <li className="pt-3">Storage</li>
                <li className="pt-3">Staff</li>
                <li className="pt-3">Bandwith</li>
                <li className="pt-3">Sales page drag & drop builder</li>
                <li className="pt-3">Theme editor (HTML/CSS/JS)</li>
                <li className="pt-3">Minimum purchase checkout</li>
                <li className="pt-3">Sokongan Payment Gateway</li>
              </ul>
            </article>
            {plans.map((plan) => (
              <article key={plan.name} className="bg-white w-full md:w-4/5 py-10 border md:border-r-0 rounded-xl md:rounded-none first:rounded-l last:rounded-r-lg last:border-r">
                <div className="max-h-[283px] sticky top-[9%] md:top-[7.5%] backdrop-filter backdrop-blur text-center">
                  <h5 className="font-bold text-base">{plan.name}</h5>
                  <h2 className="pb-4 flex justify-center font-bold">
                    <span className="text-3xl mt-6 mr-1">RM</span>
                    <span className="text-6xl proportional-nums"> {plan.price}</span>
                  </h2>
                </div>
                <ul className="divide-y space-y-3 text-left md:text-center">
                  {plan.features.map((feature, i) => (
                    <li className="pt-3 px-3 first:pt-0" key={`${i}_${feature}`}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}            
          </section>
        </div>
      </div>
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Workflow</h2>
            <p className="mt-4 max-w-2xl text-4xl text-gray-500 dark:text-gray-200 lg:mx-auto">
              Designed to help you achieve business goals with the right web dev tools.
            </p>
          </div>
          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature, i) => (
                <div key={feature.name} data-content={i + 1} className="before:text-2xl before:fill-current before:bg-gradient-to-b before:from-yellow-400 before:via-red-500 before:to-pink-500 before:bg-clip-text text-[#e3eef4] before:font-medium before:absolute before:top-0 before:md:top-[-5rem] before:pointer-events-none before:md:text-[18rem] before:right-[5%] before:text-center before:w-1/2 before:z-0 before:content-[attr(data-content)]">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-50 text-3xl">
                      {feature.icon}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer fullWidth={true} />
    </>
  )
}

export default ServicesPages
