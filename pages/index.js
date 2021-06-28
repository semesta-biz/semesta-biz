// import Image from 'next/image';
// import ChartSvg from '../public/img/chart.svg';
import Head from 'next/head';

import Footer from '@/components/Footer';
import Header from '@/components/Header-homepage';
import BLOG from '@/blog.config';

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
]

const blog = () => {
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
      <div className="bg-gradient-to-r from-blue-400 dark:from-white to-pink-500 via-transparent dark:via-blue-600 animate-gradient-xy bg-auto">
        <Header navBarTitle={BLOG.title}/>
        <header className={`relative max-w-screen-lg xl:max-w-screen-xl mx-auto ${
            BLOG.font === 'serif' ? 'font-serif' : 'font-sans'
          }`}>
            <div className="px-4 sm:px-6 md:px-8 my-10 xl:my-8">
              <div className="lg:flex">
                <div className="flex-none relative z-10 flex flex-col items-start lg:pt-10 max-w-screen-sm mx-auto lg:max-w-2xl lg:mx-0 lg:pr-20 mb-12 sm:mb-16 lg:mb-0">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10 dark:text-white">WE CONNECT PEOPLE TO DATA AND TECHNOLOGY</h1>
                  <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium text-gray-500 mb-10 sm:mb-11 dark:text-gray-200">We believe in technology to solve people&apos;s problems and generate measurable results for customers.</p>
                  <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 text-center">
                    <a className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200">Let&apos;s Talk</a>
                  </div>
                </div>
                <div className="relative max-w-screen-sm mx-auto lg:max-w-none lg:-ml-12 lg:mr-0 xl:-ml-6">
                  <img
                    src="https://assets.website-files.com/5e835117fba7fd79f7b4001a/5e9f708b779fa20d0efbd429_image_02_transformacao.png" 
                    width="570px" height="646px" />
                </div>
              </div>
            </div>
        </header>
        <div className="py-12 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Process</h2>
              <p className="mt-4 max-w-2xl text-4xl text-gray-500 dark:text-gray-200 lg:mx-auto">
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
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      
      <img src="/img/chart.svg" />
      <div className="bg-gray-50 dark:bg-gray-800 border-t border-b border-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <span className="block text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Ongoing WordPress Development and Growth</span>
            <p className="dark:text-gray-200">Delegate your complete digital and WordPress development activities to a reliable partner and focus on growing your business.</p>
          </div>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
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

export default blog
