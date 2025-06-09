"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-2xl  h-screen w-screen">
      Todo Application
      <Link href="/signin">SignIn Todo</Link>
      <Link href="/signup">SignUp Todo</Link>
    </div>
  );
}
