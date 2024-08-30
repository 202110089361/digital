
import { useState } from "react"
import Button from "./ui/button"
import toast from "react-hot-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export interface SubscriptionModalProps {
  isOpen: boolean
  closeModal2: () => void

}

export const SubscriptionModal = ({
  isOpen,
  closeModal2,


}: SubscriptionModalProps) => {
  const queryClient = useQueryClient()
  const [periodOption, setPeriodOption] = useState<string | undefined>(undefined);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!periodOption) {
      toast.error('Please try again later.');
      return;
    }
  };

  return (
    <div className="w-full max-w-4xl p-4">
      <div className="flex justify-between items-center mt-4">
        <div className="space-y-3">
          <div className="text-sm sm:text-xl md:text-2xl  font-bold">Redeem Subscription</div>
          <div className="flex flex-row items-center space-x-2">
            <p className='text-[#db5f64] text-sm font-bold font-[Arial'>$<span className='text-3xl'>17.99</span></p>
            <p>available</p>
          </div>
        </div>
        <Button
          onClick={closeModal2}
          className="absolute top-5 right-4 text-gray-500 text-xl focus:outline-none border-none pt-4">
          <span className="w-full text-gray-500">X</span>
        </Button>
      </div>

      <div className="flex flex-col space-y-4 mt-6">
        {/* <div className="relative">
          <input
            className="appearance-none border border-[#999999] rounded-2xl p-4 text-lg font-[Arial] px-6 py-4 w-full bg-white placeholder-black placeholder-opacity-100 focus:placeholder-opacity-0"
            placeholder="SkyShowtime (ID:1386184alijah8afaml.top)"
          />
        </div> */}
        <div className="relative">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => e.target.placeholder = ''}
            onBlur={(e) => {
              if (e.target.value === '') {
                e.target.placeholder = '';
              }
            }}
            placeholder=""
            className="appearance-none border border-[#999999] rounded-2xl p-4 text-lg font-[Arial] px-6 py-4 w-full bg-white"
            style={{ color: name ? 'black' : 'inherit' }}
          />
          {!name && (
            <div className="absolute inset-y-0 left-0 flex flex-col md:flex-row items-center pl-6 pointer-events-none">
              <span className="text-xs md:text-xl text-black">SkyShowtime</span>
              <span className="text-xs md:text-xl text-gray-400">(ID:1234567abcdefg)</span>
            </div>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={(e) => e.target.placeholder = ''}
            onBlur={(e) => {
              if (e.target.value === '') {
                e.target.placeholder = '';
              }
            }}
            placeholder=""
            className="appearance-none border border-[#999999] rounded-2xl p-4 text-lg font-[Arial] px-6 py-4 w-full bg-white"
            style={{ color: email ? 'black' : 'inherit' }}
          />
          {!email && (
            <div className="absolute inset-y-0 left-0 flex flex-col md:flex-row items-center pl-6 pointer-events-none">
              <span className="text-xs md:text-xl text-black">MAX</span>
              <span className="text-xs md:text-xl text-gray-400">(iD:1386144rhyee7@ByteBro.com)</span>
            </div>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onFocus={(e) => e.target.placeholder = ''}
            onBlur={(e) => {
              if (e.target.value === '') {
                e.target.placeholder = '';
              }
            }}
            placeholder=""
            className="appearance-none border border-[#999999] rounded-2xl p-4 text-lg font-[Arial] px-6 py-4 w-full bg-white"
            style={{ color: address ? 'black' : 'inherit' }}
          />
          {!address && (
            <div className="absolute inset-y-0 left-0 flex flex-col md:flex-row items-center pl-6 pointer-events-none">
              <span className="text-xs md:text-xl text-black">Paramount+</span>
              <span className="text-xs md:text-xl text-gray-400 ml-2">(iD:1386144rhyee7@ByteBro.com)</span>
            </div>
          )}
        </div>


        {/* <div className="relative">
          <input
            className="appearance-none border border-[#999999] rounded-2xl p-4 text-lg font-[Arial] px-6 py-4 w-full bg-white" />
          <div className="absolute inset-y-0 left-0 pl-6 flex flex-col md:flex-row items-center pointer-events-none">
            <span className="text-black font-bold">MAX</span>
            <span className="text-sm md:text-xl text-gray-400 ml-2">(iD:1386144rhyee7@ByteBro.com)</span>
          </div>
        </div>
        <div className="relative">
          <input
            className="appearance-none border border-[#999999] rounded-2xl p-4 text-lg font-[Arial] px-6 py-4 w-full bg-white" />
          <div className="absolute inset-y-0 left-0 pl-6 flex flex-col md:flex-row items-center pointer-events-none">
            <span className="text-black font-bold">Paramount+</span>
            <span className="text-sm md:text-xl text-gray-400 ml-2">(iD:1386144rhyee7@ByteBro.com)</span>
          </div>
        </div> */}
        <div className='w-full flex items-center justify-center mt-8 text-[#999999] text-center'>
          <select className='appearance-none border border-[#999999] rounded-2xl p-4 text-lg font-[Arial] px-6 py-4 w-full bg-white'>
            <option value="option1" className='px-2 py-2'>Insuffcient Credits</option>
            <option value="option2" className='px-2 py-2'>Option 2</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <p className='text-black font-[Arial] text-lg font-bold mt-8 underline'>Renew existing subscription</p>
        <span className='text-[#999999] mt-4 text-xl'>Total :</span>
      </div>
      <div className='flex justify-center'>
        <div className='mt-8 rounded-full px-10 py-4 bg-[#775fdb] text-xl text-white w-3/5 flex items-center justify-center text-center'>
          <button className='flex justify-center' onClick={onSubmit}>Redeem</button>
        </div>
      </div>
    </div>
  )
}

