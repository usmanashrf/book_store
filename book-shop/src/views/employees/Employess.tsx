'use client';
import { useState } from "react";
import CreateEmployee from "./CreateEmployee";
import DeleteEmployee from "./DeleteEmp";
import EmployessList from "./EmployessList";
import SearchEmployee from "./SearchEmp";
import UpdateEmployee from "./UpdateEmployee";

export default function Employess() {
    const [isELOpen, setIsELOpen] = useState(false);
    const [isCEOpen, setIsCEOpen] = useState(false);
    const [isUEOpen, setIsUEOpen] = useState(false);
    const [isSEOpen, setIsSEOpen] = useState(false);
    const [isDEOpen, setIsDEOpen] = useState(false);

    function toggleELAccordion() {
        setIsELOpen((prev) => !prev);
      }
      function toggleCEAccordion() {
        setIsCEOpen((prev) => !prev);
      }
      function toggleUEAccordion() {
        setIsUEOpen((prev) => !prev);
      }
      function toggleSEAccordion() {
        setIsSEOpen((prev) => !prev);
      }
      function toggleDEAccordion() {
        setIsDEOpen((prev) => !prev);
      }
    
  return (
    <div className="px-[150px]">
    
    <div className="border border-gray-200 rounded-md mt-[40px] ">
      <div className="border-b border-gray-200">
        <button
          className="w-full text-left bg-blue-400 px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          onClick={toggleELAccordion}
        >
          Employees Data
        </button>
      </div>
      <div className={`p-4 ${isELOpen ? "" : "hidden"} h-64 overflow-y-scroll`}>
      <EmployessList/>
      </div>
    </div>
       
    <div className="border border-gray-200 rounded-md mt-[40px] ">
      <div className="border-b border-gray-200">
        <button
          className="w-full text-left bg-blue-400 px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          onClick={toggleSEAccordion}
        >
          Search Employees 
        </button>
      </div>
      <div className={`p-4 ${isSEOpen ? "" : "hidden"} h-64 overflow-y-scroll`}>
      <SearchEmployee/>
      </div>
    </div>

    <div className="border border-gray-200 rounded-md mt-[40px] ">
      <div className="border-b border-gray-200">
        <button
          className="w-full text-left bg-blue-400 px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          onClick={toggleCEAccordion}
        >
          Create Employees
        </button>
      </div>
      <div className={`p-4 ${isCEOpen ? "" : "hidden"}`}>
      <CreateEmployee/>
      </div>
    </div>


    <div className="border border-gray-200 rounded-md mt-[40px] ">
      <div className="border-b border-gray-200">
        <button
          className="w-full text-left bg-blue-400 px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          onClick={toggleUEAccordion}
        >
          Update Employees
        </button>
      </div>
      <div className={`p-4 ${isUEOpen ? "" : "hidden"}`}>
      <UpdateEmployee/>
      </div>
    </div>
    
    
    <div className="border border-gray-200 rounded-md mt-[40px] ">
      <div className="border-b border-gray-200">
        <button
          className="w-full text-left bg-blue-400 px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          onClick={toggleDEAccordion}
        >
          Delete Employees
        </button>
      </div>
      <div className={`p-4 ${isDEOpen ? "" : "hidden"}`}>
      <DeleteEmployee/>
      </div>
    </div>
    </div>
  )
}
