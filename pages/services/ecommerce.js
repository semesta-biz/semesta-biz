import { useRef } from 'react';
import Head from 'next/head';
// import Link from 'next/link';
import dynamic from 'next/dynamic';

import BLOG from '@/blog.config';

const Header = dynamic(() => import('@/components/Header-homepage'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const Hero = dynamic(() => import('@/components/services/commerce-hero'), { ssr: false });

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

const ServicesPages = () => {
  const processRef = useRef();
  return (
    <>
      <Head>
        <title>eCommerce &bull; {BLOG.title}</title>
        <meta name="robots" content="follow, index" />
        <meta charSet="UTF-8" />
        {BLOG.seo.keywords && (
          <meta name="keywords" content="ecommerce, woocommerce, wordpress, elementor, divi" />
        )}
        <meta name="description" content="24/7 Woocommerce website management and support services that power ecommerce growth." />
        <meta property="og:locale" content={BLOG.lang} />
        <meta property="og:title" content={`eCommerce &bull; ${BLOG.title}`} />
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
        <meta name="twitter:description" content="24/7 Woocommerce website management and support services that power ecommerce growth." />
        <meta name="twitter:title" content={`eCommerce &bull; ${BLOG.title}`} />
        <meta
          name="twitter:image"
          content="https://cdn.statically.io/gh/semesta-biz/semesta-biz/main/public/img/sm.png"
        />
      </Head>
      <div className="pb-[70px]" style={{ background: 'url(/svg/wave-bottom.svg) no-repeat bottom/100%,linear-gradient(135deg,#168af0 0%,#8b4ba2 100%' }}>
        <Header navBarTitle={`eCommerce &bull; ${BLOG.title}`} />
        <Hero />
      </div>
      <div className="bg-white">
        <div className="py-3 md:py-12 max-w-7xl xl:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8" ref={processRef}>
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase text-center">Pricing</h2>
          <p className="mt-4 max-w-2xl text-4xl text-gray-500 lg:mx-auto text-center">
            Perfect for SMBs and enterprise
          </p>
          <section className="flex flex-col lg:flex-row items-start items-center lg:justify-center w-full lg:px-10 md:py-12 relative space-y-3 md:space-y-0">
            <article className="hidden md:block bg-white w-4/5 py-10 border-t border-transparent border-b rounded-b rounded-r-none">
              <div className="max-h-[283px] text-center sticky top-0 backdrop-filter backdrop-blur mb-3">
                <h5 className="font-bold text-gray-400 text-base">Pick a suitable plan</h5>
                <h2 className="pb-4 flex justify-center font-bold">
                  <span className="text-5xl proportional-nums">Plan Name</span>
                </h2>
              </div>
              <ul className="divide-y space-y-3">
                <li className="pl-4">Custom domain support</li>
                <li className="pt-3 pl-4">Product limit</li>
                <li className="pt-3 pl-4">Storage</li>
                <li className="pt-3 pl-4">Staff</li>
                <li className="pt-3 pl-4">Bandwith</li>
                <li className="pt-3 pl-4">Sales page drag & drop builder</li>
                <li className="pt-3 pl-4">Theme editor (HTML/CSS/JS)</li>
                <li className="pt-3 pl-4">Minimum purchase checkout</li>
                <li className="pt-3 pl-4">Sokongan Payment Gateway</li>
              </ul>
            </article>
            {plans.map((plan) => (
              <article key={plan.name} className="bg-white w-full md:w-4/5 py-10 border md:border-r-0 rounded-xl md:rounded-none first:rounded-l last:rounded-r-lg last:border-r">
                <div className="max-h-[283px] sticky top-0 backdrop-filter backdrop-blur text-center">
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
      <div className="bg-gray-50 dark:bg-gray-800 border-t border-b border-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <span className="block text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Your WooCommerce Development <span className="line-through text-gray-600">Company</span> Partner</span>
            <p className="dark:text-gray-200">With us, you’ll get a tech partner that’s invested in your success.</p>
          </div>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                onClick={() => { window.Chatra('openChat', true) }}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer fullWidth={true} />
    </>
  )
}

export default ServicesPages
