'use client';
import { useState } from "react";
import GetOrder from "./GetOrder";
import PlaceOrder from "./PlaceOrder";

interface AccordionProps {
    title: string;
    content: string;
  }
  
export default function Order() {

    const [isPOOpen, setIsPOOpen] = useState(false);
    const [isGOOpen, setIsGOOpen] = useState(false);

  function togglePOAccordion() {
    setIsPOOpen((prev) => !prev);
  }
  
  function toggleGOAccordion() {
    setIsGOOpen((prev) => !prev);
  }
  return (
    <div className=" px-[90px] ">

<div className="border border-gray-200 rounded-md mt-[40px] ">
      <div className="border-b border-gray-200">
        <button
          className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          onClick={togglePOAccordion}
        >
          Place Order
        </button>
      </div>
      <div className={`p-4 ${isPOOpen ? "" : "hidden"}`}>
        <PlaceOrder/>
      </div>
    </div>

    <div className="border border-gray-200 rounded-md mt-[40px] ">
      <div className="border-b border-gray-200">
        <button
          className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          onClick={toggleGOAccordion}
        >
          Get Order
        </button>
      </div>
      <div className={`p-4 ${isGOOpen ? "" : "hidden"}`}>
        <GetOrder/>
      </div>
    </div>


    </div>
  )
}
