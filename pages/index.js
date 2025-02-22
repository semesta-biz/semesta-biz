import { useRef } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import chartSvg from "../public/img/chart.svg";
import BLOG from '@/blog.config';

const Header = dynamic(() => import('@/components/Header-homepage'), { ssr: false });
const IsInView = dynamic(() => import('@/layout/component-is-in-view'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const Hero = dynamic(() => import('@/components/homepage-hero'), { ssr: false });

const features = [
  {
    name: 'Early stage tech guidance',
    description:
      'We work with early stage digital products to help define the technology path. We conduct a short discovery session to establish the short-term goals towards a successful minimum viable product',
    icon: <span>🌤</span>,
  },
  {
    name: 'Tech audits',
    description:
      'We have audited thousands of lines of code and work with brands like Semesta Mart to optimize their solutions.',
    icon: <span>🧐</span>,
  },
  {
    name: 'Performance optimisation',
    description:
      'We are top-tier experts in the Wordpress ecosystem. We helped one of our clients to improve their e-commerce performance by over 350%',
    icon: <span>🚀</span>,
  },
  {
    name: 'Building from A to Z',
    description:
      'Want us to build your solution from the ground up? Don’t worry. We’ve got you covered, our deep engineering background means we love tech challenges.',
    icon: <span>💡</span>,
  },
];

const blog = () => {
  const processRef = useRef();
  return (
    <>
      <Head>
        <title>{BLOG.title}</title>
        <meta content={BLOG.darkBackground} name="theme-color" />
        <meta name="robots" content="follow, index" />
        <meta charSet="UTF-8" />
        {BLOG.seo.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={BLOG.seo.googleSiteVerification}
          />
        )}
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
          content="https://cdn.statically.io/gh/semesta-biz/semesta-biz/main/logo.png"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={BLOG.description} />
        <meta name="twitter:title" content={BLOG.title} />
        <meta
          name="twitter:image"
          content="https://cdn.statically.io/gh/semesta-biz/semesta-biz/main/logo.png"
        />
      </Head>
      <div className="bg-gradient-to-t from-gray-50 dark:from-white to-pink-50 via-blue-200 dark:via-blue-50 animate-gradient-y bg-auto">
        <Header navBarTitle={BLOG.title}/>
        <Hero />
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={processRef}>
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Process</h2>
              <p className="mt-4 max-w-2xl text-4xl text-gray-500 lg:mx-auto">
                How we helped our clients
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-50 text-3xl">
                        {feature.icon}
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-10 bg-white">
        <Image src={chartSvg} loading="lazy" alt="work planned" />
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 border-t border-b border-gray-50 mt-6">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <span className="block text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Ongoing WordPress Development and Growth</span>
            <p className="dark:text-gray-200">Delegate your complete digital and WordPress development activities to a reliable partner and focus on growing your business.</p>
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
      <IsInView>
        <Footer fullWidth={true} />
      </IsInView>
    </>
  )
}

export default blog
