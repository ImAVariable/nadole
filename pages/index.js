import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (

        <section className="w-full bg-gray-300 dark:bg-slate-800">
            <div className="w-auto mx-auto md:px-5  py-32">

                <div className='flex flex-wrap md:justify-between items-center h-full w-auto'>

                    <div>
                        <div className='  px-4 sm:px-6 md:px-5 mb-6 text-left max-w-3xl '>

                            <h2 className="mt-8 font-semibold text-pink-500 dark:text-pink-400">Who we are
</h2>
                            <p
                                className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">Why Education, Health <br /> and Adolescent Empowerment ? </p>
                            <p className="mt-4  space-y-6 dark:text-white text-left   ">With the help of its
                                extensive network of NGOs, affiliates from business, colleges, and governmental
                                and intergovernmental organizations, Naa-Adole Foundation has emerged as a
                                visionary in the fight against pressing global concerns. To That effect, we
                                welcome partnerships from all concerned.</p>
                        </div>

                        <div className="mx-auto flex justify-start items-center ">
                            <ul
                                className="flex-none inline-grid gap-x-2 px-4 sm:px-0 xl:gap-x-6"
                                style={{
                                gridTemplateColumns: 'repeat(4, minmax(6rem, 1fr))'
                            }}>
                                <li>
                                    <button
                                        type="button"
                                        className="group text-sm font-semibold w-full flex flex-col items-center  dark:text-white  ">
                                        <svg
                                            width={48}
                                            height={48}
                                            fill="none"
                                            aria-hidden="true"
                                            className="mb-6 text-slate-300 group-hover:text-slate-400 dark:text-slate-200 dark:group-hover:text-slate-500"><rect
                                            x={5}
                                            y={5}
                                            width={28}
                                            height={28}
                                            rx={4}
                                            fill="currentColor"
                                            fillOpacity={0}
                                            stroke="currentColor"
                                            strokeWidth={2}/>
                                            <path
                                            d="M5 41h28M33 39v4M5 39v4M39 5h4M39 33h4M41 33V5"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        </svg>Sizing
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="group text-sm font-semibold w-full flex flex-col items-center  dark:text-white ">
                                        <svg
                                            width={48}
                                            height={48}
                                            fill="none"
                                            aria-hidden="true"
                                            className="mb-6 text-slate-300 group-hover:text-slate-400 dark:text-slate-200 dark:group-hover:text-slate-500"><path
                                            d="M17.687 42.22 40.57 29.219a4 4 0 0 0 1.554-5.36L39 18"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"/><path
                                            d="M27.477 7.121a1 1 0 1 0-.954 1.758l.954-1.758Zm5.209 3.966.477-.879-.477.88Zm1.555 5.515-.866-.5-.003.006.87.494ZM26.523 8.88l5.686 3.087.954-1.758-5.686-3.087-.954 1.758Zm6.849 7.23-12.616 22.21 1.738.987 12.617-22.21-1.74-.988Zm-1.163-4.143a3 3 0 0 1 1.166 4.136l1.732 1a5 5 0 0 0-1.944-6.894l-.954 1.758Z"
                                            fill="currentColor"/><path
                                            d="M5 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v25a9 9 0 1 1-18 0V9Z"
                                            fill="currentColor"
                                            fillOpacity={0}
                                            stroke="currentColor"
                                            strokeWidth={2}/><circle
                                            cx={14}
                                            cy={34}
                                            r={3}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"/></svg>Colors</button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="group text-sm font-semibold w-full flex flex-col items-center   dark:text-white ">
                                        <svg
                                            width={48}
                                            height={48}
                                            fill="none"
                                            aria-hidden="true"
                                            className="mb-6 text-slate-300 group-hover:text-slate-400 dark:text-slate-200 dark:group-hover:text-slate-500"><path
                                            d="M5 13a8 8 0 0 1 8-8h22a8 8 0 0 1 8 8v22a8 8 0 0 1-8 8H13a8 8 0 0 1-8-8V13Z"
                                            fill="currentColor"
                                            fillOpacity={0}
                                            stroke="currentColor"
                                            strokeWidth={2}/><path
                                            d="M15.5 25h9M13 31l5.145-12.748c.674-1.67 3.036-1.67 3.71 0L27 31"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"/><path
                                            d="M31 13s2 0 2 1.833v18.334C33 35 31 35 31 35M35 13s-2 0-2 1.833v18.334C33 35 35 35 35 35M31 24h4"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"/></svg>Typography</button>
                                </li>
                                <li>

                                    <button
                                        type="button"
                                        className="group text-sm font-semibold w-full flex flex-col items-center text-pink-600   dark:text-white ">
                                        <svg
                                            width={48}
                                            height={48}
                                            fill="none"
                                            aria-hidden="true"
                                            className="mb-6 text-pink-500 dark:text-pink-400"><path
                                            d="M24 43c10.493 0 19-8.507 19-19S34.493 5 24 5m-4 .422C11.427 7.259 5 14.879 5 24c0 9.121 6.427 16.741 15 18.578"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"/><path
                                            d="M24 42.819V5.181c0-.1.081-.181.181-.181C34.574 5 43 13.607 43 24c0 10.394-8.426 19-18.819 19a.181.181 0 0 1-.181-.181Z"
                                            fill="currentColor"
                                            fillOpacity=".1"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinejoin="round"/><path
                                            d="M28 10h3M28 14h7M28 18h10M28 22h11M28 26h10M28 30h9M28 34h7M28 38h3"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"/></svg>Shadows
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='object-cover w-full md:max-w-lg h-80 relative rounded-xl '>
                        <Image src="/images/outreach1.png" 
                        alt="Naa-Adole Foundaltion Outreach" 
                        layout="fill" 
                        // height={300} 
                        // width={400} 
                        className="rounded-xl"
                        objectFit="cover" />

                    </div>

                </div>
            </div>

        </section>

    )
}
