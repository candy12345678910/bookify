import React from "react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

function Register() {
  return (
    <>
      <div className="bg-darkBackGround min-h-screen flex flex-col items-center justify-center p-5">
      <h1 className="text-red-500">Register</h1>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Input id="email" type="email" placeholder="Enter email" />
          <Input id="password" type="password" placeholder="Enter password" />
          <Button>Submit</Button>
        </div>
      </div>
    </>
  );
}

export default Register;
