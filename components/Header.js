import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BLOG from '@/blog.config';
import { useLocale } from '@/lib/locale';

const NavBar = () => {
  const locale = useLocale();
  const links = [
    { id: 0, name: locale.NAV.INDEX, to: BLOG.path || '/', show: true },
    { id: 1, name: locale.NAV.MISSION, to: '/about', show: BLOG.showAbout },
    { id: 2, name: locale.NAV.OURVALUES, to: '/feed', show: true },
    { id: 3, name: locale.NAV.CONTACT, to: '/search', show: true }
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map(
          link =>
            link.show && (
              <li
                key={link.id}
                className="block ml-4 text-black dark:text-gray-50 nav"
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

const Header = ({ navBarTitle, fullWidth }) => {
  const navRef = useRef(null)
  const sentinalRef = useRef([])
  const handler = ([entry]) => {
    if (navRef && navRef.current) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current.classList.remove('sticky-nav-full')
      } else {
        navRef.current.classList.add('sticky-nav-full');
        navRef.current.classList.add('backdrop-filter');
        navRef.current.classList.add('backdrop-blur');
      }
    }
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver(handler)
    observer.observe(sentinalRef.current)
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
  }, [sentinalRef]);

  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className={`sticky -top-px z-10 transition-all ease-in duration-500 border-b border-transparent m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link href="/">
            <a>
              <div className="h-6">
                <Image src="https://cdn.statically.io/gh/semesta-biz/semesta-biz/main/logo.png" width={24} height={24} />
              </div>
            </a>
          </Link>
          {navBarTitle ? (
            <p className="ml-2 font-medium dark:text-night header-name">
              {navBarTitle}
            </p>
          ) : (
            <p className="ml-2 font-medium dark:text-night header-name">
              {BLOG.title},{' '}
              <span className="font-normal">{BLOG.description}</span>
            </p>
          )}
        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header
