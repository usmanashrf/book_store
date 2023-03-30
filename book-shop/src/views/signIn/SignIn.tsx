'use client';

import { useState, useEffect } from 'react';

function SignIn() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Retrieve the value from local storage if it exists
    const storedValue = localStorage.getItem("accessToken");
    if (storedValue) {
      setToken(storedValue);
    }
  }, []);

  const handleUserNameInputChange = (event: { target: { value: any; }; }) => {
    const newValue = event.target.value;
    setUserName(newValue);
  };
  const handleEmailInputChange = (event: { target: { value: any; }; }) => {
    const newValue = event.target.value;
    setEmail(newValue);
    // Store the new value in local storage
  };

  async function getToken(){
    let reqt = {
    username: userName,
    email: email,
  };
  const url = "https://263d168c-ad8f-46cb-9156-90dd66627367.mock.pstmn.io/login";
  
  let response = await fetch(url,{
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(reqt)
   });

   if(response.ok){
    let result = await response.json();
    let token :string = result?.accessToken;
    localStorage.setItem("accessToken",token);

    console.log(result.accessToken);
    return result.accessToken;
  }
  }

  return (
    <div className="mt-[40px] px-[90px] ">
      <label
        className="block text-grey-darker text-sm font-bold mb-2"
        htmlFor="password"
      >
        User Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        id="username"
        type="text"
        placeholder="Username"
        name="username"
        value={userName}
        onChange={handleUserNameInputChange}
      />
      <label
        className="block text-grey-darker text-sm font-bold mb-2"
        htmlFor="password"
      >
        Email
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
        id="email"
        type="text"
        name="email"
        placeholder="email"
        value={email}
        onChange={handleEmailInputChange}
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={()=>{getToken()}}
      >
        Sign In
      </button>
    </div>
  );
}

export default SignIn;