import { useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { useViewportSpy } from 'beautiful-react-hooks';

import BLOG from '@/blog.config';

const Header = dynamic(() => import('@/components/Header-homepage'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

const features = [
  {
    name: 'eCommerce',
    description:
      'Drive sales with e-commerce experience. Gain market traction and grow',
    cover: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    href: '/services/ecommerce'
  },
  {
    name: 'Corporate Websites',
    description: 'Build a modern & blazing fast website deployed on global content delivery cloud',
    cover: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    href: '/services/corporate-website'
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
  const isProcessVisible = useViewportSpy(processRef);
  return (
    <>
      <Head>
        <title>Services &bull; {BLOG.title}</title>
        <meta name="robots" content="follow, index" />
        <meta charSet="UTF-8" />
        {BLOG.seo.keywords && (
          <meta name="keywords" content={BLOG.seo.keywords.join(', ')} />
        )}
        <meta name="description" content={BLOG.description} />
        <meta property="og:locale" content={BLOG.lang} />
        <meta property="og:title" content={BLOG.title} />
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
        <meta name="twitter:description" content={BLOG.description} />
        <meta name="twitter:title" content={BLOG.title} />
        <meta
          name="twitter:image"
          content="https://cdn.statically.io/gh/semesta-biz/semesta-biz/main/public/img/sm.png"
        />
      </Head>
      <div className="relative">
        <div className="z-0 absolute top-[60%] left-1/3 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" />
        <div className="z-0 absolute top-[62%] left-1/3 w-96 h-96 bg-purple-300 rounded-full mix-blend-overlay filter blur-xl opacity-50 animate-blob" />
        <div className="z-0 absolute top-[60%] left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000" />
        <Header navBarTitle={BLOG.title}/>
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
            <div className="relative lg:flex lg:justify-between md:items-center">
              <div className="pl-4 md:pl-24 pr-4 flex-shrink w-full md:w-1/2 z-10 md:z-auto">
                <h1 className="text-2xl lg:text-5xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10 dark:text-white ">An Integrated Web/App Consultancy & Development Solutions in Klang Valley.</h1>
                <p className="text-xl">We&apos;ll help you build a 🚀 <mark className="bg-clip-text decoration-clone bg-gradient-to-b from-green-400 to-blue-500 text-transparent">fast</mark> and <mark className="bg-clip-text decoration-clone bg-gradient-to-b from-blue-400 to-pink-500 text-transparent">modern website</mark> or <mark className="bg-clip-text decoration-clone bg-gradient-to-b from-yellow-400 to-red-500 text-transparent">ecommerce store</mark> that will bring you customers and stay on top of your competition. Top notch custom web development solutions aligned with your business goals.</p>
                <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 my-10">
                  <a onClick={() => { window.Chatra('openChat', true) }} className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200">Let&apos;s Talk</a>
                </div>
              </div>
              <motion.div variants={variants} className="absolute inset-0 md:relative z-0 md:z-auto flex -space-x-96 space-y-12 py-10 overflow-hidden">
                <motion.img
                  className="inline-block h-96 ring-10 ring-white rounded-lg shadow"
                  src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80"
                  alt="analytics"
                  variants={itemVariants}
                />
                <motion.img
                  className="inline-block h-96 ring-10 ring-white rounded-lg shadow"
                  src="https://cdn.statically.io/gh/semesta-biz/semesta-biz/main/public/img/sm.png"
                  alt="Semesta Mart"
                  height={384}
                  width={569.5}
                  variants={itemVariants}
                />
              </motion.div>
            </div>
          </header>
        </motion.div>
        
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={processRef}>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase text-center">What we do</h2>
            <p className="mt-4 max-w-2xl text-4xl text-gray-500 dark:text-gray-200 lg:mx-auto text-center">
              Perfect for SMBs and enterprise
            </p>

            <motion.div
              className="mt-10"
              variants={{
                initial: {
                  opacity: 0,
                  y: 100,
                  display: "none",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  display: "block",
                },
              }}
              initial="initial"
              animate={isProcessVisible ? 'visible' : 'initial'}
              transition={{
                duration: 1.0,
              }}
            >
              <motion.div variants={variants} className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <motion.div key={feature.name} className="flex justify-center flex-col relative rounded shadow-xl h-96 bg-cover" variants={itemVariants} style={{ backgroundImage: `url(${feature.cover})`}}>
                    <div className="bg-white bg-opacity-75 px-10">
                      <p className="ml-4 mt-4 text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">{feature.name}</p>
                      <div className="mt-2 ml-4 mb-4 text-base text-gray-500">{feature.description}</div>
                      <div className="flex justify-end ml-4 mb-4">
                        <Link href={feature.href}>
                          <a
                            className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200">
                              Learn
                          </a>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer fullWidth={true} />
    </>
  )
}

export default ServicesPages
