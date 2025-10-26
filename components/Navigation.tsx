"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo-wbg.svg"
                alt="Unique Tech Solution"
                width={50}
                height={50}
                className="h-12 w-auto"
                priority
              />
              <span className="text-xl font-bold text-blue-900 hidden sm:inline">
                Unique Tech Solution
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              About Us
            </Link>

            {/* Our Solutions Dropdown */}
            <div className="relative" onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)}>
              <button className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                Our Solutions
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isSolutionsOpen && (
                <div className="absolute left-0 top-full w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                  <a
                    href="https://mysmartteach.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-semibold text-gray-900">MySmartTeach</div>
                    <div className="text-sm text-gray-600">AI-Powered Teaching Assistant</div>
                  </a>
                  <a
                    href="https://tennerpages.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-semibold text-gray-900">Tennerpages</div>
                    <div className="text-sm text-gray-600">Professional Websites Made Simple</div>
                  </a>
                  <a
                    href="https://teachaitools.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-semibold text-gray-900">UTS Training</div>
                    <div className="text-sm text-gray-600">AI & Tech Upskilling</div>
                  </a>
                  <Link
                    href="/private-ai"
                    className="block px-4 py-3 hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-semibold text-gray-900">Private AI Solutions</div>
                    <div className="text-sm text-gray-600">Enterprise AI Infrastructure</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/success-stories"
              className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Success Stories
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-900 focus:outline-none focus:text-blue-900"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block text-gray-700 hover:text-blue-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-blue-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>

            {/* Mobile Solutions Section */}
            <div className="pl-3 pr-3">
              <div className="text-gray-900 font-semibold py-2 text-sm">Our Solutions</div>
              <a
                href="https://mysmartteach.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-blue-900 hover:bg-gray-50 pl-4 py-2 rounded-md text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                MySmartTeach - AI for Education
              </a>
              <a
                href="https://tennerpages.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-blue-900 hover:bg-gray-50 pl-4 py-2 rounded-md text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Tennerpages - Website Development
              </a>
              <a
                href="https://teachaitools.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-blue-900 hover:bg-gray-50 pl-4 py-2 rounded-md text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                UTS Training - AI & Tech Upskilling
              </a>
              <Link
                href="/private-ai"
                className="block text-gray-600 hover:text-blue-900 hover:bg-gray-50 pl-4 py-2 rounded-md text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Private AI Solutions - Enterprise AI
              </Link>
            </div>

            <Link
              href="/success-stories"
              className="block text-gray-700 hover:text-blue-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-blue-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
