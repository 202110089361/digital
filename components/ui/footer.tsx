import { JSX, SVGProps, useState } from 'react'
import SelectLanguage from './selectLanguage'
import { useLocale, useTranslations } from 'next-intl';


export default function Footer() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isLegalVisible, setIsLegalVisible] = useState(false);
  const footitle = useTranslations('FooterPage');


  return (
    <>
      <div className="flex lg:gap-8 md:gap-4 items-center justify-center text-black mx-auto mt-auto  sm:space-x-2">
        <img src="/images/visa.png" alt="" className="w-10 md:w-20" />
        <img src="/images/logo-bancontact.png" alt="" className="w-10 md:w-20" />
        <img src="/images/logo-blik.png" alt="" className="w-10 md:w-20" />
        <img src="/images/logo-giropay.png" alt="" className="w-10 md:w-20" />
        <img src="/images/logo-ideal.png" alt="" className="w-10 md:w-20" />
        <img src="/images/logo-skrill.png" alt="" className="w-10 md:w-20" />
        <img src="/images/logo-sofort.png" alt="" className="w-10 md:w-20" />
      </div>
      <div className="w-full">
        <img src="/images/footer.png" alt="" className="w-full" />
      </div>
      <div className="bg-[#454057] text-white bg-contain bg-center bg-no-repeat  mx-auto lg:bg-[none] pt-4 w-full -mt-1">
        <div className="z-10 text-white px-4 md:px-32 flex items-center justify-between lg:pb-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pb-10  ">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col hidden md:block">
                  <h3 className="font-bold mb-4">{footitle('about.title')}</h3>
                  <ul className="space-y-2 text-[#a29cb0]">
                    <li>{footitle('about.links.aboutUs')}</li>
                    <li>{footitle('about.links.contactUs')}</li>
                    <li><a href='/help-center'>{footitle('about.links.helpCenter')}</a></li>
                    <li>{footitle('about.links.affiliateProgram')}</li>
                    <li>{footitle('about.links.appsForSearchMovies')}</li>
                  </ul>
                </div>
                <div className="flex flex-col hidden md:block">
                  <h3 className="font-bold mb-4">{footitle('legal.title')}</h3>
                  <ul className="space-y-2 text-[#a29cb0]">
                    <li>{footitle('legal.links.doOfferTC')}</li>
                    <li><a href='/privacypolicy'>{footitle('legal.links.privacyPolicy')}</a></li>
                    <li>{footitle('legal.links.copyright')}</li>
                    <li>{footitle('legal.links.refundPolicy')}</li>
                    <li>{footitle('legal.links.amlPolicy')}</li>
                  </ul>
                </div>
              </div>




              <div className="grid grid-cols-1 md:grid-cols-2  gap-8 md:hidden">
                <div className="flex flex-col md:hidden">
                  <div className="flex items-center mb-4 space-x-4">
                    <h3 className="font-bold">{footitle('about.title')}</h3>
                    <button
                      className="md:hidden focus:outline-none"
                      onClick={() => setIsAboutVisible(!isAboutVisible)}>
                      <DownIcon />
                    </button>
                  </div>
                  {isAboutVisible && (
                    <ul className="space-y-2 text-[#a29cb0]">
                      <li>{footitle('about.links.aboutUs')}</li>
                      <li>{footitle('about.links.contactUs')}</li>
                      <li><a href='/help-center'>{footitle('about.links.helpCenter')}</a></li>
                      <li>{footitle('about.links.affiliateProgram')}</li>
                      <li>{footitle('about.links.appsForSearchMovies')}</li>
                    </ul>
                  )}
                </div>
                <div className="flex flex-col md:hidden">
                  <div className="flex items-center mb-4 space-x-4">
                    <h3 className="font-bold ">{footitle('legal.title')}&nbsp;</h3>
                    <button
                      className="md:hidden focus:outline-none"
                      onClick={() => setIsLegalVisible(!isLegalVisible)}>
                      <DownIcon />
                    </button>
                  </div>
                  {isLegalVisible && (
                    <ul className="space-y-2 text-[#a29cb0]">
                      <li>{footitle('legal.links.doOfferTC')}</li>
                      <li><a href='/privacypolicy'>{footitle('legal.links.privacyPolicy')}</a></li>
                      <li>{footitle('legal.links.copyright')}</li>
                      <li>{footitle('legal.links.refundPolicy')}</li>
                      <li>{footitle('legal.links.amlPolicy')}</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold mb-4">{footitle('language')}</h3>

                  <SelectLanguage></SelectLanguage>





                </div>
              </div>
              <div className="flex space-x-4 mt-12 justify-center md:justify-start">
                <div className="flex items-center justify-center md:w-10 md:h-10 w-5 h-5 bg-[#585468] rounded-full">
                  <FacebookIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center justify-center md:w-10 md:h-10 w-5 h-5 bg-[#585468] rounded-full">
                  <TextIcon className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-center md:w-10 md:h-10 w-5 h-5 bg-[#585468] rounded-full">
                  <TwitterIcon className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-center md:w-10 md:h-10 w-5 h-5 bg-[#585468] rounded-full">
                  <CoffeeIcon className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-center md:w-10 md:h-10 w-5 h-5 bg-[#585468] rounded-full">
                  <YoutubeIcon className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-center md:w-10 md:h-10 w-5 h-5 bg-[#585468] rounded-full">
                  <TwitterIcon className="w-6 h-6" />
                </div>
              </div>
              <div className="text-xs text-muted-foreground mt-12 text-[#a29cb0]">
                <p>{footitle('ownership_disclaimer')}</p>
                <p>
                  {footitle('company_info')}
                </p>
                <p>{footitle('terms_policy')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function CoffeeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
      <path d="M6 2v2" />
    </svg>
  )
}


function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function TextIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  )
}


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function YoutubeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}


function DownIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="white"
      className="bi bi-sort-down"
      viewBox="0 0 16 16">
      <path
        d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
    </svg>
  )
}