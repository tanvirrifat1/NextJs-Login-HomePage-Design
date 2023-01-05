import type { NextPage } from 'next'
import Head from 'next/head'
import {FaFacebookF,FaLinkedinIn,FaGoogle,FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
          
          <div className='w-3/5 p-5'>
           <div className='text-left font-bold '>
            <span className='text-green-500 shadow-xl'>Vlaunchu</span>
           </div>
           <div className='py-10'>
            <h2 className='text-3xl font-bold text-green-500 mb-2'>Sign in to Account</h2>
            <div className='border-2 w-10 border-green-500 inline-block mb-2'></div>
            
            <div className='flex justify-center my-2'>
             <a href="#" className='border-2 border-gray-200 rounded-full mx-1 p-3'>
              <FaFacebookF className='text-sm'/>
             </a>
             <a href="#" className='border-2 border-gray-200 rounded-full mx-1 p-3'>
              <FaLinkedinIn className='text-sm'/>
             </a>
             <a href="#" className='border-2 border-gray-200 rounded-full mx-1 p-3'>
              <FaGoogle className='text-sm'/>
             </a>
            </div>  
                  <p className='font-semibold my-3'>or use your email account</p> 
              <div className='flex flex-col items-center'>
               <div className='bg-gray-100 shadow-lg w-64 p-2 flex items-center '>
                <FaRegEnvelope className='text-gray-400 mr-3'/>
                   <input type="email" name='email'placeholder='Email' className='bg-gray-100'/>
               </div>
               <div className='bg-gray-100 mt-4 shadow-lg w-64 p-2 flex items-center '>
                <MdLockOutline className='text-gray-400 mr-3'/>
                   <input type="password" name='password'placeholder='Password' className='bg-gray-100'/>
               </div>
               <div className='flex w-64 mt-4 justify-between'>
                <label className='flex font-semibold items-center text-xs'> <input type='checkbox' name='remember'
                className='mr-2 '></input> Remember me</label>
                <a href="" className='text-xs font-semibold'>Forgot Password</a>
              
               </div>
               <a className='border-2 mt-4 border-green-500 font-semibold hover:bg-green-500 hover:text-white rounded-full px-12 py-2 inline-block' href="">Sign Up</a>

              </div>
           </div>
            </div>


          <div className='w-2/5 bg-green-500 rounded-tr-2xl rounded-br-2xl py-36 px-12 text-white'>
            <h2 className='text-3xl font-bold'>Hello,Friend</h2>
            <div className='border-2 w-10 border-white inline-block mb-2'></div>
             <p className='mb-10'>Fill up personal and start journey with us.</p>
           <a className='border-2 border-white font-semibold hover:bg-white hover:text-green-500 rounded-full px-12 py-2 inline-block' href="">Sign Up</a>
            </div>      
        </div>

      </main>

    </div>
  )
}

export default Home
