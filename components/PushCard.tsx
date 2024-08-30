"use client";

import { useState } from "react";
import { SVGProps } from "react";

export default function PushCard() {
  // 使用 useState 钩子来管理卡片的显示状态
  const [cardVisible, setcardVisible] = useState(true);

  function handleClose(): void {
    setcardVisible(false); // 将状态设置为 false 来隐藏卡片
  }
  if (!cardVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 md:flex md:items-center md:justify-center bg-gray-500 bg-opacity-75 overflow-y-auto overflow-x-hidden">
      <div className="flex min-h-screen pt-4 md:px-4 px-2 pb-20 sm:block sm:p-0">
        <div className="md:p-10 mt-10">
          <div className=" w-auto max-w-[100%] md:max-w-[100%] bg-white md:px-4 rounded-2xl shadow-lg flex flex-col">
            <div className="flex flex-col pt-2 pb-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black md:px-8 px-2">Earn for each referral!</h2>
                <button
                  className="text-gray-500 hover:text-gray-900 pb-6 pl-6 px-2 text-3xl"
                  onClick={handleClose}
                >
                  X
                </button>
              </div>
              <span className="text-[#9a9a9a] text-sm md:px-8 px-2">
                When your friend new to DolOffer makes a successful purchase through this link, both of<br className="hidden md:block" />
                you will receive bonus time. Get 10 days for your subscription and 10 days for your friend's!
              </span>
            </div>
            <div className="flex items-start justify-start">
              <img src="/images/referral.png" alt="Subscription referral Image" className="lg:w-1/3 w-1/4 mt-10 hidden md:block" />
              <div className="flex flex-col justifty-start">
                <div className="flex md:justify-between sm:justify-start items-center space-x-1 mx-2 md:mx-0">
                  <img src="/images/referral.png" alt="Subscription referral Image" className="lg:w-1/3 w-1/5 mt-10 block md:hidden" />
                  <div className="flex flex-col mt-10 space-y-2">
                    <h2 className="md:text-5xl text-xl font-[Arial] font-bold text-[#775fdb]">+20 Days</h2>
                    <span className="text-sm md:text-2xl font-[Regular] text-black">for each sharing</span>
                  </div>
                  {/* <img src="/images/referral2.png" alt="Subscription referral2 Image" className="ml-20" /> */}
                  <img src="/images/referral2.png" alt="Subscription referral2 Image" className="md:ml-20 lg:w-1/3 w-1/6 " />
                </div>
                <div className="md:px-4 py-4 rounded-xl border-2 border-gray-300 text-black flex items-center justify-between mt-6
                   w-full max-w-xs md:max-w-full break-words">
                  <div className="flex flex-row items-center justify-center md:space-x-8 break-words md:px-0">
                    <span className="text-sm break-words ml-2 md:ml-0">https://www.gamsgo.com/sid/1386089</span>
                    <CopyIcon className="ml-4 md:ml-0 text-[#775fdb]" />
                  </div>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4  xl:grid-cols-5 space-x-4 space-y-4 mt-4">
                  <img src="/images/youtube.png" alt="youtube" className="pt-4 pl-4" />
                  <img src="/images/instagram.png" alt="instagram" className="" />
                  <img src="/images/tiktok.png" alt="tiktok" className="" />
                  <img src="/images/facebook.png" alt="facebook" className="" />
                  <img src="/images/twitter.png" alt="twitter" className="" />
                  <img src="/images/telegram.png" alt="telegram" className="" />
                  <img src="/images/pinterest.png" alt="pinterest" className="" />
                  <img src="/images/naver.png" alt="n" className="" />
                  <img src="/images/talk.png" alt="talk" className="" />
                </div>
              </div>
            </div>
            <div className="flex justify-center mx-auto">
              <button className="bg-[#775FDB] text-white px-10 md:px-20 py-4 rounded-full font-[Arial] font-bold mt-8 mb-6">
                REFER FRIENDS NOW!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CopyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}
