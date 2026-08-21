import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        
        {/* Main Footer Content */}
        <div className="text-center">
          <p className="text-sm sm:text-base font-semibold">
            © 2025 BitLinks. All rights reserved.
          </p>

          <p className="text-xs sm:text-sm text-gray-300 mt-3 max-w-2xl mx-auto leading-6">
            Shorten your URLs safely and efficiently. Effortlessly shorten
            and track your URLs.
          </p>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mt-5 text-xs sm:text-sm">
            <Link
              href="/privacy"
              className="text-gray-300 hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <span className="text-gray-600 hidden sm:inline">|</span>

            <Link
              href="/terms"
              className="text-gray-300 hover:text-white transition"
            >
              Terms of Service
            </Link>

            <span className="text-gray-600 hidden sm:inline">|</span>

            <a
              href="mailto:bitLinks123@gmail.com"
              className="text-gray-300 hover:text-white transition break-all"
            >
              Contact Us: bitLinks123@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-6">
            <p className="text-sm font-semibold mb-3">
              Follow us on:
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="px-3 py-2 rounded-lg bg-gray-900 text-xs sm:text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition"
              >
                Facebook
              </a>

              <a
                href="#"
                className="px-3 py-2 rounded-lg bg-gray-900 text-xs sm:text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition"
              >
                Twitter
              </a>

              <a
                href="#"
                className="px-3 py-2 rounded-lg bg-gray-900 text-xs sm:text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Student Project Notice */}
          <p className="text-xs sm:text-sm text-gray-500 mt-7 max-w-2xl mx-auto leading-5">
            This is a student project created for educational purposes.
            Some features may be placeholders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
