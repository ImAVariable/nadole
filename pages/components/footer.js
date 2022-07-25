import React from 'react'
import Link from 'next/link'
import Logo from './logo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutubeSquare, faPinterest } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <>
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 py-10 ">
<div className='md:py-16 md:my-10  md:flex flex-col items-center justify-center'>
<div className="mx-auto max-w-screen-xl md:text-center ">
    <a   className="flex md:justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white pt-4">
<Logo />
      Flowbite    
    </a>
   


    <ul className="flex flex-wrap md:justify-center items-center mb-6 text-gray-900 dark:text-white my-5 md:my-8">
      <li>
        <Link href="/about"><a   className="mr-4 hover:underline md:mr-6 ">About</a></Link>
      </li>
      <li>
        <Link href="/volunteer"><a   className="mr-4 hover:underline md:mr-6">Volunteer</a></Link>
      </li>
      <li>
        <Link href="/sitemap.xml"><a   className="mr-4 hover:underline md:mr-6 ">Sitemap</a></Link>
      </li>
      <li>
        <Link href="/privacy"><a   className="mr-4 hover:underline md:mr-6">Privacy</a></Link>
      </li>
      <li>
        <Link href="/donate"><a   className="mr-4 hover:underline md:mr-6">Donate</a></Link>
      </li>
      <li>
        <Link href="/faqs"><a   className="mr-4 hover:underline md:mr-6">FAQs</a></Link>
      </li>
      <li>
        <Link href="/contact"><a   className="mr-4 hover:underline md:mr-6">Contact</a></Link>
      </li>
      
    </ul>
    <ul className="flex flex-wrap md:justify-center items-center mb-6 text-gray-900 dark:text-white my-5 md:my-8">
      <li>
      <Link href="https://www.facebook.com/naaadolefoundation/"><a className="text-gray-400"><FontAwesomeIcon icon={faFacebookF} className="text-gray-300 text-lg ml-2"></FontAwesomeIcon></a></Link>

      </li>
      <li>
      <Link href="https://twitter.com/adolefoundation"><a className="ml-3 text-gray-400"><FontAwesomeIcon icon={faTwitter} className="text-gray-300 text-lg ml-2"></FontAwesomeIcon></a></Link>
      </li>
      <li>
      <Link href="https://gh.linkedin.com/in/theodora-abaka-acquaah-923b15196"><a className="ml-3 text-gray-400"><FontAwesomeIcon icon={faLinkedin} className="text-gray-300 text-lg ml-2 "></FontAwesomeIcon></a></Link>

      </li>
      
    </ul>
    <span className="text-md text-gray-500 md:text-center dark:text-gray-400"><span>&copy; </span><span>{new Date().getFullYear()}. </span> All Rights Reserved. <span className='md:px-2 '>&#124;</span> <a   className="hover:underline"><span>Naa-Adole Foundation</span><span>&trade;</span></a>. </span>
  </div>
  <p className="my-2 pt-4 text-gray-500 dark:text-gray-400 text-xs md:max-w-md mx-auto md:text-center ">Naa-Adole Foundation is a registered charity, Non-Profit Organization with Reg. number: <span className='font-bold'>CG150792019</span> under the laws of the Republic of Ghana. </p>

</div>
</footer>

</>
  )
}

export default Footer