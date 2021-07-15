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
      (<><span className="inline-block md:hidden">Page Design</span> <span>5 web page designs</span></>),
      (<><span>3</span> <span className="inline-block md:hidden">revisions</span></>),
      (<><span className="inline-block md:hidden">Mobile Compatible</span> <span>✅</span></>),
      (<><span className="inline-block md:hidden">Search Engine Submission</span> <span>✅</span></>),
      (<><span className="mr-3">Free 1 year</span><span className="inline-block md:hidden">Domain & Hosting</span></>),
      (<><span className="mr-3">Free SSL</span><span className="inline-block md:hidden">Certification & Security</span></>),
      'NDA Agreement ✅',
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
