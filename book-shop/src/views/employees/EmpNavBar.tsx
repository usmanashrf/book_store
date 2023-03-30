import Link from "next/link";


export default function EmpNavBar() {
  return (
    <div className="flex-col mr-auto w-32 px-4 min-h-screen bg-gray-800 space-y-7 pt-8">
        <div className="hover:text-blue-500 text-white border-b-2">
            <Link href="/empolyees/employeeData">
            All Data
            </Link>
        </div>
        <div className="hover:text-blue-500 text-white border-b-2">
            <Link href="/">
            Create 
            </Link>
        </div>
        <div className="hover:text-blue-500 text-white border-b-2">
            <Link href="/">
            Update 
            </Link>
        </div>
        <div className="hover:text-blue-500 text-white border-b-2">
            <Link href="/">
            Delete 
            </Link>
        </div>
    </div>
  )
}
