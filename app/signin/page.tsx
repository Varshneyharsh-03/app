"use client";
import React, { useState } from "react";

const page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col items-center justify-center text-2xl h-screen w-screen gap-5 bg-black">
      <div className="flex flex-col items-center justify-center text-2xl bg-green-200 gap-5 w-[500px] h-[500px] rounded-lg">
        <h1 className="text-4xl"> Sign In Page</h1>
        <input
          type="text"
          placeholder="username"
          className="border-2 border-gray-300 rounded-md p-2"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          className="border-2 border-gray-300 rounded-md p-2"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={async () => {
            await axios.post("http://localhost:3000/api/user/signin", {
              username,
              password,
            });
          }}
        >
          Signin
        </button>
      </div>
    </div>
  );
};

export default page;
