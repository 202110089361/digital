import React from 'react';
import Image from 'next/image'
interface SubscriptionItemProps {
  title: string;
  price: string;
  description: string;
  Beginning: string
  endtime: string
  user: string
  images: string
}
const SubscriptionItem: React.FC<SubscriptionItemProps> = ({ title, price, description, Beginning, endtime, user, images }) => {
  return (
    <div className="p-6 border rounded-md border-gray-300 w-200 h-200">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 mb-8">
        <div className="flex items-center">
          <Image src={images} alt="Help Icon" width={16} height={16} className="mr-1" />
          <span className="ml-1 text-black">{user}</span>
        </div>
        <div className="flex items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Purchase again
          </button>
          {/* <button className="text-gray-500 ml-3  rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">X</button> */}
          <button className="text-gray-500 ml-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">X</button>
        </div>
      </div>
      <div>
        <div>
        </div>
        <div className="relative">
          {/* <svg className='h-20 w-20 absolute ml-60' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">  
  <circle cx="12" cy="12" r="11" fill="#FFCDD2" />  
  <text className="text-offset" x="50%" y="50%" text-anchor="middle" alignment-baseline="central" font-family="Arial, sans-serif" font-size="6" fill="#FFFFFF">Order</text>  
</svg> */}

          <svg className='h-20 w-20 absolute ml-60' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <circle cx="12" cy="12" r="11" fill="#FFFFFF" />
            <text className="text-offset" x="50%" y="50%" text-anchor="middle" alignment-baseline="central" font-family="Arial, sans-serif" font-size="6" fill="#FFFFFF">Order</text>
          </svg>


          <h2 className="text-lg font-semibold text-black flex items-center justify-between px-6 border-b-2 border-gray-150 pb-2 mb-6 relative">
            {title}
            <span className="text-sm ml-16">{Beginning}</span>
          </h2>
          <p className="text-lg font-semibold text-black flex items-center justify-between px-6 border-b-2 border-gray-150 pb-2 mb-6 relative">
            {description}
            <span className="text-sm ml-16">{endtime}</span>
          </p>
        </div>
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100 relative">
          <div className="flex items-center">
            <svg className="h-6 w-6 text-blue-500 bg-blue-100 rounded-full p-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12FF 6 6 0 010 12z" />
              <path fill-rule="evenodd" d="M9 5a1 1 0 112 0v5a1 1 0 11-2 0V5zm1 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
            </svg>
            <span className="ml-1 text-black">Help</span>
          </div>
          <div className="flex items-center">
            <span className="mr-1 text-black">Support</span>
            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6M12 6H6m6 0l6-6-6 6z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubscriptionItem;
