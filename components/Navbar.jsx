"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="h-16 bg-gray-800 text-white px-5 md:px-8 flex justify-between items-center relative z-50">
        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <div className="logo font-serif font-bold flex justify-center items-center gap-2 cursor-pointer text-xl">
            <img
              className="h-8 w-8 rounded-full ring-1"
              src="/logo.png"
              alt="BitLinks logo"
            />
            <span>BitLinks</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center gap-6 cursor-pointer font-bold font-serif">
          <li>
            <Link href="/" className="hover:text-gray-300 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-gray-300 transition">
              About
            </Link>
          </li>

          <li>
            <Link
              href="/shorten"
              className="hover:text-gray-300 transition"
            >
              Shorten Links
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition"
            >
              Contact Us
            </Link>
          </li>

          <li className="flex items-center gap-3">
            <Link href="/shorten">
              <button className="bg-black shadow-lg shadow-gray-900 rounded-lg px-4 py-2 font-bold hover:bg-gray-900 transition">
                Try Now
              </button>
            </Link>

            <Link
              href="https://github.com/ArafatAli-07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="h-9 w-9 bg-white rounded-full flex items-center justify-center hover:scale-105 transition">
                <img
                  className="h-8 w-8 bg-white rounded-full"
                  src="/github.svg"
                  alt="GitHub"
                />
              </div>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl p-1 hover:text-gray-300 transition"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 right-0 w-72 max-w-[85%] bg-gray-800 text-white z-50 md:hidden shadow-2xl transition-all duration-300 ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col font-serif font-bold p-6 gap-2">
          <li>
            <Link
              href="/"
              onClick={closeMenu}
              className="block px-4 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              onClick={closeMenu}
              className="block px-4 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/shorten"
              onClick={closeMenu}
              className="block px-4 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              Shorten Links
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block px-4 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              Contact Us
            </Link>
          </li>

          <li className="pt-3 flex flex-col gap-3">
            <Link href="/shorten" onClick={closeMenu}>
              <button className="w-full bg-black shadow-lg shadow-gray-900 rounded-lg px-4 py-3 font-bold hover:bg-gray-900 transition">
                Try Now
              </button>
            </Link>

            <Link
              href="https://github.com/ArafatAli-07"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex justify-center"
            >
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition">
                <img
                  className="h-9 w-9 bg-white rounded-full"
                  src="/github.svg"
                  alt="GitHub"
                />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;




