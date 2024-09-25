/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import  Photobg  from './components/photobg'
// import sdg from '/assets/images/sdg.png'

const about = () => {
  return (
   <>

<section className="bg-white dark:bg-gray-900">
<div className='container mx-auto' >
<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-pink-100">
      Passion, humanity...<br /> And a Noble Vision. </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">
      Together with our partners, we contribute to health, education, economic, and social development and poverty reduction, which are in line with the policy priorities of the Government of Ghana and the recently launched Sustainable Development Goals (SDGs): Improves health (SDG 3), WASH (SDG 6) and, end hunger/ more jobs (SDGs 2 and 8).</p>
      <div className="">
      <Link href="/volunteer">
        <a className=" inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
        Volunteer
        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </a>
      </Link>
      <Link href="/contact">
        <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
        Talk to us
      </a>
      </Link>
      </div>

    </div>
    <div className="block lg:mt-0 lg:col-span-5 lg:flex relative">
    <Image
      alt="Naa-Adole foundation on Sustainable Develoment Goals"
      src='/images/sdg.svg'
      layout="fill"
      objectfit='cover'
    />
    </div>                
  </div>
</div>
</section>
<section className=" ">
<div className="bg-gray-300 dark:bg-gray-800 w-full mx-auto p-8 py-32  ">
  {/* <img src="/icons/rocket.svg" className="h-10 w-10 mb-8 m-auto" /> */}
  <p className="text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-center text-lg md:text-3xl">
    <span className="font-extrabold text-pink-500 text-4xl">
      “
    </span>
    To use functional means of empowering young people with vocational and technical skills for career development.    
    <span className="font-extrabold text-pink-500 text-4xl">
      ”
    </span>
  </p>
  <div className="flex items-center justify-center mt-8">
    <a href="#" className="block relative">
      {/* <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " /> */}
    </a>
    <div className="flex ml-2 items-center justify-center">
      <span className="font-semibold text-pink-500 mr-2 text-lg">
        Our Mission
      </span>
      <span className="text-gray-400 text-xl font-light">
      &#124;
      </span>
      <span className="text-gray-400 text-md ml-2">
        Naa-Adole Foundation&trade;
      </span>
    </div>
  </div>
</div>

<div id="mission" className="mission mb-12 p-5 bg-white rounded-lg shadow-md">
    <h2 className="text-3xl mb-3 text-gray-800 relative">Our Mission</h2>
    <div className="h-1 bg-blue-500 w-16 absolute left-0 bottom-0"></div>
    <p className="text-lg text-black leading-relaxed mt-4">
        Our mission is simple yet profound: <strong>to improve health and promote sustainable economic development through capacity building and education</strong>.
        We aim to equip young people, especially adolescents, with the knowledge, skills, and resources they need to thrive. Whether through vocational
        training, awareness campaigns, or health interventions, we focus on making a lasting difference in the lives of individuals, families, and
        communities across Ghana.
    </p>
</div>

  </section>
<section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-slate-900 dark:text-white">
<div className="container mx-auto">
  <div className="container">
    <div className="-mx-4 flex flex-wrap items-center justify-between">
      <div className="w-full px-4 lg:w-6/12">
        <div className="-mx-3 flex items-center sm:-mx-4">
          <div className="w-full px-3 sm:px-4 xl:w-1/2">
            <div className="py-3 sm:py-4">
              <img src="/assets/images/about/deprived-community.jpg" alt="" className="w-full rounded-2xl" />
            </div>
            <div className="py-3 sm:py-4">
              <img src="/assets/images/about/school-outreach.jpg" alt="" className="w-full rounded-2xl" />
            </div>
          </div>
          <div className="w-full px-3 sm:px-4 xl:w-1/2">
            <div className="relative z-10 my-4">
              <img src="/assets/images/about/one-on-one.jpg" alt="" className="w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
        <div className="mt-10 lg:mt-0">
          <span className="mb-2 block text-lg font-semibold text-pink-600 ">
          Inspired by Passion for humanity.
          </span>
          <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl ">
          Passion and Service,<br /> Now and beyond. 
          </h2>
          <p className="mb-8 text-base text-body-color">
          Our aim is to improve health and increase sustainable economic development through capacity building. Our wide range of activities are geared towards Adolescent Reproductive Health Support, Menstrual Hygiene Campaign, Adolescent Counselling, Vocational skills training, Teenage Pregnancy Awareness campaign, Family Planning Awareness Campaign, Back to School Campaign,  Adolescent Empowerment Programmes, and Advocacies.

          </p>
          <p className="mb-12 text-base text-body-color">
          We focus our activities on two main sectors: Health and Education. Our cross-cutting programmes include gender, youth, and creating an enabling environment.

          </p>
          {/* <a className="inline-flex items-center justify-center rounded-lg bg-primary py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
            Get Started
          </a> */}
        </div>
      </div>
    </div>
  </div>
</div>

 {/* What We Do Section */}
 <div id="what-we-are-to" className="what-we-are-to mb-12 p-5 bg-white rounded-lg shadow-md">
    <h2 className="text-3xl mb-3 text-gray-800 relative">What We Do</h2>
    <div className="h-1 bg-blue-500 w-16 absolute left-0 bottom-0"></div>
    <p className="text-lg text-black leading-relaxed mt-4">
        The Naa-Adole Foundation is dedicated to addressing key development challenges in two vital areas: <strong>Health</strong> and <strong>Education</strong>.
        Our programs align with the <strong>Sustainable Development Goals (SDGs)</strong> and the policy priorities of the Government of Ghana, aiming for
        long-term, sustainable solutions.
    </p>
    <ul className="list-disc list-inside mt-4 text-lg text-gray-700">
        <li>Adolescent Reproductive Health Support</li>
        <li>Menstrual Hygiene Campaigns</li>
        <li>Adolescent Counseling</li>
        <li>Teenage Pregnancy and Family Planning Awareness</li>
        <li>Vocational Skills Training and Career Development</li>
        <li>Back to School Campaigns</li>
        <li>Adolescent Empowerment Programs</li>
        <li>Gender and Youth Advocacies</li>
    </ul>
    <p className="text-lg text-black leading-relaxed mt-4">
        Our work contributes directly to SDG 3 (Good Health and Well-being), SDG 6 (Clean Water and Sanitation), SDG 2 (Zero Hunger), and SDG 8 (Decent Work
        and Economic Growth).
    </p>
</div>

</section>

<section>
<div className="bg-gray-300 dark:bg-gray-800 w-full mx-auto p-8 py-32  ">
  {/* <img src="/icons/rocket.svg" className="h-10 w-10 mb-8 m-auto" /> */}
  <p className="text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-center text-lg md:text-3xl">
    <span className="font-extrabold text-pink-500 text-4xl">
      “
    </span>
    Empowering the younger generation to become responsible adults.    
    <span className="font-extrabold text-pink-500 text-4xl">
      ”
    </span>
  </p>
  <div className="flex items-center justify-center mt-8">
    <a href="#" className="block relative">
      {/* <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " /> */}
    </a>
    <div className="flex ml-2 items-center justify-center">
      <span className="font-semibold text-pink-500 mr-2 text-lg">
        Our Vision
      </span>
      <span className="text-gray-400 text-xl font-light">
      &#124;
      </span>
      <span className="text-gray-400 text-md ml-2">
        Naa-Adole Foundation&trade;
      </span>
    </div>
  </div>
</div>

  {/* Vision Section */}
  <div id="vision" className="vision mb-12 p-5 bg-white rounded-lg shadow-md">
    <h2 className="text-3xl mb-3 text-gray-800 relative">Our Vision</h2>
    <div className="h-1 bg-blue-500 w-16 absolute left-0 bottom-0"></div>
    <p className="text-lg text-black leading-relaxed mt-4">
        Our vision is to <strong>empower the younger generation to become responsible adults who can contribute meaningfully to society</strong>. By providing
        young people with the tools, skills, and support they need, we aim to create a future where health and education drive social and economic transformation.
    </p>
</div>

{/* Approach Section */}
<div id="approach" className="approach mb-12 p-5 bg-white rounded-lg shadow-md">
    <h2 className="text-3xl mb-3 text-gray-800 relative">Our Approach</h2>
    <div className="h-1 bg-blue-500 w-16 absolute left-0 bottom-0"></div>
    <p className="text-lg text-black leading-relaxed mt-4">
        At Naa-Adole Foundation™, we believe in using <strong>functional, innovative approaches</strong> to achieve our mission. From <strong>vocational training</strong> for career development to <strong>adolescent health programs</strong>, our work is rooted in the understanding that sustainable development begins with investing in the potential of people.
    </p>
    <p className="text-lg text-black leading-relaxed mt-4">
        We prioritize programs that create enabling environments for youth and women, tackling issues like gender inequality, unemployment, and lack of education. By fostering collaboration between communities, government, and other stakeholders, we ensure that our initiatives are impactful and sustainable.
    </p>
</div>

  </section>

  <section>

          {/* Why We Do It Section */}
          <div id="why-we-do-it" className="why-we-do-it mb-12 p-5 bg-white rounded-lg shadow-md">
                    <h2 className="text-3xl mb-3 text-gray-800 relative">Why We Do It</h2>
                    <div className="h-1 bg-blue-500 w-16 absolute left-0 bottom-0"></div>
                    <p className="text-lg text-black leading-relaxed mt-4">
                        Ghana, like many other developing nations, faces a number of challenges in health, education, and economic development. We are committed to being part of the solution by:
                    </p>
                    <ul className="list-disc list-inside mt-4 text-lg text-gray-700">
                        <li><strong>Reducing poverty</strong> through economic empowerment.</li>
                        <li><strong>Improving healthcare</strong> access and awareness.</li>
                        <li><strong>Supporting adolescent education</strong> and vocational skills training.</li>
                        <li><strong>Advocating for gender equality</strong> and youth development.</li>
                    </ul>
                    <p className="text-lg text-black leading-relaxed mt-4">
                        We understand that these efforts are key to creating a society where everyone has a chance to succeed, and we are proud to play our part.
                    </p>
                </div>

                {/* Call to Action Section */}
                <div id="join-us" className="join-us bg-blue-500 text-white p-10 rounded-lg shadow-md text-center mb-5 transition-transform duration-300 hover:scale-105">
                    <h2 className="text-2xl mb-5">Join Us</h2>
                    <p className="text-lg font-semibold text-blue-200 mb-8">
                        We cannot achieve our goals alone. We welcome volunteers, donors, and partners to join us in making a lasting impact. Whether you want to give your time, resources, or expertise, there is a place for you at Naa-Adole Foundation™.
                        Together, we can build a better future for generations to come.
                    </p>
                  </div>
                    <div className="flex justify-center">
                        <a href="#" className="inline-block bg-white text-blue-500 py-3 px-6 rounded-full text-xl transition-colors duration-300 hover:bg-gray-200">Volunteer</a>
                        <span className="mx-4 text-xl">|</span>
                        <a href="#" className="inline-block bg-white text-blue-500 py-3 px-6 rounded-full text-xl transition-colors duration-300 hover:bg-gray-200">Talk to Us</a>
                    </div>

  </section>



   </>
  )
}

export default about
