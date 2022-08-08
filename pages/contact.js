import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBarChart, faPhone} from "@fortawesome/free-solid-svg-icons";

import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faLinkedin,
    faYoutubeSquare,
    faPinterest
} from "@fortawesome/free-brands-svg-icons"

export default function Contact() {
    return ( 
    <> 
    <section className="">
        <div
            className="bg-gray-300 dark:bg-slate-900 w-full mx-auto p-8  text-center py-32">

            <p
                className="text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-lg md:text-3xl">

                Questions about your donation or any other general inquiries can be sent to 
                <span className=" text-pink-500 mr-2 ">{' '}info@naa-adole.org</span>
                and we'll respond as quickly as we can.
            </p>
        </div>
    </section> 

    <section className = '' > 
    <div className='dark:bg-slate-700 block py-16 md:py-32'>
        <div className='container p-5 mx-auto flex flex-col md:flex-row md:justify-center md:items-center  h-full'>

            <div className="my-2 md:mx-2 p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl md:w-72 w-auto  ">
                <a className="block p-6 bg-slate-900 sm:p-8 rounded-xl">
                    <div className="mt-16 sm:pr-8">
                        <h5 className="text-xl font-bold text-white">Official Address</h5>
                        <p className="mt-2 text-sm text-gray-500">
                            P.O.BOX OD 506
                            <br/>
                            Odorkor - Accra. Ghana.
                        </p>
                    </div>
                </a>
            </div>
            <div
                className="my-2 md:mx-2 p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl md:w-72 w-auto  ">
                <a className="block p-6 bg-slate-900 sm:p-8 rounded-xl" href>
                    <div className="mt-16 sm:pr-8">
                        <h5 className="text-xl font-bold text-white">Phone Lines</h5>
                        <p className="mt-2 text-sm text-gray-500">
                            +233 245951492,
                            <br/>
                            +233 242807256
                        </p>
                    </div>
                </a>
            </div>
            <div
                className="my-2 w-full  md:mx-2 p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl md:w-72 w-auto  ">
                <a className="block p-6 bg-slate-900 sm:p-8 rounded-xl" >
                    <div className="mt-16 sm:pr-8">
                        <h5 className="text-xl font-bold text-white">Social Media</h5>
                        <p className="mt-2 text-sm text-gray-500 py">
                            Follow Our Activities:
                            <br/>
                        </p>
                        <p>
                            <Link href="https://www.facebook.com/naaadolefoundation/">
                                <a className="text-slate-300">
                                    <FontAwesomeIcon icon={faFacebookF} className="text-lg "></FontAwesomeIcon>
                                </a>
                            </Link>
                            <Link href="https://twitter.com/adolefoundation">
                                <a className="ml-3 text-slate-300">
                                    <FontAwesomeIcon icon={faTwitter} className=" text-lg ml-2"></FontAwesomeIcon>
                                </a>
                            </Link>
                            <Link href="https://gh.linkedin.com/in/theodora-abaka-acquaah-923b15196">
                                <a className="ml-3 text-slate-300">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-gray-300 text-lg ml-2 "></FontAwesomeIcon>
                                </a>
                            </Link>



                        </p>
                    </div>
                </a>
            </div>
                        <div className='my-2 object-cover w-full p-4 mx-2  md:w-64 h-60 relative rounded-xl'>
                              <Image  
                              src="/images/engage.png"
                              layout="fill"
                              objectFit="contain"
                              alt="connect with Naa-Adole Foundation"
                              />                              
                            </div>
        </div>
    </div> 
    </section>
</>
)
}
