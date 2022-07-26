import react from 'react'

export default function CustomError404() {
  return (
    <>
    <section className="bg-white dark:bg-gray-900 md:flex flex-col justify-center items-center">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-sm text-center">
      <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-gray-600 dark:text-pink-200">400</h1>
      <p className="mb-4 text-3xl tracking-tight font-bold text-pink-200 md:text-4xl dark:text-white">Internal Server Error.</p>
      <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">  <div className="mb-2 text-xl font-bold">
          404 - Sorry could not find this page 😅
        </div> </p>
    </div>   
  </div>
</section>

    </>
  )
}