'use client';

import { useState, useEffect } from 'react';

export default function PlaceOrder() {

    const [bookId, setBookId] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [token,setToken] = useState("");
    const [orderId,setOrderId] = useState("");
    
    useEffect(() => {
        // Retrieve the value from local storage if it exists
        const storedValue = localStorage.getItem("accessToken");
        if (storedValue) {
          setToken(storedValue);
        }
      }, []);

    const handleCustomerNameInputChange = (event: { target: { value: any; }; }) => {
        const newValue = event.target.value;
        setCustomerName(newValue);
      };
      const handleBookIdInputChange = (event: { target: { value: any; }; }) => {
        const newValue = event.target.value;
        setBookId(newValue);
        // Store the new value in local storage
      };
    
      async function placeYourOrder(){
        let reqt = {
        bookId: bookId,
        customerName: customerName,
        
      };

     const url = "https://263d168c-ad8f-46cb-9156-90dd66627367.mock.pstmn.io/placeorder"; 
      let response = await fetch(url,{
        method: 'post',
        headers: {
            'Content-Type':'application/json',
           // 'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(reqt)
       });
    
       if(response.ok){
        let result = await response.json();
        
        console.log(result);
        setOrderId(result.orderId);
        return result.orderId;
      }
      }
    

  return (
    <div>
        <div className="mt-[40px] px-[90px] ">

        <label
        className="block text-grey-darker text-sm font-bold mb-2"
        htmlFor="password"
      >
        Book ID
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
        id="email"
        type="text"
        name="bookId"
        placeholder="Book Id"
        value={bookId}
        onChange={handleBookIdInputChange}
      />

      <label
        className="block text-grey-darker text-sm font-bold mb-2"
      >
        User Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        id="username"
        type="text"
        placeholder="Customer Name"
        name="customerName"
        value={customerName}
        onChange={handleCustomerNameInputChange}
      />
     
      <button
        className="bg-blue-500 mt-[20px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={()=>{placeYourOrder()}}
      >
        Place Order
      </button>
      {
        (orderId != null) ?<p className=' bg-gray-200 ml-[200px]'>Order ID {orderId}</p>: <></>
      }
      
    </div>
    </div>
  )
}
