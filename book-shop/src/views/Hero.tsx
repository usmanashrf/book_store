"use client";

import HeroCharater from "@/components/HeroCharater";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex bg-slate-800 text-white py-14">
        <div className="basis-1/2  font-bold ml-24 mt-20">
         <span className="text-9xl"> Books</span> <br/>
         <div className="mt-[20px] text-2xl text-blue-500">take you on a journey  you&apos;ll never forget.</div>
         <div className="flex-col space-y-10 items-center">
         <div className="text-xl ">It&apos;s the ultimate adventure</div>
         <div className="bg-blue-500 px-2 py-1 rounded-md hover:bg-transparent
          hover:text-blue-500 border border-blue-500 w-32 h-10 text-center"><Link href={"/"}>Check more</Link></div>
         </div>
        </div>
        <div className="basis-1/2">
        <HeroCharater/>
        </div>
    </div>
   ) 
 }
