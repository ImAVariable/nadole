import React, { useState, useEffect } from 'react'
import { Header } from './header';
import Link from 'next/link';
import Logo from './logo';
import { useRouter } from 'next/router';
import { counter } from '@fortawesome/fontawesome-svg-core';
import useDarkMode from './darkMode';

const navElements = [
  { name: 'Home', href: '/' },
  { name: 'What We Do', href: '/what-we-do' },
  { name: 'News & Events', href: '/news' },
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'Contact', href: '/contact' },
]


export default function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();
  const [menu, setMenu] = useState(false);

  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setMenu(false);
    });
    return () => {
      router.events.off("routeChangeComplete", () => {
        // console.log("stopped");
      });
    };
  }, [router.events]);
  

  return (
    <>

      <nav className="bg-white border-gray-200 px-2 lg:px-6 py-2.5 dark:bg-slate-900 shadow-lg md:w-full ">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/"><a className="flex items-center">
            <Logo />
            <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">Naa-Adole Foundation&trade;</span>
          </a>
          </Link>
          {/* Menu items */}

          <div className="hidden justify-between items-center w-full md:flex lg:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-5 lg:mt-0 ">
              {navElements.map(({ name, href }) => (
                <li key={name} className="flex items-center">
                  <Link href={href}>
                    {router.asPath === href ?
                      <a className="text-teal-600  dark:text-teal-600 hover:dark:text-teal-500 cursor-pointer py-2 text-sm ">
                        {name}
                      </a> :
                      <a className="cursor-pointer hover:text-teal-500 hover:dark:text-teal-400  dark:text-white  py-2 text-sm">
                        {name} </a>
                    }
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center lg:order-2">
            <div className={`hidden md:flex`}>
              <Link href="/donate">
                <a className="text-gray-800 dark:text-white hover:bg-gray-50 hover:ring-4 hover:ring-gray-300 font-medium rounded-lg text-sm  lg:px-2 py-2 lg:py-2.5 mr-2 bg-gray-200 dark:bg-gray-800    dark:hover:bg-gray-700 hover:outline-none dark:hover:ring-gray-800 px-16"><span className="px-5">Donate</span></a>
              </Link>
            </div>
            <span className="mr-3 ml-2 dark:text-slate-300 opacity-30hidden md:flex">&#124;</span>

            {colorTheme === "light" ? (
              <svg
                onClick={() => setTheme("light")}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="orange"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setTheme("dark")}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}

            <button onClick={() => setMenu(!menu)} onLoad={() => setMenu(menu)} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 hover:outline-none hover:ring-2 hover:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">

              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
          </div>




        </div>
      </nav>
      {/* Mobile Menu */}

      { menu && <div
        className={`
      flex 
      md:hidden
      justify-between
      items-start
      px-6
      font-[lato]
      font-bold
      italic
      uppercase
      py-5
      pb-10
      dark:bg-sky-900
     
      `}>
        <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-5 lg:mt-0 ">
          {navElements.map(({ name, href }) => (
            <li key={name} className="flex items-center">
              <Link href={href}>
                {router.asPath === href ?
                  <a  className="text-teal-600  dark:text-teal-600 hover:dark:text-teal-500 cursor-pointer py-2 text-xl ">
                    {name}
                  </a> :
                  <a  className="cursor-pointer hover:text-teal-500 hover:dark:text-teal-400  dark:text-white  py-2 text-xl">
                    {name} </a>
                }
              </Link>
            </li>
          ))}
        </ul>
      </div>}




    </>
  )
}

