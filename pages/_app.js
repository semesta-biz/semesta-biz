import dynamic from 'next/dynamic';

import 'prismjs/themes/prism.css';
import 'react-notion-x/src/styles.css';
import 'katex/dist/katex.min.css';
import '@/styles/globals.css';
import '@/styles/notion.css';
import BLOG from '@/blog.config';
import GoogleTagManager from '@/components/GoogleTagManager';
import { LocaleProvider } from '@/lib/locale';

const Ackee = dynamic(() => import('@/components/Ackee'), { ssr: false })
const Gtag = dynamic(() => import('@/components/Gtag'), { ssr: false })

function MyApp({ Component, pageProps }) {
  return (
    <LocaleProvider>
      <GoogleTagManager>
        {BLOG.isProd && BLOG?.analytics?.provider === 'ackee' && (
          <Ackee
            ackeeServerUrl={BLOG.analytics.ackeeConfig.dataAckeeServer}
            ackeeDomainId={BLOG.analytics.ackeeConfig.domainId}
          />
        )}
        {BLOG.isProd && BLOG?.analytics?.provider === 'ga' && <Gtag />}
        <Component {...pageProps} />
      </GoogleTagManager>
    </LocaleProvider>
  )
}

export default MyApp
