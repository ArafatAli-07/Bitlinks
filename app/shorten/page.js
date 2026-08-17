"use client"
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

const shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");


     const generate = ()=>{
      const myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");
       
       const raw = JSON.stringify({
         "url": url,
         "shorturl": shorturl
       });
       
       const requestOptions = {
         method: "POST",
         headers: myHeaders,
         body: raw,
         redirect: "follow"
       };
       
       fetch("/api/users", requestOptions)
         .then((response) => response.json())
         .then((result) => {
            setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
            seturl("")
            setshorturl("")
            console.log(result)
            alert(result.message)
          })
         .catch((error) => console.error(error));
    }

  return (
    <>
    <div className='text-black text-3xl flex justify-center items-center font-bold font-serif pt-10 '>
      <h1>BitLinks - "Smaller links, bigger impact." </h1>
    </div>
    <div className='min-h-[50vh] font-serif mx-auto max-w-lg bg-gray-200 my-16 p-8 rounded-lg flex flex-col gap-4 '>
      <h1 className='font-bold font-serif text-2xl'>Generate your short URLs</h1>
      <div className='flex flex-col gap-2'>
        <input type='text' value={ url } className='bg-white p-4 focus:outline-gray-600 rounded-xl mt-4' placeholder='Enter your URL' onChange={e =>{seturl(e.target.value)}} />
          <input type='text' value={shorturl} className='bg-white p-4 focus:outline-gray-600 rounded-xl mt-4 ' placeholder='Enter your preferred short URL text' onChange={e =>{setshorturl(e.target.value)}} />
          <button onClick={generate} className='bg-black text-white rounded-xl mt-4 p-3 text-xl '>Generate short URL</button>
          
      </div>

      {generated && <> <span className='font-bold text-xl'>Your Link:</span><code> <Link 
            target="_blank" href={generated}>{generated}</Link>
            </code></>}

       <Image className=" mix-blend-darken rounded-2xl"  alt="An image" src={"/vector3.png"} width={500} height={500}/>

       

    </div>

    </>

  )
}

export default shorten