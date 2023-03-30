'use client';

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function SignInButton() {
    const [buttonName, setButtonName] = useState("");
    
  useEffect(() => {
    // Retrieve the value from local storage if it exists
    const storedValue = localStorage.getItem("accessToken");

    if (storedValue != null) {
        setButtonName("Log out");
    }
    else{
        setButtonName("Log in");
    }
  }, []);
  return (
    <div className="bg-blue-500 py-1 px-2 text-white rounded-md hover:bg-blue-700">
    <Link href={"/signIn"}> {buttonName} </Link>
</div>
  )
}
