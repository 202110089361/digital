"use client"
import { JSX, SVGProps } from "react";
import Card from "./ui/card";
import PricingCard from './pricing-card'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import IsLoading from "./isloading";
import { useTranslations } from "next-intl";



export default function Testimonials() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['platforms'], queryFn: () => {
      return axios("/platforms")
    }
  })

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md my-4">
        <strong className="font-bold">Request failed:</strong>
        <span className="block">{error.message}</span>
      </div>
    )
  }
  const BottomCard = useTranslations('BottomCard');
  const cardsData = [
    {
      name: BottomCard('name'),
      location: BottomCard('location'),
      avatar: "/images/affiliateAvatar.png",
      text: BottomCard('text')
    },
    {
      name: BottomCard('name_title'),
      location: BottomCard('location_title'),
      avatar: "/images/affiliateAvatar.png",
      text: BottomCard('text_title')
    },
  ];
  const t = useTranslations('HomePage');
  return (
    <>
      <div className="text-white lg:bg-[url('/images/header.png')] bg-cover bg-center bg-no-repeat sm:bg-[url('/images/headerSm.png')] lg:px-10 w-full">
        <main className="flex flex-col items-center justify-center flex-1 text-center lg:mx-10 lg:pb-96 lg:pt-48">
          <h1 className="hidden lg:block text-4xl md:text-4xl font-bold">{t('premiumSubscriptionOffer')}</h1>
          <p className="hidden lg:block mt-8 text-xl">{t('qualityStreaming')}</p>
        </main>
      </div>
      <section className="relative">


        <div className="px-8 xl:px-32 xxl:px-48 py-10 md:py-20 md:py-15 lg:py-0 mt-6">
          <div className="mb-10">
            {isLoading ? (
              <IsLoading />
            ) :
              <div className="mx-auto grid gap-12 grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 items-start pt-4">
                {data?.data?.data?.map((item: any, index: number) => (
                  <PricingCard key={index} data={item} />
                ))}
              </div>
            }
          </div>
        </div>



        {/* <div className="max-w-3xl mx-auto text-center pt-12 md:pt-8 mb-4">
            <div className="font-bold text-3xl text-black">Refer & Earn</div>
            <div className="flex justify-center mt-4">
              <div className="mr-2 text-gray-600">4 credit Per Referral for you Up to
                <span className="text-red-500">10 days</span>
                &nbsp;free for Them!
              </div>
            </div>
          </div> */}

        <div className="bg-[url('/images/pricing.png')]  bg-center bg-no-repeat bg-cover bg-contain pt-0 md:pt-20">
          <div className="items-center justify-center mb-20 min-h-[90vh] text-black w-4/5 mx-auto md:pt-20 md:mt-20">
            <h2 className="mb-8 text-3xl font-bold text-center">
              {t('whyUseDolOfferTitle')}
              <span className="text-primary text-[#785FDB]">&nbsp;{t('use_DolOffer')}</span>?
            </h2>
            <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 mt-20">
              <Card className="p-6 pt-10 text-center border transition-shadow transition-colors duration-300 hover:shadow-2xl group w-auto h-auto ">
                <RocketIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="mb-2 text-lg font-bold group-hover:text-[#785FDB]">{t('realTimeDelivery_title')}</h3>
                <p className="text-muted-foreground mt-10 text-gray-400">
                  {t('realTimeDelivery_description')}
                </p>
              </Card>
              <Card className="p-6 pt-10 text-center border transition-shadow transition-colors duration-300 hover:shadow-2xl group w-auto h-auto">
                <LockIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="mb-2 text-lg font-bold group-hover:text-[#785FDB]">{t('quickReset_title')}</h3>
                <p className="text-muted-foreground mt-10 text-gray-400">
                  {t('quickReset_description')}
                </p>
              </Card>
              <Card className="p-6 pt-10 text-center border transition-shadow transition-colors duration-300 hover:shadow-2xl group w-auto h-auto">
                <ShieldIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="mb-2 text-lg font-bold group-hover:text-[#785FDB]">{t('sslCertificate_title')}</h3>
                <p className="text-muted-foreground mt-10 text-gray-400">
                  {t('sslCertificate_description')}
                </p>
              </Card>
              <Card className="p-6 pt-10 text-center border transition-shadow transition-colors duration-300 hover:shadow-2xl group w-auto h-auto">
                <HeadphonesIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="mb-2 text-lg font-bold group-hover:text-[#785FDB]">{t('liveSupport_title')}</h3>
                <p className="text-muted-foreground mt-10 text-gray-400">
                  {t('liveSupport_description')}
                </p>
              </Card>
              <Card className="p-6 pt-10 text-center border transition-shadow transition-colors duration-300 hover:shadow-2xl group w-auto h-auto">
                <HeartIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="mb-2 text-lg font-bold group-hover:text-[#785FDB]">{t('suitableSubscriber_title')}</h3>
                <p className="text-muted-foreground mt-10 text-gray-400">{t('suitableSubscriber_description')}</p>
              </Card>
              <Card className="p-6 pt-10 text-center border transition-shadow transition-colors duration-300 hover:shadow-2xl group w-auto h-auto">
                <ReceiptIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="mb-2 text-lg font-bold group-hover:text-[#785FDB]">{t('refundGuarantee_title')}</h3>
                <p className="text-muted-foreground mt-10 text-gray-400">{t('refundGuarantee_description')}</p>
                <a href="#" className="text-sm underline text-[#785FDB] font-bold">
                  {t('reviews_description')}
                </a>
              </Card>
            </div>
          </div>

          <div className="text-3xl font-bold text-center text-black mb-10">
            <span className="text-primary text-[#785FDB]">98%</span> {t('reviews_title')}
          </div>

          <div className="flex justify-center py-2 text-black mx-auto mb-20 lg:px-20 md:px-4 sm:px-1">
            <div className="w-full md:w-3/4 md:overflow-x-auto md:space-x-4 md:p-4 md:flex hidden md:block  scrollable-container">
              <style jsx>
                {`         
                /* 自定义滚动条的整体样式 */
                .scrollable-container::-webkit-scrollbar {
                  height: 10px; /* 滚动条的高度 */
                  border-radius: 5px; /* 滚动条的圆角 */
                  background-color: #f1f1f1; /* 滚动条背景颜色 */
                }
                /* 自定义滚动条的滑块（拖动按钮）的样式 */
                .scrollable-container::-webkit-scrollbar-thumb {
                  background-color: #785FDB; /* 滑块的颜色 */
                  border-radius: 5px; /* 滑块的圆角 */
                }

                /* 自定义滚动条的轨道样式 */
                .scrollable-container::-webkit-scrollbar-track { 
                  border-radius: 10px;
                }
              `}
              </style>

              <div className="flex gap-6">
                {cardsData.map((card, index) => (
                  <div
                    key={index}
                    className="card w-3/4 md:w-1/2 min-w-[300px] max-h-[400px] p-4 border border-gray-300 rounded-3xl flex-shrink-0 bg-white z-20"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="avatar">
                        <img
                          src={card.avatar}
                          alt="User Avatar"
                          className="w-12 h-12 rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{card.name}</h3>
                        <p className="text-sm text-muted-foreground">{card.location}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-3/4 grid grid-cols-1 gap-4 overflow-y-auto md:hidden scrollable-container max-h-[400px] sm:max-h-[360px] p-4">
              <style jsx>
                {`         
                /* 自定义滚动条的整体样式 */
                .scrollable-container::-webkit-scrollbar {
                  width:10px;
                  height: 10px; /* 滚动条的高度 */
                  border-radius: 5px; /* 滚动条的圆角 */
                  background-color: #f1f1f1; /* 滚动条背景颜色 */
                }
                /* 自定义滚动条的滑块（拖动按钮）的样式 */
                .scrollable-container::-webkit-scrollbar-thumb {
                  background-color: #785FDB; /* 滑块的颜色 */
                  border-radius: 5px; /* 滑块的圆角 */
                }

                /* 自定义滚动条的轨道样式 */
                .scrollable-container::-webkit-scrollbar-track { 
                  border-radius: 10px;
                }
              `}
              </style>
              <div className="grid grid-cols-1 gap-y-6">
                {cardsData.map((card, index) => (
                  <div
                    key={index}
                    className="card w-full p-2 border border-gray-300 rounded-3xl flex-shrink-0 bg-white z-20" >
                    <div className="flex items-center space-x-4">
                      <div className="avatar">
                        <img
                          src={card.avatar}
                          alt="User Avatar"
                          className="w-12 h-12 rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{card.name}</h3>
                        <p className="text-sm text-muted-foreground">{card.location}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

function HeadphonesIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="17" y="14" width="4" height="7" fill="#bda8f0" stroke="none" />
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
}



function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" fill="#B3A6FF" stroke="none" />
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}




function LockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="16" r="6" fill="#B3A6FF" stroke="none" />
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <rect x="10.5" y="14" width="3" height="4" fill="#000" />
      <circle cx="12" cy="16.5" r="1" fill="#000" />
    </svg>
  );
}



function ReceiptIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="6" fill="#B3A6FF" stroke="none" />
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 17.5v-11" />
    </svg>
  )
}



function RocketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="6" fill="#B3A6FF" stroke="none" />
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function ShieldIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        cx="12"
        cy="12"
        r="5"
        fill="#B3A6FF"
        stroke="none"
      />
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      {/* Key shape */}
      <path
        d="M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-1 0h2v3h-2v-3zM13 17h-2v-1h2v1z"
        fill="currentColor"
      />
      <path
        d="M15 17l-1 1-1-1 1-1 1 1z"
        fill="currentColor"
      />
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

function ArrowRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function ChevronDownIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function ChevronUpIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m18 15-6-6-6 6" />
    </svg>
  )
}