import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='bg-gray-200'>
      <div className="md:grid grid-cols-2 md:h-[135vh] p-7"> 
         <div className='flex flex-col gap-3 items-center justify-center'>
             <h1 className='text-5xl text-gray-900 font-extrabold font-serif mb-3'>About BitLinks</h1>
             <div className='bg-purple-600 text-white rounded-4xl p-5 ml-5 min-h-[25vh]'>
                 <h3 className='text-3xl font-bold'>Our Mission</h3>
                 <p className='font-serif my-3 text-xl'>At BitLinks, our mission is to simplify your online experience by providing quick, easy, and    efficient URL shortening services. We  believe that sharing links should be seamless, regardless of where you are on the internet.</p>
             </div>
             <div className='bg-purple-600 text-white rounded-4xl p-5 ml-5 min-h-[25vh]'>
               <h3 className='text-3xl font-bold'>Who We Are</h3>
               <p className='font-serif my-3 text-xl'>BitLinks is a dedicated team of tech enthusiasts passionate about streamlining the digital    landscape. Founded in 2025, we set out to create a user-friendly platform that caters to businesses, influencers, and everyday users who    need to share links without hassle.</p>
             </div>
             <div className='bg-purple-600 text-white rounded-4xl p-7 ml-5 min-h-[50vh]'>
               <h3 className='text-3xl font-bold'>What We Do</h3>
               <p className='font-serif mt-3 text-xl'>Our core service revolves around link shortening. With BitLinks, you can:</p>
               <ul className='list-disc px-8'>
                   <li className='text-2xl font-semibold'>Shorten URLs:</li><p className='font-serif text-xl'>Turn long and cumbersome URLs into short,    manageable links that are easy to share</p>
                   <li className='text-2xl font-semibold'>Track Clicks:</li><p className='font-serif text-xl'>Gain insights into how many times your    links have been clicked, enabling you to measure engagement and effectiveness.</p>
                   <li className='text-2xl font-semibold'>Custom Links:</li><p className='font-serif text-xl'>Personalize your shortened links with custom aliases to reflect your brand or content.</p>
                   <li className='text-2xl font-semibold'>Secure Links:</li><p className='font-serif text-xl'>Enjoy peace of mind with our secure link management system.</p>
               </ul>
             </div>
         </div>
         <div className="flex justify-start relative">
             <Image className="mix-blend-darken rounded-4xl" src={"/About.jpg"} alt="about_img" fill={true} />
         </div>
      </div>

      <div className='md:grid md:grid-cols-2 h-full p-7 gap-7 mt-20'>
            <div className='min-h-[20vh]'>
                <div className='bg-green-400 rounded-4xl p-5 ml-5'>
                    <h3 className='text-3xl font-bold mb-3'>Why Choose BitLinks?</h3>
                    <ul className='list-disc px-8'>
                        <li className='text-2xl font-semibold'>User-Friendly Interface:</li><p className='font-serif text-xl'>Our easy-to-navigate platform is designed for users of all skill levels, making link shortening a breeze.</p>
                        <li className='text-2xl font-semibold'>Fast and Reliable:</li><p className='font-serif text-xl'>We prioritize speed and reliability, ensuring that your links are generated and redirected without delay.</p>
                        <li className='text-2xl font-semibold'>Privacy Protection:</li><p className='font-serif text-xl'>We respect your privacy and ensure your data remains secure. We don't collect unnecessary personal informatio</p>
                        <li className='text-2xl font-semibold'>Supportive Community: </li><p className='font-serif text-xl'>Our commitment to our users extends beyond our platform. We're here to help with prompt customer support and a community of like-minded individuals..</p>
                    </ul>
                </div>
            </div>
            <div className='min-h-[20vh]'>
                 <div className='bg-green-400 min-h-[10vh] rounded-4xl mb-12 p-7 mt-7 pl-7'>
                    <h3 className='text-3xl font-bold mb-3'>Join Us</h3>
                    <p className='font-serif text-xl'>Whether you're a business owner looking to streamline your marketing efforts or an individual wanting to share links effortlessly,BitLinks is here for you. Join the thousands of users who trust us to manage their online links and experience the difference.</p>
                 </div>
                 <div className='bg-green-400 min-h-[10vh] rounded-4xl p-7'>
                    <h3 className='text-3xl font-bold mb-3'>Contact Us</h3>
                    <p className='font-serif text-xl'>Have questions or feedback? We'd love to hear from you! Reach out to us at BitLinks123@gmail.com or visit our <a href='/contact' className='text-blue-700 underline'>Contact Page</a>.</p>
                 </div>
            </div>
      </div>
    </div>   
  )
}

export default About