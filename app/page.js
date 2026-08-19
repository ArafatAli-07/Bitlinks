import Image from "next/image";
import Link from 'next/link';
export default function Home() {
  return (
    <main className="bg-gray-200">
      <section className="grid grid-cols-2 h-[91vh]">
        <div className="flex flex-col gap-2 items-center justify-center h-[91vh]">
          <p className="text-3xl font-black font-serif ">
           "Smarter Links for a Faster Web"
          </p>
         
           <p className="px-20 font-seri font-semibold text-lg text-center">
            Tired of long and messy links? Our URL shortener helps you convert lengthy URLs into short, easy-to-share links in just seconds. Whether you're sharing on social media, in emails, or anywhere else, our tool makes your links cleaner and more user-friendly. Simply paste your long URL, click shorten, and you're ready to go!
           </p>
              <div className='flex gap-3 pt-4 '>
                <Link href="/shorten"><button className='bg-black shadow-lg shadow-gray-900 rounded-lg p-3 py-2 px-3 font-bold font-serif text-white'>Try Now</button></Link>
                <Link href="https://github.com/ArafatAli-07"><button className='bg-black shadow-lg shadow-gray-900 rounded-lg p-3 py-2 px-3 font-bold font-serif text-white'>Github</button></Link>
            </div>
        </div> 
       

        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken rounded-2xl"  alt="An image" src={"/vector1.jpg"} fill={true}/>
        </div>

      </section>
    </main>
   
  );
}
