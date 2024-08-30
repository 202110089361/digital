import React from 'react';
import { useState } from 'react';
import Button from './ui/button'; // Import your Button component if needed
import { SubscriptionModal } from './subscription-modal';


interface RedeemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RedeemModal: React.FC<RedeemModalProps> = ({ isOpen, onClose }) => {


  const [isPending2, setIsPending2] = useState(false);  // 提交状态
  const [showPaymentPage, setShowPaymentPage] = useState(false);  // 控制页面显示


  const handleCloseAllModals = () => {
    setShowPaymentPage(false);
    onClose()
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();


    setIsPending2(true);

    setShowPaymentPage(true);

  }



  if (showPaymentPage) {
    return (
      <div className="fixed z-30 inset-0 overflow-y-auto md:mt-4 mt-12">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
          <div className="inline-block align-bottom bg-white rounded-3xl p-2 text-left 
             overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
            <div className="bg-white ">
              <div className="text-lg font-medium text-gray-900">
                <SubscriptionModal closeModal2={handleCloseAllModals} isOpen={showPaymentPage && isOpen} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {isOpen && (
        <div className='fixed rounded-3xl bg-white md:p-8 p-4 shadow-lg z-50 text-black w-5/6 max-w-[100%]  md:w-[690px] lg:w-[890px] 
        max-h-[480px] md:max-h-auto xl:max-h-[800px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto xl:overflow-y-hidden shadow-2xl border-t border-gray-300'>
          <div className='flex flex-col'>
            <div className='flex justify-between items-center'>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Redeem Modal</h2>
              <Button onClick={onClose} className="border-none rounded-full"><CloseIcon /></Button>
            </div>
            <p className='text-[#db5f64] text-sm font-bold font-[Arial]'>$<span className='text-3xl'>17.99</span></p>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4'>
              <div className='flex items-center justify-center bg-[#775fdb] text-white border border-[#999999] rounded-2xl p-4 text-lg font-[Arial] px-2 py-2'>
                NEFX 4K
              </div>
              <div className='flex items-center justify-center bg-white text-[#999999] border border-[#999999] rounded-2xl p-4 text-lg font-[Arial] px-2 py-2'>
                Tidal
              </div>
              <div className='flex items-center justify-center bg-white text-[#999999] border border-[#999999] rounded-2xl p-4 text-lg font-[Arial] px-2 py-2'>
                Deezer Family
              </div>
              <div className='flex items-center justify-center bg-white text-[#999999] border border-[#999999] rounded-2xl p-4 text-lg font-[Arial] px-2 py-2'>
                Crunchyroll
              </div>
              <div className='flex items-center justify-center bg-white text-[#999999] border border-[#999999] rounded-2xl p-4 text-lg font-[Arial] px-2 py-2'>
                Duolingo
              </div>
              <div className='flex items-center justify-center bg-white text-[#999999] border border-[#999999] rounded-2xl p-4 text-lg font-[Arial] px-2 py-2'>
                Spotify
              </div>
              <div className='flex items-center justify-center bg-white text-[#999999] border border-[#999999] rounded-2xl p-4 text-lg font-[Arial] px-2 py-2'>
                Canva
              </div>
            </div>
            <div className='w-full flex items-center justify-center mt-8 text-[#999999] text-center'>
              <select className='appearance-none border border-[#999999] rounded-2xl p-4 text-lg font-[Arial] px-6 py-4 w-full bg-white'>
                <option value="option1" className='px-2 py-2'>Insufficient Credits</option>
                <option value="option2" className='px-2 py-2'>Option 2</option>
              </select>
            </div>
            <p className='text-black font-[Arial] text-lg font-bold mt-8 underline'>Renew existing subscription</p>
            <span className='text-[#999999] mt-4 text-xl'>Total :</span>
            <div className='mt-8 rounded-full px-10 py-4 bg-[#775fdb] text-xl text-white w-3/5 flex items-center justify-center text-center'>
              <button className='flex' onClick={onSubmit}>Redeem</button>
            </div>
          </div>
        </div>
      )}
    </>

  );
};

export default RedeemModal;


function CloseIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-x-lg"
      viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
    </svg>
  );
}