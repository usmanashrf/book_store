'use client';
import EmployeeModel from "@/models/EmployeeModel";
import { useEffect, useState } from "react";

export default function EmployessList() {
 
    const [employees, setEmployees] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  
  return (
    <div className="bg-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
  <thead className="bg-gray-50">
    <tr>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        ID
      </th>
      <th  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Name
      </th>
      <th  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Salary
      </th>
      <th  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Age
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">

    {
        employees.map((emp:any)=>(
            <tr key={emp.id}>
            <td className="px-6 py-4 whitespace-nowrap">
             {emp.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
            {emp.employee_name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
            {emp.employee_salary}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
            {emp.employee_age}
            </td>
          </tr>
        ))
    }
  </tbody>
</table>
    </div>
  )
}
