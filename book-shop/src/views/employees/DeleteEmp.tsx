'use client';
import EmpDelete from "@/models/EmpDeleteResponse";
import SearchEmp from "@/models/SearchEmpModel";
import { useEffect, useState } from "react";

export default function DeleteEmployee() {
    const [empID, setEmpID] = useState("");
    const [employees, setEmployees] = useState<EmpDelete>();


   
    
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
Delete
</button>

</div>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
  <thead className="bg-gray-50">
    <tr>
      <th  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Message
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">

    {
        
            <tr key={employees?.message}>
            <td className="px-6 py-4 whitespace-nowrap">
             {employees?.message}
            </td>
          </tr>
        
    }
  </tbody>
        </table>
    </div>
  )
}
