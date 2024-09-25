import Head from 'next/head'
import Image from 'next/image'
import Icons from './components/Icons'

export default function Home() {
    const sectionCssBlock = `py-10 md:py-16 px-5 bg-gray-200 dark:bg-slate-800 font-[lato] h-full block`

    return (

            <div className="home-page">
            {/* Home Section */}
            <section className="home flex items-center justify-center min-h-screen bg-cover bg-center relative bg-[url('../images/hero-pic copy.jpg')]">
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="content max-w-3xl relative z-20 p-8 text-white">
                <h2 className="text-6xl uppercase text-shadow-md mb-4">
                    Empowering adolescents to become responsible adults
                </h2>
                <p className="text-lg bg-gray-100 text-black bg-opacity-80 p-4 rounded-lg border border-black shadow-md">
                    With the help of its extensive network of NGOs, affiliates from business, colleges, and governmental and intergovernmental organizations, Naa-Adole Foundation has emerged as a visionary in the fight against pressing global concerns. To that effect, we welcome partnerships from all concerned.
                </p>
                <a href="whatwedo.html" className="btn bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-full inline-block mt-6">Reach us Here</a>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="what-we-do py-16 bg-teal-600 text-white">
                <h1 className="heading text-center text-4xl font-bold mb-10 uppercase">
                Who<span className="text-teal-400"> we </span> are
                </h1>
                <div className="row flex flex-wrap items-center justify-around">
                <div className="image max-w-md w-full mb-8 md:mb-0">
                    <img src="../images/whose-we-are.jpg" alt="naa-adole" className="w-full rounded-lg shadow-lg" />
                </div>
                <div className="content max-w-md w-full p-6">
                    <h3 className="text-3xl font-bold mb-4">
                        Why Education, Health, and Adolescent Empowerment?
                    </h3>
                    <p className="mb-4">
                    At Naa-Adole Foundation™, we believe that education, health, and adolescent empowerment are vital to building a prosperous society. Education empowers young people with the skills to break the cycle of poverty, while focusing on adolescent health ensures they grow into informed, healthy adults capable of making positive life choices.
                    </p>
                    <p className="mb-4">
                    Our programs target these key areas to uplift communities and align with the Government of Ghana's priorities and the Sustainable Development Goals (SDGs).
                    </p>
                    <a href="whatwedo.html" className="btn bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded">Learn More</a>
                </div>
                </div>
            </section>

            {/* Card Container Section */}
            <section className="cardcontainer py-16">
                <div className="what-we-offer flex flex-wrap justify-between">
                {/* Donation Box */}
                <div className="donationBox bg-gray-800 text-white p-8 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                    <div className="title text-2xl font-semibold mb-4">Give Donation</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque ut quia minus. Provident.</p>
                    <button className="btn bg-teal-500 hover:bg-teal-600 mt-6 py-2 px-4 rounded-full text-white">Donate Now</button>
                </div>

                {/* Volunteer Box */}
                <div className="volunteerBox bg-gray-800 text-white p-8 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                    <div className="title text-2xl font-semibold mb-4">Become A Volunteer</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque ut quia minus. Provident.</p>
                    <button className="btn bg-teal-500 hover:bg-teal-600 mt-6 py-2 px-4 rounded-full text-white">Become Now</button>
                </div>

                {/* Sponsorship Box */}
                <div className="SponsershipBox bg-gray-800 text-white p-8 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                    <div className="title text-2xl font-semibold mb-4">Become A Sponsor</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque ut quia minus. Provident.</p>
                    <button className="btn bg-teal-500 hover:bg-teal-600 mt-6 py-2 px-4 rounded-full text-white">Sponsor Now</button>
                </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="programs bg-gray-900 py-16">
                <div className="container mx-auto text-center text-white">
                <h1 className="heading text-4xl font-bold mb-12 uppercase">
                    <span className="text-teal-400">Programs</span>
                </h1>
                <div className="boxContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6">
                    {/* Program 1 */}
                    <div className="box bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                    <div className="cardImage bg-cover bg-center h-64 w-full mb-4 rounded-lg" style={{ backgroundImage: "url('../images/update-naa.jpg')" }}></div>
                    <div className="programTitle text-2xl font-semibold mb-4">Reproductive Health Campaign</div>
                    <button className="btn bg-teal-500 hover:bg-teal-600 py-2 px-4 rounded-full text-white">Become Volunteer</button>
                    </div>

                    {/* Program 2 */}
                    <div className="box bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                    <div className="cardImage bg-cover bg-center h-64 w-full mb-4 rounded-lg" style={{ backgroundImage: "url('../images/wheel.jpg')" }}></div>
                    <div className="programTitle text-2xl font-semibold mb-4">WHEEL-ME PROJECT</div>
                    <div className="donationCount text-xl font-light mb-4">Donation Goal: <span>Ghc 500</span></div>
                    <button className="btn bg-teal-500 hover:bg-teal-600 py-2 px-4 rounded-full text-white">Donate Now</button>
                    </div>

                    {/* Program 3 */}
                    <div className="box bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                    <div className="cardImage bg-cover bg-center h-64 w-full mb-4 rounded-lg" style={{ backgroundImage: "url('../images/wash-club.jpg')" }}></div>
                    <div className="programTitle text-2xl font-semibold mb-4">Wash Club and Executives</div>
                    <button className="btn bg-teal-500 hover:bg-teal-600 py-2 px-4 rounded-full text-white">Sponsor Here</button>
                    </div>

                    {/* Program 4 */}
                    <div className="box bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                    <div className="cardImage bg-cover bg-center h-64 w-full mb-4 rounded-lg" style={{ backgroundImage: "url('../images/cycle-of-confidence.jpg')" }}></div>
                    <div className="programTitle text-2xl font-semibold mb-4">Cycle Of Confidence</div>
                    <button className="btn bg-teal-500 hover:bg-teal-600 py-2 px-4 rounded-full text-white">Read More</button>
                    </div>
                </div>
                </div>
            </section>
            </div>
    )
}
