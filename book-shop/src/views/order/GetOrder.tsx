'use client';
import React, { useState } from 'react';

interface OrderResponse{
    bookId:string,
    customerName:string
}

export default function GetOrder() {
    const [orderId,setOrderId] = useState("");
    const [orderDetails,setOrderDetails] = useState<OrderResponse>({bookId:"",customerName:""});

    const handleOrderIdInputChange = (event: { target: { value: any; }; }) => {
        const newValue = event.target.value;
        setOrderId(newValue);
        // Store the new value in local storage
      };
      async function getYourOrder(){


     const url = `https://263d168c-ad8f-46cb-9156-90dd66627367.mock.pstmn.io/getorder?order=${orderId}`;
      let response = await fetch(url);

       if(response.ok){
        let result :OrderResponse = await response.json();
        setOrderDetails(result)
        console.log(result);
      }
      }

  return (
    <div>
    <div className="mt-[40px] px-[90px] ">

    <label
    className="block text-grey-darker text-sm font-bold mb-2"
    htmlFor="password"
  >
    Order ID
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
    id="email"
    type="text"
    name="bookId"
    placeholder="Book Id"
    value={orderId}
    onChange={handleOrderIdInputChange}
  />


  <button
    className="bg-blue-500 mt-[20px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={()=>{getYourOrder()}}
  >
    Get Order
  </button>
    <div className='bg-gary-200 mt-[20px]'>
   <p className='bg-gray-300'>Book ID</p> {orderDetails?.bookId} <br/>
   <p className='bg-gray-300'>Customer Name</p> {orderDetails?.customerName}
    </div>
</div>
</div>

  )
}
