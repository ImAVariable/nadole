/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import react from 'react'
import clip from "text-clipper";

export default function News() {
    return (
        <>
        <section className="dark:text-gray-400 dark:bg-gray-900 text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <h2 className="sm:text-3xl text-2xl text-gray-900 dark:text-white font-medium title-font mb-2 md:w-2/5">
        Presenting News, Views and Upcoming Events Relative to our operations.</h2>
    <div className="md:w-3/5 md:pl-6">
      <p className="leading-relaxed text-base">Naa-Adole foundation is an NGO striving to end extreme poverty, advance human rights and citizen involvement, protect a sustainable world, foster peace, and guarantee dignity for all people, Interaction serves as a convener, thought leader, and voice.</p>
      <div className="flex md:mt-4 mt-6">
      <div>
            <button className="inline-flex text-white bg-pink-500 border-0 py-1 px-4 focus:outline-none hover:bg-pink-600 rounded">Volunteer</button>
            <a className="text-pink-500 inline-flex items-center ml-4">Learn More About Us
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />

                    </svg>
                    </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font bg-pink-50 dark:text-gray-100 dark:bg-black hidden ">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -my-8">
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-pink-500 mb-1">CATEGORY</h2>
            <h1 className="title-font  dark:text-gray-400 text-xl font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p className="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <a className="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900 dark:text-gray-600 ">Alper Kamu</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-pink-500 mb-1">CATEGORY</h2>
            <h1 className="title-font  dark:text-gray-400 text-xl font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p className="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <a className="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/102x102" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900 dark:text-gray-600 ">Holden Caulfield</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-pink-500 mb-1">CATEGORY</h2>
            <h1 className="title-font  dark:text-gray-400 text-xl font-medium text-gray-900 mb-3">Neptune</h1>
            <p className="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <a className="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/101x101" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900 dark:text-gray-600 ">Henry Letham</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* component */}
<div className="py-16 bg-gradient-to-br from-pink-100 to-red-100 dark:bg-gradient-to-br dark:from-slate-900 dark:to-blue-900 dark:text-white">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    <div className="mb-12 space-y-2 text-center">
      <span className="block w-max mx-auto px-3 py-1.5  rounded-full bg-pink-600 text-pink-100   dark:text-white    font-medium ">Latest News</span>
      <h2 className="text-2xl text-cyan-900 dark:text-cyan-100 font-bold md:text-4xl py-2">We need to act now. Anything <br />less is not an option.</h2>
      <p className="lg:w-8/12 lg:mx-auto dark:text-white">It is important that we work towards a more sustainable world. We need to stop looking at the world as one big machine that will keep running unless we put in some effort to stop it. The planet is not a machine and if we continue with our wasteful habits, there will be dire consequences for future generations. </p>
    </div>
    <div className="grid gap-12 lg:grid-cols-2">
      <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white  dark:bg-opacity-10 bg-opacity-50 shadow-xl hover:rounded-2xl">
      <img src="/images/naa-adole-news1.jpg" alt="art cover" loading="lazy" width={1000} height={667} className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
        <div className="sm:w-7/12 pl-0 p-5">
          <div className="space-y-2">
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-cyan-900 dark:text-white">{clip('Ensure healthy lives and promote well-being for all at all ages.',{maxLines: 3})}</h4>
              <p className="text-gray-600 dark:text-white">{ clip(`In the year 2000, the United Nations General Assembly adopted a set of eight Millennium Development Goals (MDGs) to help transform the world by 2015. These goals were designed to be achieved by all countries in all regions of the world, including developing countries.`,140, { html: true, maxLines: 5, indicator: '...' } )}</p>
            </div>
            <Link href={`/`}><a className="block w-max text-cyan-600 dark:text-cyan-200">Read more</a></Link>
          </div>
        </div>
      </div>
      <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white dark:bg-opacity-10 bg-opacity-50 shadow-xl hover:rounded-2xl">
        <img src="/images/naa-adole-news-2.jpg" alt="art cover" loading="lazy" width={1000} height={667} className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
        <div className="sm:w-7/12 pl-0 p-5">
          <div className="space-y-2">
            <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-cyan-900 dark:text-white">{clip('We must bring a stop to our wasteful and unsustainable habits.', 66,{maxLines: 3})}</h4>
              <p className="text-gray-600 dark:text-white">{ clip(`It is important that we work towards a more sustainable world. We need to stop looking at the world as one big machine that will keep running unless we put in some effort to stop it. `,140, { html: true, maxLines: 5, indicator: '...' } )}</p>
            </div>
            <Link href={`/`}><a className="block w-max text-cyan-600 dark:text-cyan-200">Read more</a></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}