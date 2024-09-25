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

                Questions about your donations or any other general inquiries can be sent to 
                <span className=" text-pink-500 mr-2 ">{' '}info@naa-adole.org</span>
                {`and we'll respond as quickly as we can.`}
            </p>
        </div>
    </section> 

    <section className="flex justify-center items-center my-10">
      <div className="form-container max-w-xl w-full p-10 bg-white shadow-lg rounded-xl relative">
        {/* Background Circles */}
        <span className="circle one absolute bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-48 h-48 rounded-full -top-28 -right-28 z-0"></span>
        <span className="circle two absolute bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-48 h-48 rounded-full -bottom-28 -left-28 z-0"></span>

        {/* Contact Form */}
        <div className="contact-form relative z-10">
          <h3 className="title text-4xl font-bold text-center text-gray-700 mb-6">
            Contact Us | Naa-Adole Foundation
          </h3>

          <form action="submit_form.php" method="POST">
            {/* Name */}
            <div className="input-container mb-6">
              <label htmlFor="name" className="block text-xl font-semibold text-gray-600 mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 transition ease-in-out"
                required
              />
            </div>

            {/* Email */}
            <div className="input-container mb-6">
              <label htmlFor="email" className="block text-xl font-semibold text-gray-600 mb-2">
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 transition ease-in-out"
                required
              />
            </div>

            {/* Phone (optional) */}
            <div className="input-container mb-6">
              <label htmlFor="phone" className="block text-xl font-semibold text-gray-600 mb-2">
                Phone Number (optional):
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 transition ease-in-out"
              />
            </div>

            {/* Subject */}
            <div className="input-container mb-6">
              <label htmlFor="subject" className="block text-xl font-semibold text-gray-600 mb-2">
                Subject:
              </label>
              <select
                id="subject"
                name="subject"
                className="input w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-300 transition ease-in-out"
                required
              >
                <option value="general">General Inquiry</option>
                <option value="volunteer">Volunteering</option>
                <option value="donation">Donations</option>
                <option value="partnership">Partnerships</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="input-container mb-6">
              <label htmlFor="message" className="block text-xl font-semibold text-gray-600 mb-2">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="input w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-300 transition ease-in-out"
                required
                rows="5"
              ></textarea>
            </div>

            {/* Reference */}
            <div className="input-container mb-6">
              <label htmlFor="reference" className="block text-xl font-semibold text-gray-600 mb-2">
                How did you hear about us?
              </label>
              <input
                type="text"
                id="reference"
                name="reference"
                className="input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 transition ease-in-out"
              />
            </div>

            {/* Submit Button */}
            <input
              type="submit"
              value="Submit"
              className="w-full py-4 bg-indigo-600 text-white font-bold text-xl rounded-full hover:bg-pink-500 transition-transform transform hover:-translate-y-1 shadow-md hover:shadow-lg"
            />
          </form>
        </div>
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
                <a className="block p-6 bg-slate-900 sm:p-8 rounded-xl">
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
                className="my-2 md:mx-2 p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl md:w-72  ">
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
