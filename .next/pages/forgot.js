import React from 'react'
import Link from 'next/link'

const Forgot = () => {
  return (
    <section className="bg-pink-50 dark:bg-pink-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-pink-500 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Codeswear  
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-pink-800 dark:border-pink-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-pink-900 md:text-2xl dark:text-white text-center">
                  forgot password
              </h1>
              <p className='mt-2 text-center text-sm text-gray-600'>
              Or
               <Link href={'/login'}> <a href="#" className='font-medium text-pink-500 hover:text-pink-500 mx-1'>Login </a></Link>
              </p>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label  htmlFor="email" className="block mb-2 text-sm font-medium text-pink-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-pink-50 border border-pink-300 text-pink-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-pink-500 dark:text-pink-400">
                     Go to check your Email? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Continue</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Forgot
