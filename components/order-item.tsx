import React, { SVGProps, useState } from 'react';
import Image from 'next/image'
import Button from './ui/button';
import axios from "axios"
import RedeemModal from './RedeemModal';

interface SubscriptionItemProps {
  image: string;
  orderNumber: string;
  platform: any;
  paymentMethod: string;
  period: string;
  cardSecret: string;
  account: any;
  paymentTime: any;
}
const formatDate = (paymentTime: string | number | Date) => {
  const date = new Date(paymentTime);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const OrderItem: React.FC<SubscriptionItemProps> = ({ image, orderNumber, platform, paymentMethod, period, account, cardSecret, paymentTime }) => {
  const [showPasskey, setShowPasskey] = useState<Boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const togglePasskeyVisibility = () => {
    setShowPasskey(!showPasskey);
  };
  const handleRenewClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const formattedDate = formatDate(paymentTime);

  return (
    <>
      <RedeemModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div className="max-w-md mx-auto bg-white rounded-3xl border border-gray-200 shadow-md">
        <div className="flex items-center justify-between mb-4 bg-[#f1effc] px-2 py-4 rounded-t-3xl">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gray-300">
              <img src={image} alt="" className="w-full h-full rounded-full object-cover" />
            </div>
            <div className='pl-2'>
              <h3 className="text-lg font-semibold text-[#8468ff] pb-1">{platform?.name}</h3>
              <p className="text-sm text-[#8468ff] pt-1">ID:{orderNumber}</p>
            </div>
          </div>
          <button
            onClick={handleRenewClick}
            className="px-6 py-3 text-white border border-gray-300 rounded-full bg-[#775fdb] hover:bg-[#e8e3ff] hover:text-black"
          >
            Renew
          </button>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600">Payment Options</span>
            <span className="btext-gray-800">
              One-time payment <ChevronDownIcon className="inline-block w-4 h-4" />
            </span>
            <span className="text-[#8468ff]">
              {paymentMethod}
            </span>
          </div>
          <div className="border-b pb-2 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Remaining time</span>
              <span className="text-[#DB5F64] bg-[#fcefef] rounded-full px-2 py-1">53d 21h 36m 56s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Start time</span>
              <span className="text-gray-800">{formattedDate}</span>
              {/* <span className="text-[#8468ff]">{period}</span> */}
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Expire time</span>
              <span className="text-gray-800">2024-09-13</span>
            </div>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600">Username</span>
            <span className="text-gray-800">
              alijah8afam1.top <ChevronDownIcon className="inline-block w-4 h-4" />
            </span>
          </div>
          <div className="flex flex-col border-b pb-2">
            <div className="flex justify-between pb-2">
              <span className="text-gray-600">Passkey</span>
              <div className='pr-2'>
                <span className="text-gray-800">
                  {showPasskey ? cardSecret : '********'}
                  <CopyIcon className="inline-block w-4 h-4 text-[#8468ff] ml-2" />
                </span>
                <button
                  onClick={togglePasskeyVisibility}
                  className="text-[#8468ff] ml-2"
                >
                  {showPasskey ? (
                    <EyeOffIcon className="w-4 h-4" />
                  ) : (
                    <EyeIcon className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            <div className="text-sm text-[#826cde]">Last changed 78 Days ago</div>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600">Profile</span>
            <span className="text-gray-800 font-bold">Please use NO.2 profile</span>
          </div>
          <div className="p-1 border border-dashed border-purple-300 rounded-xl text-sm text-[#806ade] bg-[#f1effc]">
            If you encounter any problems, please contact customer service in time, purchase a subscription at Dolo offer,
            and enjoy VIP customer service and you don't need to change the subscription information for renewal.
          </div>
          <div className="flex justify-between">
            <button className="flex items-center space-x-2">
              <DollarSignIcon className="w-4 h-4 text-[#775FDB]" />
              <span className="text-[#666666]">Renew</span>
            </button>
            <button className="flex items-center space-x-2">
              <CircleHelpIcon className="w-4 h-4 text-[#DB5F64]" />
              <span className="text-[#666666]">Help</span>
            </button>
            <button className="flex items-center space-x-2">
              <SupportIcon className="w-4 h-4 text-[#10B256]" />
              <span className="text-[#666666]">Support</span>
            </button>
          </div>
          <button className="w-full bg-[#775fdb] text-white rounded-lg p-2">
            <div className='flex items-center justify-between px-2'>
              +10 days per referral
              <ShareIcon className="inline-block w-4 h-4" />
            </div>
          </button>
        </div>
        {/* <div className="flex items-center justify-between text-[#8468ff]">
          <span className="text-[#8468ff]">{showPasskey && account.cardSecret}</span>
          <button
            onClick={togglePasskeyVisibility}
            className="px-2 py-1 text-[#8468ff] bg-gray-700 border border-gray-400 rounded hover:bg-gray-600"
          >
            {showPasskey ? 'Hide Passkey' : 'Show Passkey'}
          </button>
        </div> */}
      </div>
    </>
  );
};

function ChevronDownIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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


function CircleHelpIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function CopyIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}


function DollarSignIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function SupportIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2">
      <path d="M7 10c-1.1 0-2 1-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4c0-1-1-2-2-2h-4z" />
      <circle cx="11" cy="8" r="3" />
      <circle cx="13" cy="8" r="3" />
    </svg>
  );
}

// function ShareIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
//       <polyline points="16 6 12 2 8 6" />
//       <line x1="12" x2="12" y1="2" y2="15" />
//     </svg>
//   )
// }
function ShareIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function EyeIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
      <path d="M17 17l4 4M7 7L3 3m16 16c-2.53 1.03-5.48 1.6-8 1.6-7 0-10-7-10-7s3-7 10-7c2.95 0 5.7.68 8 1.88m-1.85 3.54a3 3 0 0 1-5.15 2.65M12 12l4-4" />
    </svg>
  );
}

export default OrderItem;