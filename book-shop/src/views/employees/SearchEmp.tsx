'use client';
import SearchEmp from "@/models/SearchEmpModel";
import { useEffect, useState } from "react";

export default function SearchEmployee() {
    const [empID, setEmpID] = useState("");
    const [employees, setEmployees] = useState<SearchEmp>();


   
    
  return (
    <div>
        <div>
        <div className="mt-[40px] px-[90px] ">
      
        <label
className="block text-grey-darker text-sm font-bold mb-2"
htmlFor="password"
>
ID
</label>
<input
className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
id="email"
type="text"
name="id"
placeholder="Employee ID"
value={empID}
onChange={(event) => setEmpID(event.target.value)}
/>

<button
className="bg-blue-500 mt-[20px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
onClick={()=>{}}
>
Search
</button>

</div>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
  <thead className="bg-gray-50">
    <tr>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        ID
      </th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Name
      </th>
      <th  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Salary
      </th>
      <th  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Age
      </th>
      <th  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Status
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">

    {
        
            <tr key={employees?.data?.id}>
            <td className="px-6 py-4 whitespace-nowrap">
             {employees?.data?.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
             {employees?.data?.employee_name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
            {employees?.data?.employee_salary}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
            {employees?.data?.employee_age}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
            {employees?.status}
            </td>
          </tr>
        
    }
  </tbody>
        </table>
    </div>
  )
}
