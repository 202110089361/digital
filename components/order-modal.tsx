
import { useState } from "react"
import Button from "./ui/button"
import toast from "react-hot-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useTranslations } from 'next-intl';



export interface OrderModalProps {
  isOpen: boolean
  closePurchaseModal: () => void
  price: number
  priceList: any
}

export const PurchaseModal = ({
  isOpen,
  closePurchaseModal,
  price,
  priceList,

}: OrderModalProps) => {
  const queryClient = useQueryClient()
  const [periodOption, setPeriodOption] = useState<string | undefined>(undefined);
  const [currentPrice, setCurrentPrice] = useState<number>(price);
  const [selected, setSelected] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: any) => {
      // Get token if needed for authorization
      const token = await getToken();
      // Perform the API request

      return await axios.post("/orders", data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Uncomment if you need authorization
        },
      });
    },

    onSuccess: () => {
      toast.success('Order created successfully');
      closePurchaseModal(); // Close the modal on success
      queryClient.invalidateQueries({ queryKey: ['my-orders'] }); // Invalidate queries to refresh data
    },
    onError: (error: any) => {
      console.error("Error:", error);
      const errorMessage = error.response?.data?.message || 'An error occurred while creating the order';
      toast.error(errorMessage);
    }
  });

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!periodOption) {
      toast.error('Please try again later.');
      return;
    }

    // Perform actions based on the selected options
    mutate({
      periodOption,
      price: currentPrice,
    });
  };
  const t = useTranslations('OrderModal');
  const submitButton = useTranslations('submitButton');
  return (
    <div className="w-full max-w-4xl p-4">
      <div className="flex justify-between items-center mt-4">
        <div className="space-y-3">
          <div className="md:text-2xl text-xl font-bold">{t('selectPaymentMethodTitle')}</div>
          <div className="text-gray-500 text-sm">
            {t('selectPaymentMethodDescription')}
          </div>
        </div>
        <Button
          onClick={closePurchaseModal}
          className="absolute top-5 right-4 text-gray-500 text-xl focus:outline-none border-none pt-4">
          <span className="w-full text-gray-500">X</span>
        </Button>

      </div>
      <div className="space-y-4 mt-8">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={selected}
            onChange={() => setSelected(!selected)}
            className="hidden"
            id="custom-checkbox"
          />
          <div
            onClick={() => setSelected(!selected)}
            className={`w-5 h-5 border border-gray-300 rounded-sm cursor-pointer flex items-center justify-center
          ${selected ? 'bg-[#765ede] border-[#765ede]' : 'bg-white'}`}
          >
            {selected && <span className="text-white">✓</span>}
          </div>

          <div id="credit-debit" defaultChecked />
          <label htmlFor="credit-debit" className="md:text-xl text-md font-blod">
            {t('creditDebitCard')}
          </label>
          <span className="text-xs text-[#7e73b7]">
            {t('creditDebitCardFee')}
          </span>
        </div>
        <div className="grid xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-1 space-y-2">
          <img src="/payment/Payment1.png" alt="Visa" className="h-10 w-15 mt-2" width="60" height="40"
            style={{ aspectRatio: "60/40", objectFit: "cover" }}
          />
          <img src="/payment/Payment2.png" alt="MasterCard" className="h-10 w-15" width="60" height="40"
            style={{ aspectRatio: "60/40", objectFit: "cover" }}
          />
          <img src="/payment/Payment3.png" alt="American Express" className="h-10 w-15" width="60" height="40"
            style={{ aspectRatio: "60/40", objectFit: "cover" }}
          />
          <img src="/payment/Payment4.png" alt="JCB" className="h-10 w-15" width="60" height="40"
            style={{ aspectRatio: "60/40", objectFit: "cover" }}
          />
          <img src="/payment/Payment5.png" alt="Google Pay" className="h-10 w-15" width="60" height="40"
            style={{ aspectRatio: "60/40", objectFit: "cover" }}
          />
          <img src="/payment/Payment6.png" alt="Apple Pay" className="h-10 w-15" width="60" height="40"
            style={{ aspectRatio: "60/40", objectFit: "cover" }}
          />
          <img src="/payment/Payment7.png" alt="Discover" className="h-10 w-15" width="60" height="40"
            style={{ aspectRatio: "60/40", objectFit: "cover" }}
          />
        </div>
        <div className="border-t pt-4 space-y-4">
          <div className="flex justify-between">
            <span className="md:text-lg text-sm">{t('paymentOptionsLabel')}:</span>
            <span className="md:text-lg text-sm font-medium text-right">{t('paymentOptionsLabel_title')}</span>
          </div>
          <div className="flex justify-between">
            <span className="md:text-lg text-sm">{t('subtotalLabel')}:</span>
            <span className="md:text-lg text-sm font-medium text-right">${currentPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="md:text-lg text-sm">{t('promoCodeLabel')}:</span>
            <span className="md:text-lg text-sm font-medium text-right">-$ 0.00</span>
          </div>
          <div className="flex justify-between">
            <span className="md:text-lg text-sm">{t('paymentFeeLabel')}:</span>
            <span className="md:text-lg text-sm font-medium text-right">${currentPrice}</span>
          </div>
          <div className="border-t mt-4 pt-4 flex justify-between">
            <span className="font-bold">{t('totalLabel')}:</span>
            <span className="text-2xl font-bold text-red-600">${currentPrice}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end md:space-x-4 space-x-2 mt-6">
        <Button variant="outline" className="rounded-full md:px-8 px-2 border border-[#785fdb] " onClick={closePurchaseModal}>
          <span className="text-[#785fdb] md:text-xl text-md">{t('Cancel_title')}</span>
        </Button>
        <button className="bg-[#785edd] text-white rounded-full md:px-8 px-2 md:text-xl text-md" onClick={onSubmit} disabled={isPending}>
          {/* {isPending ? 'Submitting...' : 'PAY NOW'} */}
          {isPending ? submitButton('pending') : submitButton('default')}
          {/* submitButton */}
        </button>
      </div>
    </div>
  )
}

function handleCloseAllModals() {
  throw new Error("Function not implemented.")
}

function getToken() {
  throw new Error("Function not implemented.")
}

