import Link from "next/link";

export default function MenuItems({labelName, itemLink}:any) {
  return (
    <div className="text-white text-xl hover:text-2xl hover:text-blue-500"><Link href={itemLink}> {labelName}</Link></div>
  )
}
