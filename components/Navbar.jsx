"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react'
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

    return (
      <>
       <nav className='h-15 bg-gray-800 flex justify-between items-center text-white p-5'>
        <div className='logo font-serif font-bold flex justify-center items-center gap-2 hover:cursor-pointer text-xl'>
            <img className='h-7 rounded-full ring-1' src='./logo.png' alt='logo_img'/>
           
            <Link href="/"><li> BitLinks</li></Link>
        </div>
        <ul className='flex justify-center items-center gap-5 hover:cursor-pointer font-bold font-serif'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten_Links</li></Link>
            <Link href="/contact"><li>Contact Us</li></Link>
            <li className='flex gap-3'>
                <Link href="/shorten"><button className='bg-black shadow-lg shadow-gray-900 rounded-lg p-3 py-2 px-3 font-bold font-serif text-white'>Try Now</button></Link>
                <Link href="https://github.com/ArafatAli-07">
                  <div className="h-9 w-9 bg-white rounded-full flex items-center justify-center">
                    <img className="h-8 w-8 bg-white rounded-full" src="github.svg" alt="github_img" />
                  </div>
                </Link>
            </li>
        </ul>
       </nav>

        { isOpen && (
          <div
            className="fixed inset-0 bg-slate-900 bg-opacity-90 z-2 md:hidden"
              onClick={toggleMenu}
       ></div>
      )}
   </>
  )
}

export default Navbar
