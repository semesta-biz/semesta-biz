import { useRef } from 'react';
import Head from 'next/head';
// import Link from 'next/link';
import dynamic from 'next/dynamic';

import BLOG from '@/blog.config';

const Header = dynamic(() => import('@/components/Header-homepage'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const CorporateTitle = dynamic(() => import('@/components/services/corporate-title'), { ssr: false });

const plans = [
  {
    name: 'Standard',
    subtitle: 'suitable for start-up',
    price: '2288',
    price_prefix: 'rm',
    price_postfix: '/year',
    features: [
      'Renewal RM899 / year (include domain, hosting, technical support & 8 hours of maintainence)',
      '5 web page designs',
      '3 revisions',
      'Mobile Compatible ✅',
      'Search Engine Submission ✅',
      'Free 1 year Domain & Hosting',
      'Free SSL Certification & Security',
      'SEO Friendly ✅',
    ],
  },
  {
    name: 'Progressive Web Application',
    price: 'Custom',
    price_prefix: '',
    price_postfix: '',
    features: [
      'Dedicated agile development team',
      'Craft beautiful customer experiences',
      'Scalable Enterprise Apps',
      'Tailor-made CMS',
      'NDA Agreement ✅',
      (
        <div key="1">
          <div>
            <h6 className="leading-none font-extrabold tracking-tight mt-10 sm:mt-14 mb-3 text-gray-900 dark:text-white">
              <mark className="bg-clip-text decoration-clone bg-gradient-to-b from-[#feac0e] via-[#da3654] to-[#da3654] text-transparent">Backend</mark>
            </h6>
            <div className="flex items-center space-x-3 justify-center">
              <a href="https://planetscale.com">
                <svg width="44" height="34" viewBox="0 0 44 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42.5912 0.0200195L34.8262 7.88594C31.8541 3.26024 26.7213 0.209964 20.9086 0.209964C16.4778 0.209964 12.3101 1.9865 9.19538 5.22672C6.0916 8.4446 4.38069 12.7128 4.38069 17.2491C4.38069 18.4111 4.49036 19.5507 4.72068 20.6569C4.15037 21.2491 3.15234 22.3329 2.24204 23.5731C0.256937 26.2994 -0.18176 28.344 0.936917 29.6401C1.10143 29.8413 1.6169 30.3776 2.61493 30.4669C2.70267 30.4781 2.77944 30.4781 2.86718 30.4781C4.46843 30.4781 6.45353 29.2826 8.74572 26.9139L26.9626 8.51164L25.6904 7.20438L8.25219 24.8245C6.88126 22.5116 6.17934 19.9753 6.17934 17.2602C6.17934 13.2044 7.70381 9.39432 10.4786 6.52281C13.2533 3.64013 16.9603 2.05354 20.9086 2.05354C26.2278 2.05354 30.8999 4.91387 33.5102 9.20438L19.6473 23.2491C18.748 24.1653 17.6184 25.2938 16.7958 26.5563C15.3042 28.8245 15.6333 30.5116 15.9623 31.3049L15.9733 31.3273C16.3571 32.21 17.0152 32.9139 17.8816 33.3832C18.8686 33.9083 19.8667 33.9865 20.8757 34.02H20.8976H20.9196C25.3723 34.0088 29.5509 32.2658 32.6766 29.0926C35.8243 25.9195 37.5571 21.6737 37.5571 17.1597C37.5571 14.4111 36.9101 11.8189 35.7694 9.5284L43.8634 1.32728L42.5912 0.0200195ZM2.86718 28.6457H2.85622C2.54913 28.6457 2.39558 28.534 2.35171 28.5005L2.30784 28.4446C1.95689 28.0424 2.13237 26.8468 3.68974 24.6904C4.21618 23.953 4.80842 23.2714 5.29098 22.7239C5.70774 23.9083 6.25612 25.048 6.9361 26.1429C4.72068 28.2994 3.44846 28.6457 2.86718 28.6457ZM31.4044 27.7966C28.6187 30.6122 24.8898 32.1764 20.9305 32.1876C19.9325 32.1541 19.3183 32.0759 18.7261 31.7519C18.2216 31.4837 17.8596 31.0926 17.6293 30.5899C17.1906 29.4725 17.9584 28.1094 18.3093 27.5731C19.0332 26.4669 20.086 25.4055 20.9305 24.5563L34.4205 10.9027C35.2759 12.8133 35.7585 14.9362 35.7585 17.1709C35.7365 21.1932 34.2011 24.9697 31.4044 27.7966Z" fill="#1A1B21" />
                </svg>
              </a>
              <a href="https://contentful.com">
                <img src="https://bejamas.io/static/e0c90b311ae9e73d0e333b6b5021698c/contentful.svg" className="h-8" />
              </a>
              <a href="https://strapi.com">
                <img src="https://bejamas.io/static/99a6fe63a94752785a5a13f95d9f8092/strapi.svg" className="h-8" />
              </a>
            </div>
          </div>
          <div>
            <h6 className="leading-none font-extrabold tracking-tight mt-10 sm:mt-14 mb-3 text-gray-900 dark:text-white">
              <mark className="bg-clip-text decoration-clone bg-gradient-to-b from-[#feac0e] via-[#da3654] to-[#da3654] text-transparent">Static site generator</mark>
            </h6>
            <div className="flex items-center space-x-3 justify-center">
              <a href="https://nextjs.org">
                <img src="https://bejamas.io/static/732a1f9069b2d2aacfc89ae16db9b94e/nextjs.svg" className="h-8" />
              </a>
              <a href="https://gatsby.com">
                <img src="https://bejamas.io/static/53e9779269748af12ef002f2a8984092/gatsby.svg" className="h-8" />
              </a>
            </div>
          </div>
          <div>
            <h6 className="leading-none font-extrabold tracking-tight mt-10 sm:mt-14 mb-3 text-gray-900 dark:text-white">
              <mark className="bg-clip-text decoration-clone bg-gradient-to-b from-[#feac0e] via-[#da3654] to-[#da3654] text-transparent">Deployment Platform</mark>
            </h6>
            <div className="flex items-center space-x-3 justify-center">
              <a href="https://netlify.com">
                <img src="https://bejamas.io/static/129ec9db4654acfcc3d2c9879de097ac/netlify.svg" className="h-8" />
              </a>
              <a href="https://vercel.com">
                <img src="https://bejamas.io/static/d674713425aabfe158fb5890ae8c3665/vercel.svg" className="h-8" />
              </a>
            </div>
          </div>
        </div>
      ),
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

const CorporateWebsitePages = () => {
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
      <div id="wrapper" className="bg-no-repeat bg-bottom" style={{ backgroundImage: 'url(/svg/cliq-home-wave.svg)'}}>
        <Header navBarTitle={`Corporate Website &bull; ${BLOG.title}`} />
        <CorporateTitle />
      </div>
      <div className="dark:text-white py-3 md:py-12 max-w-7xl xl:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-0" ref={processRef}>
        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase text-center">Pricing</h2>
        <p className="mt-4 max-w-2xl text-4xl text-gray-500 dark:text-gray-200 lg:mx-auto text-center">
          Perfect for SMBs and enterprise
        </p>
        <section className="flex flex-col lg:flex-row items-start lg:justify-center w-full lg:px-10 md:py-12 relative space-y-3 md:space-y-0 space-x-0 md:space-x-3">
          <article className="w-full md:w-1/5 py-10 sticky top-0">
            <h5 className="text-3xl font-bold text-base">Pick Your Plan</h5>
            <p>Simply choose the plan that&apos;s right for you</p>
            <p className="my-6 text-sm">We believe the best products are created when we use agile best practices and work closely with our clients throughout the process to prioritize goals, incorporate feedback, and manage trade-offs.</p>
          </article>
          {plans.map((plan) => (
            <article key={plan.name} className="w-full md:w-2/5 py-10 border border-pink-300 rounded-xl shadow-md">
              <div className="max-h-[283px] sticky top-0 backdrop-filter backdrop-blur text-center">
                <h5 className="font-bold text-base">{plan.name}</h5>
                <h2 className="pb-4 flex justify-center font-bold">
                  <span className="text-xl mt-6 mr-1">{plan.price_prefix}</span>
                  <span className="text-6xl proportional-nums "> {plan.price}</span>
                  <span className="self-end">{plan.price_postfix}</span>
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
      <div className="py-12 bg-gray-50 dark:bg-[#1e1528]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Workflow
            </h2>
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

export default CorporateWebsitePages
