import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Icons from './components/Icons'
import Mandate from './components/mandate'

export default function Home() {

    const sectionCssBlock = `py-10 md:py-16 px-5 bg-gray-200 dark:bg-slate-800 font-[lato] h-full block`

    return (
        <>

            <section className={sectionCssBlock}>
                <div className='flex flex-col md:flex-row justify-between gap-4 '>

                    <div className='flex-1 '>
                        <h className="mt-8 font-semibold text-pink-500 dark:text-pink-400">Who we are</h>
                        <h2 className="text-3xl font-extrabold tracking-tight 
                        leading-none md:text-4xl  dark:text-pink-100">Why Education, Health
                            <br />
                            and Adolescent Empowerment ?
                        </h2>
                        <p className="my-4 dark:text-white">With the help of its
                            extensive network of NGOs, affiliates from business, colleges, and governmental
                            and intergovernmental organizations, Naa-Adole Foundation has emerged as a
                            visionary in the fight against pressing global concerns. To That effect, we
                            welcome partnerships from all concerned.
                        </p>
                        <div>
                            <Icons />
                        </div>
                    </div>

                    <div className='md:w-6/12 relative md:h-96 w-full aspect-video rounded-xl box-border'>
                        <Image
                            src={`/images/outreach1.png`}
                            layout={`fill`}
                            alt={`Naa-Adole Foundation`}
                            className='object-fit object-center rounded-xl'
                        />

                    </div>
                </div>

            </section>

            {/* <Mandate /> */}
        </>


    )
}
