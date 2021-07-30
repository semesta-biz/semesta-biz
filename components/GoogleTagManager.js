import { useEffect } from 'react';
import { useRouter } from 'next/router';

import * as gtm from '@/lib/gtag';

const GoogleTagManager = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', gtm.gtagpageview);
    return () => {
      router.events.off('routeChangeComplete', gtm.gtagpageview);
    }
  }, [router.events]);

  return children;
}

export default GoogleTagManager