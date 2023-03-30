import MenuItems from "@/components/MenuItems";
import Link from "next/link";
import SignInButton from "./SignInButton";

export default function NavBar() {
  
  return (
    <div className="flex bg-gray-800 opacity-90 justify-between px-20 py-5">
        <div className=" rounded-md px-2 py-1"><span className="text-blue-500 text-3xl font-extrabold">Book</span> <span className="text-xl font-semibold text-white">Store</span></div>
        <div className="flex space-x-16  my-2">
            <MenuItems labelName="Home" itemLink="/"/>
            <MenuItems labelName="Stock" itemLink="/stock"/>
            <MenuItems labelName="Orders" itemLink="/orders"/>
            <MenuItems labelName="Employee" itemLink="/empolyees"/>
            </div>
         <div className="flex space-x-20 my-2">
          <SignInButton/>
         </div>
    </div>
  )
}
