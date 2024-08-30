"use client"
import React from 'react';
import SubscriptionItem from '@/components/SubscriptionItem';
// import { useAuth } from '@clerk/nextjs';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const subscriptions = [
  { id: 1, title: 'Start time', price: '$9.99', description: 'End time', Beginning: '2023-1-9  05:25:27', endtime: '2025-2-18 08:14:25', user: 'mike', images: 'https://img2.baidu.com/it/u=2773725431,893881349&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=1019' },
  { id: 2, title: 'Start time', price: '$452.99', description: 'End time', Beginning: '2023-2-9  05:25:27', endtime: '2025-1-18 08:14:25', user: 'James', images: 'https://img0.baidu.com/it/u=2228046806,444974139&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500' },
  { id: 3, title: 'Start time', price: '$30.99', description: 'End time', Beginning: '2023-3-9  05:25:27', endtime: '2025-6-18 08:14:25', user: 'Robert', images: 'https://img0.baidu.com/it/u=2228046806,444974139&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500' },
  { id: 4, title: 'Start time', price: '$198.99', description: 'End time', Beginning: '2023-5-9  05:25:27', endtime: '2025-3-18 08:14:25', user: 'David', images: 'https://img1.baidu.com/it/u=169007009,4133201514&fm=253&fmt=auto&app=120&f=JPEG?w=607&h=405' },
  { id: 5, title: 'Start time', price: '$22.99', description: 'End time', Beginning: '2023-6-9  05:25:27', endtime: '2025-4-18 08:14:25', user: 'Barbara', images: 'https://img0.baidu.com/it/u=2113342082,2212444945&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500' },
  { id: 6, title: 'Start time', price: '$115.99', description: 'End time', Beginning: '2023-8-9  05:25:27', endtime: '2025-7-18 08:14:25', user: 'Jennifer', images: 'https://img2.baidu.com/it/u=107142614,688088320&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=750' },
];

const Orders = () => {
  // const { getToken } = useAuth()

  const { data, isLoading, error } = useQuery({
    queryKey: ['my-orders'], 
    queryFn: async () => {
      // const token = await getToken()
      return axios.get('/orders/my', {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}`,
        },
      })
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

  console.log(data)

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-15×1 mx-auto p-8 bg-white  rounded-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">Subscribe to</h1>
        <div className="grid grid-row-1 md:grid-row-3 gap-8">
          {subscriptions.map(subscription => (
            <SubscriptionItem key={subscription.id} {...subscription} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
