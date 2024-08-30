"use client";
import { useState } from 'react';
// import { SignInButton, SignedIn, SignedOut, UserButton, UserProfile } from '@clerk/nextjs';
import Link from 'next/link';
import { JSX, SVGProps } from 'react';
import { useTranslations } from 'next-intl';

export default function Header({ nav = true }: { nav?: boolean }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const t = useTranslations('HomePage');
  return (
    <>
      <div className="lg:px-10 w-full">
        <header className="flex items-center justify-between lg:px-20 md:px-10 px-4 pt-2 pb-2 py-4 fixed top-0 left-0 right-0 bg-[#785FDB] z-50">
          <div className="text-lg font-bold flex flex-row space-x-2">
            <button
              className="lg:hidden focus:outline-none"
              onClick={() => setIsNavOpen(!isNavOpen)}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <Link className="flex block text-sm md:text-xl lg:text-2xl lg:ml-10" href="/" aria-label="Cruip">{t('doloffer')}</Link>
          </div>
          <nav className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-center font-medium mt-2">
            <div className="flex items-center justify-center text-center">
              <a href="/" className="hover:underline text-center">{t('home_title')}</a>
            </div>
            <div className="flex items-center justify-center text-center">
              <a href="/affiliate" className="hover:underline">{t('affiliate')}</a>
            </div>
            <div className="flex items-center justify-center text-center">
              <a href="/aftersalessupport" className="hover:underline">{t('After-Sales_title')}</a>
            </div>
            <div className="flex items-center justify-center text-center">
              <a href="/subscription" className="hover:underline">{t('subscription_title')}</a>
            </div>
          </nav>
          <div className="flex items-center space-x-0 ml-2 md:ml-0 md:space-x-4 mt-2 lg:mr-10">
            <button className="flex text-xm items-center space-x-1 hover:text-gray-400 focus:outline-none mb-1">
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <span>{t('integral_title')}&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </button>
            <button className="flex text-xm items-center space-x-1 hover:text-gray-400 focus:outline-none mb-1">
              <UserIcon className="w-5 h-5 text-yellow-400" />
              <a href='/login'>login</a>
            </button>
            {nav && (
              <nav className="flex grow">
                <ul className="flex grow justify-end flex-wrap items-center">
                  {/* <li>
                    <SignedOut>
                      <SignInButton><button><UserIcon /></button></SignInButton>
                    </SignedOut>
                    <SignedIn>
                    </SignedIn>
                    <UserButton afterSignOutUrl='/'>
                      <UserButton.UserProfilePage
                        label="My Orders"
                        url="orders"
                        labelIcon={
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 9a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V9zm6-4a1 1 0 0 1 2 0v10a1 1 0 0 1-2 0V5zm5 7a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v4z" clipRule="evenodd" />
                          </svg>}
                      >
                      </UserButton.UserProfilePage>
                    </UserButton>
                  </li> */}
                </ul>
              </nav>
            )}
          </div>
        </header>
        {isNavOpen && (
          <nav className="fixed top-0 left-0 right-0 z-10 lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full justify-center bg-[#785FDB] text-lg font-medium mt-10 pt-10 pb-2">
            <div className="flex items-center justify-center">
              <a href="/" className="hover:underline text-center border-2 border-gray-400 rounded-full p-1 bg-[#6c4ccf] hover:shadow-2xl w-3/4">
                {t('home_title')}
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="/affiliate" className="hover:underline text-center border-2 border-gray-400 rounded-full p-1 bg-[#6c4ccf] hover:shadow-2xl w-3/4">
                {t('affiliate')}
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="/aftersalessupport" className="hover:underline text-center border-2 border-gray-400 rounded-full p-1 bg-[#6c4ccf] hover:shadow-2xl w-3/4">
                {t('After-Sales_title')}
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="/subscription" className="hover:underline text-center border-2 border-gray-400 rounded-full p-1 bg-[#6c4ccf] hover:shadow-2xl w-3/4">
                {t('subscription_title')}
              </a>
            </div>
          </nav>
        )}
      </div>
    </>
  )
}



function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

