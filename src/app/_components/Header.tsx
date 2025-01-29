"use client";

import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, useUser, UserButton } from "@clerk/nextjs";

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="flex justify-between items-center p-6 md:px-20 shadow-sm">
      <Image src={"/logo.png"} alt="logo" width={100} height={100} />

      <div className="hidden md:flex border p-2 rounded-lg bg-gray-200 w-96">
        <input type="text" className="bg-transparent w-full outline-none" />
        <Search />
      </div>

      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-5">
          <SignInButton mode="modal">
            <Button variant={"outline"}>Log In</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button>Sign Up</Button>
          </SignUpButton>
        </div>
      )}
    </div>
  );
};

export default Header;
