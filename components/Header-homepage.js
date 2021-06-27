import { useEffect, useRef } from 'react';
import Link from 'next/link';
// import Image from 'next/image';

import BLOG from '@/blog.config';
import { useLocale } from '@/lib/locale';

const NavBar = () => {
  const locale = useLocale();
  const links = [
    { id: 0, name: locale.NAV.INDEX, to: BLOG.path || '/', show: true },
    { id: 1, name: locale.NAV.MISSION, to: '/mission', show: BLOG.showAbout },
    { id: 2, name: locale.NAV.OURVALUES, to: '/our-values', show: true },
    { id: 3, name: locale.NAV.CONTACT, to: '/contact', show: true }
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row space-x-4">
        {links.map(
          link =>
            link.show && (
              <li
                key={link.id}
                className="block text-black dark:text-gray-50 nav"
              >
                <Link href={link.to}>
                  <a>{link.name}</a>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  )
}

const Header = () => {
  const navRef = useRef(null);
  const sentinalRef = useRef([]);
  const handler = ([entry]) => {
    if (navRef && navRef.current) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current.classList.remove('xl:max-w-screen-2xl');
        navRef.current.classList.add('xl:max-w-screen-xl');
        // navRef.current.classList.remove('sticky-nav-full');
        navRef.current.classList.add('backdrop-filter');
        navRef.current.classList.add('backdrop-blur');
      } else {
        navRef.current.classList.add('xl:max-w-screen-2xl');
        navRef.current.classList.remove('xl:max-w-screen-xl');
        // navRef.current.classList.add('sticky-nav-full');
        navRef.current.classList.remove('backdrop-filter');
        navRef.current.classList.remove('backdrop-blur');
        navRef.current.classList.remove('py-8');
      }
    }
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver(handler);
    observer.observe(sentinalRef.current);
  }, [sentinalRef]);

  return (
    <>
      <div className="observer-element h-4" ref={sentinalRef}></div>
      <div ref={navRef} className="sticky -top-px z-30 transition-all ease-in duration-500 backdrop-filter backdrop-blur m-auto w-full flex flex-row justify-between items-center max-w-screen-lg px-4">
        <div className="flex items-center">
          <Link href="/">
            <a>
              <div>
                <img 
                  src="https://cdn.statically.io/gh/semesta-biz/semesta-biz/main/logo.png"
                  width="64px"
                  height="64px"
                  className="transform"
                />
              </div>
            </a>
          </Link>
          <p className="ml-2 font-medium text-xl dark:text-white">
            {BLOG.title}
          </p>
        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header
