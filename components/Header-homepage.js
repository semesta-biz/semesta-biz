import { useCallback, useEffect, useRef, useState, Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
// import Image from 'next/image';

import BLOG from '@/blog.config';
import { useLocale } from '@/lib/locale';

const NavBar = () => {
  const locale = useLocale();
  const links = [
    { id: 0, name: locale.NAV.INDEX, to: BLOG.path || '/about', show: true },
    { id: 1, name: locale.NAV.OURVALUES, to: '/our-values', show: true },
    { id: 2, name: 'Services', to: '/services', show: true },
  ];
  return (
    <div className={`hidden md:flex flex-shrink-0`}>
      <ul className="flex flex-row space-x-4 items-center">
        {links.map(
          link =>
            link.show && (
              <li
                key={link.id}
                className="block text-black dark:bg-black dark:px-4 dark:py-2 dark:rounded-md dark:bg-opacity-20 dark:text-gray-50 dark:border dark:border-transparent dark:shadow-sm"
              >
                <Link href={link.to}>
                  <a>{link.name}</a>
                </Link>
              </li>
            )
        )}
        <li>
          <a onClick={() => { window.Chatra('openChat', true) }} className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

const Header = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const sentinalRef = useRef([]);
  const handler = ([entry]) => {
    if (navRef && navRef.current) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current.classList.remove('xl:max-w-screen-2xl');
        navRef.current.classList.add('xl:max-w-screen-xl');
        // navRef.current.classList.remove('sticky-nav-full');
        navRef.current.classList.add('backdrop-filter');
        navRef.current.classList.add('backdrop-blur');
        navRef.current.classList.remove('mt-3');
        logoRef.current.classList.remove('scale-150');
        logoRef.current.classList.remove('mx-4');
      } else {
        navRef.current.classList.add('xl:max-w-screen-2xl');
        navRef.current.classList.remove('xl:max-w-screen-xl');
        // navRef.current.classList.add('sticky-nav-full');
        navRef.current.classList.remove('backdrop-filter');
        navRef.current.classList.remove('backdrop-blur');
        navRef.current.classList.add('mt-3');
        logoRef.current.classList.add('scale-150');
        logoRef.current.classList.add('mx-4');
      }
    }
  };
  const toggle = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    if (window) {
      const observer = new window.IntersectionObserver(handler);
      observer.observe(sentinalRef.current);
    }
  }, [sentinalRef]);

  return (
    <>
      <div className="observer-element h-4" ref={sentinalRef}></div>
      <div className="sticky inset-0 z-30 backdrop-filter backdrop-blur">
        <div ref={navRef} className="transition-all ease-in duration-500 m-auto w-full flex justify-between items-center max-w-screen-lg px-4">
          <Link href="/">
            <a className="flex items-center">
              <img 
                ref={logoRef}
                src="https://cdn.statically.io/gh/semesta-biz/semesta-biz/main/logo.png"
                width="64px"
                height="64px"
                className="transform transition-all w-16"
                alt="Semesta Biz"
              />
              <img src="https://cdn.statically.io/gh/semesta-biz/semesta-biz/main/public/img/semesta_biz.png" className="w-48 hidden md:block" alt="Semesta Biz" />
            </a>
          </Link>
          <div className="-mr-2 -my-2 md:hidden">
            <button onClick={toggle} className="bg-black p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
          </div>
          <NavBar open={open} />
        </div>
      </div>
      <Popover>
        <Transition
          show={open}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            focus
            className="fixed inset-0 top-2 px-2 md:hidden z-50"
          >
            <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Link href="/">
                    <a>
                      <img 
                        src="https://cdn.statically.io/gh/semesta-biz/semesta-biz/main/logo.png"
                        width="64px"
                        height="64px"
                        alt="Semesta Biz"
                      />
                    </a>
                  </Link>
                  <img src="https://cdn.statically.io/gh/semesta-biz/semesta-biz/main/public/img/semesta_biz.png" className="w-48" alt="Semesta Biz" />
                </div>
                  
                  <div className="-mr-2">
                    <button onClick={toggle} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Link href="/about">
                      <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">About us</a>
                    </Link>
                    <Link href="/our-values">
                      <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">Our Values</a>
                    </Link>
                    <Link href="/services">
                      <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">Services</a>
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6 flex justify-center bg-gray-100">
                <a href="#chatraChatExpanded" className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                  Free Consultation
                </a>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  )
}

export default Header
