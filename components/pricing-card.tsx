import Image from 'next/image'
import { JSX, SVGProps, useState } from 'react'
import { BuyModal } from './buy-modal'
import Link from 'next/link';

export interface PricingCardProps {
  data: {
    name: string;
    price: number;
    image: string;
    _id: string;
    periods: string[];
    priceList: any;
    descriptions: string[];
  }
}

export default function PricingCard({ data }: PricingCardProps) {
  const { name, price, image, _id: id, periods, priceList, descriptions } = data
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const toggleExpand = () => {
    if (descriptions.length > 3) {
      setIsExpanded(!isExpanded)
    }
  }
  const showMoreText = descriptions.length > 3 ? (isExpanded ? 'put away' : 'more') : '';

  return (
    <>
      <div className="border rounded-3xl shadow-lg py-4 px-2 bg-[#edecf9]">
        <div className="relative flex flex-col h-full" data-aos="zoom-out" data-aos-delay="200">
          <div className="">
            {/* <div className="text-center text-2xl font-bold text-black">{name}</div> */}
            <div className='h-1/2 flex justify-center items-center my-2'>
              <Image src={image} alt={name} width={100} height={100} />
            </div>
            <div className="flex justify-center items-center mt-4 text-2xl text-[#CF6569]">
              <span className="font-medium text-[#CF6569]">$</span>
              <span className="leading-7 text-[#CF6569]">{price}&nbsp;</span>
              <span className="text-base font-normal text-[#CF6569]">/month</span>
            </div>
          </div>
          <div className="mt-6 mb-2 space-y-2 bg-[#e1def7] rounded-3xl p-2 text-sm w-full text-center mx-auto">
            <div className="flex items-center space-x-2" >
              <ul className="space-y-3 grow">
                {descriptions.slice(0, isExpanded ? descriptions.length : 3).map((description, index) => (
                  <li key={index} className="flex items-center">
                    <DownIcon />
                    <span className="text-[#785FDB] ml-1">{description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {descriptions.length > 3 && (
          <div className="flex items-center cursor-pointer justify-center" onClick={toggleExpand}>
            <ArrowIcon isExpanded={isExpanded} />
            <span className="text-black">{showMoreText}</span>
          </div>
        )}

        <div className="text-center mt-4">
          <button>
            <a onClick={openModal} className="bg-gradient-to-t bg-[#785FDB] text-white p-2 mb-2 mt-4 rounded-full hover:to-blue-500 w-3/5 shadow-lg group">
              PURCHASE NOW{' '}
              <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                -&gt;
              </span>
            </a>
          </button>
        </div>
        <Link className="underline text-[#785FDB] text-sm mt-4 block font-bold text-center" href={`/products/${id}`} passHref>
          View more details
        </Link>
        <BuyModal priceList={priceList} id={id} periods={periods} isOpen={modalOpen} closeModal={closeModal} image={image} name={name} price={price} />
      </div>
    </>
  )
}

function DownIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#775FDB"
      stroke="none"
    >
      <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM5 3l14 9-14 9V3z" />
    </svg>
  );
}



function ArrowIcon({ isExpanded }: { isExpanded: boolean }) {
  return (
    <svg
      className={`w-6 h-6 transition-transform duration-300 text-[#785FDB]${isExpanded ? 'transform rotate-180 text-[#785FDB]' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
      <path d="M6 15l6 6 6-6" />
    </svg>
  );
}