import React from 'react'
import Link from 'next/link'
import Logo from './logo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutubeSquare, faPinterest } from "@fortawesome/free-brands-svg-icons"

const navFooter = [
  { name: 'What We Do', href: '/what-we-do' },
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'Sitemap', href: '/sitemap' },
  { name: 'Donate', href: '/donate' },
  { name: 'Faqs', href: '/faqs' },
  { name: 'Contact', href: '/Contact' }
]
const Footer = () => {
  return (
    <>
    <footer className="relative text-white p-4  md:p-8 lg:p-10  py-10 bg-gradient-to-r from-slate-900 to-slate-900 px-4 sm:px-6 lg:px-16">
<div className='md:py-16 md:my-10  md:flex flex-col items-center justify-center'>
<div className="mx-auto max-w-screen-xl md:text-center ">
    <a   className="flex md:justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white pt-4 ">
<Logo />
      Naa-Adole Foundation   
      </a>
   


    <ul className="flex flex-wrap md:justify-center items-center mb-6 text-gray-900 dark:text-white my-5 md:my-8 uppercase">
      { navFooter.map(({name, href}) => (
          <li className="mr-6" key={name}>
            <Link href={href}><a className="text-gray-900 dark:text-white">{name}</a></Link>
          </li>
        )) }
      
    </ul>
    <ul className="flex flex-wrap md:justify-center items-center mb-6 text-gray-900 dark:text-white my-5 md:my-8">
      <li>
      <Link href="https://www.facebook.com/naaadolefoundation/"><a className="text-slate-300"><FontAwesomeIcon icon={faFacebookF} className="text-lg ml-2"></FontAwesomeIcon></a></Link>

      </li>
      <li>
      <Link href="https://twitter.com/adolefoundation"><a className="ml-3 text-slate-300"><FontAwesomeIcon icon={faTwitter} className=" text-lg ml-2"></FontAwesomeIcon></a></Link>
      </li>
      <li>
      <Link href="https://gh.linkedin.com/in/theodora-abaka-acquaah-923b15196"><a className="ml-3 text-slate-300"><FontAwesomeIcon icon={faLinkedin} className="text-gray-300 text-lg ml-2 "></FontAwesomeIcon></a></Link>

      </li>
      <li>
      <svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
</svg>

      </li>
      
    </ul>
    <span className="text-md  md:text-center "><span>&copy; </span><span>{new Date().getFullYear()}. </span> All Rights Reserved. <span className='md:px-2 '>&#124;</span> <a   className="hover:underline"><span>Naa-Adole Foundation</span><span>&trade;</span></a> </span>
  </div>
  <p className="my-2 pt-4   text-xs md:max-w-md mx-auto md:text-center ">Naa-Adole Foundation is a registered charity, Non-Profit Organization with Reg. number: <span className='font-bold'>CG150792019</span> under the laws of the Republic of Ghana. </p>

</div>
</footer>

</>
  )
}

export default Footer