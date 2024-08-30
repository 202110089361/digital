//"use client"
import React, { useState } from "react"
import Image from "next/image"
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
// import { useAuth } from "@clerk/nextjs";
import { PurchaseModal } from "./order-modal";
import { useTranslations } from 'next-intl';



export interface BuyModalProps {
  isOpen: boolean
  closeModal: () => void
  name: string
  price: number
  image: string
  id: string
  periods: string[]
  priceList: any
}
export const BuyModal = ({
  isOpen,
  closeModal,
  name,
  image,
  price,
  id,
  periods,
  priceList
}: BuyModalProps) => {
  console.log("periods", periods)
  const queryClient = useQueryClient()
  // const { getToken } = useAuth()
  const [periodOption, setPeriodOption] = useState<string | undefined>(undefined);

  const [currentPrice, setCurrentPrice] = useState<number>(price);



  const [isPending2, setIsPending2] = useState(false);  // 提交状态
  const [showPaymentPage, setShowPaymentPage] = useState(false);  // 控制页面显示


  const handleCloseAllModals = () => {
    setShowPaymentPage(false);
    closeModal();
  };



  const periodsList = priceList.filter((item: any) => item.isOnline).map(({ months }: any) => ({
    label: `${months} Month${months > 1 ? 's' : ''}`,
    value: months
  }));
  const onPeriodOptionChange = (value: string | number) => {
    const stringValue = String(value); // Convert to string if needed
    console.log('Period option selected', stringValue);
    setPeriodOption(stringValue);
    const selectedPrice = priceList.find((item: any) => item.months === Number(stringValue))?.price;
    if (selectedPrice) {
      setCurrentPrice(selectedPrice);
    }
  };


  // const onPeriodOptionChange = (e: { target: { value: React.SetStateAction<string | undefined>; }; }) => {
  //   console.log('Period option selected', e.target.value);
  //   setPeriodOption(e.target.value);
  //   const selectedPrice = priceList.find((item: any) => item.months === Number(e.target.value))?.price;
  //   if (selectedPrice) {
  //     setCurrentPrice(selectedPrice);
  //   }
  // }

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: any) => {
      // const token = await getToken()
      return await axios.post("/orders", data, {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}`,
        },
      })
    },
    onSuccess: () => {
      // Invalidate and refetch
      toast.success('Order created successfully')
      handleCloseAllModals();
      queryClient.invalidateQueries({ queryKey: ['my-orders'] })
    },
    onError: (error: any) => {
      console.log("error", error)
      const errorMessage = error.response?.data?.message || 'An error occurred while creating the order';
      toast.error(errorMessage);
    }
  })

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!periodOption) {
      toast.error('Please select a period option.');
      return;
    }


    setIsPending2(true);


    console.log('Period option:', periodOption);
    // Perform actions based on the options selected
    // ...
    mutate({
      id,
      periodOption,
    })
    setShowPaymentPage(true);

  }
  const BuyModal = useTranslations('buyModel');


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
                <PurchaseModal closePurchaseModal={handleCloseAllModals} isOpen={showPaymentPage && isOpen} price={currentPrice}
                  priceList={priceList} />
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
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-20 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;

            <div className="inline-block align-bottom bg-white rounded-3xl p-2 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                <div className="">
                  <div className="mt-3 sm:mt-0 sm:text-left">
                    <button
                      onClick={closeModal}
                      type="button"
                      className="m-2 absolute top-0 right-0 inline-flex items-center justify-center w-10 h-8 font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                      X
                    </button>

                    <div className="text-lg font-medium text-gray-900">
                      <div className="flex items-start">
                        <div className="">
                          <Image
                            src={image}
                            alt={name}
                            width={220}
                            height={220}
                            className="rounded-3xl object-cover"
                          />
                        </div>
                        <div className="ml-6 flex flex-col justify-center">
                          <div className="text-3xl font-semibold mb-2">{name}</div>
                          <div className="mb-2 text-gray-400">{BuyModal('accountDescription')}</div>
                          <div className="font-uncut-sans flex items-center">
                            <span className="font-medium leading-7 text-red-500 mt-2">
                              $
                            </span>
                            <span className="text-3xl text-red-500">
                              {currentPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="mt-4 mb-4" />

                    <div className="space-y-4 mb-8">
                      <div className="space-x-4">
                        <div className="text-2xl leading-6 font-bold text-gray-900 mb-3 mt-3">
                          <span className="flex items-center ">
                            {BuyModal('purchaseMonth')}
                          </span>
                        </div>

                        <div className="flex space-x-4">
                          {periodsList.map((option: any) => (
                            <button
                              key={option.value}
                              className={`py-2 px-4 rounded-2xl border border-gray-500  ${Number(periodOption) === option.value
                                ? 'bg-[#785FDB] text-white'
                                : 'bg-white text-gray-400'
                                }`}
                              onClick={() => onPeriodOptionChange(option.value)}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <hr className="mt-4 mb-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-6">
                <div className="flex items-center space-x-2 ">
                  <input
                    id="auto-renewal"
                    type="checkbox"
                    className="w-4 h-4 border-gray-700 rounded-md"
                  />
                  <label htmlFor="auto-renewal" className="text-sm font-medium leading-none text-gray-900">
                    {BuyModal('autoRenewalLabel')}
                  </label>
                  <div className="relative group">
                    <InfoIcon className="w-4 h-4 text-muted-foreground text-gray-500" />
                    <div className="w-[300px] absolute top-full left-0 mt-2 hidden group-hover:block text-white bg-[#2f2c36] border border-gray-900 rounded-3xl p-4 text-xs">
                      {BuyModal('autoRenewalInfo')}
                    </div>
                  </div>


                </div>
                <p className="text-xs text-muted-foreground text-gray-500 mt-2">
                  {BuyModal('autoRenewalPolicy')}
                </p>
                <a href="#" className="text-blue-500 underline">
                  {BuyModal('promoCode')}
                </a>
                <div className="flex justify-end mt-4">
                  <button
                    // onClick={onSubmit}
                    disabled={isPending}
                    type="button"
                    className="bg-[#785FDB] text-white px-4 py-2 rounded-full "
                  >
                    {isPending ? 'Submitting...' : 'Go to payment'}
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function InfoIcon(props: any) {
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
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}