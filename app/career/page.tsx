"use client";
import { ChangeEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/input";
import { cn } from "@/utils/cn";

export function  SignupFormDemo() {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [mobile,setMobile] = useState('');
  const [resume,setResume] = useState<File | null>(null);
  const [role,setRole] = useState('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstName',firstName);
    formData.append('lastName',lastName);
    formData.append('email',email);
    formData.append('role',role);
    formData.append('mobile',mobile);
    if(resume) formData.append('resume',resume);
    const response = await fetch('http://localhost:4500/api/save-details',{
      method: 'POST',
      body: formData
    });
    if(response.ok) console.log("great job");
    else console.log("we fucked up");
  };
  const handleResumeSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  }
  return (
    <div style={{
      background:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
   boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
    }} className="max-w-md scale-90 w-full mt-16 mx-auto rounded-none md:rounded-xl p-4 md:p-8 shadow-input bg-white dark:bg-transparent border">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to OK7
      </h2>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input value={firstName} onChange={(e) => {setFirstName(e.target.value)}} id="firstname" placeholder="John" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Doe" type="text" value={lastName} onChange={(e)=> {setLastName(e.target.value)}} />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" value={email} onChange={(e) => {
            setEmail(e.target.value)
          }} placeholder="john.dev@gmail.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="mobile">Mobile</Label>
          <Input value={mobile} onChange={(e) => {setMobile(e.target.value)}} id="mobile" placeholder="+91 999888222" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Role">Role</Label>
          <Input
            id="role"
            value={role}
            onChange={(e) => {
              setRole(e.target.value)
            }}
            placeholder="Role"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8 cursor-pointer">
          <Label htmlFor="Resume">Resume</Label>
          <Input
            id="resume"
            placeholder="Resume"
            type="file"
            onChange={handleResumeSubmit}
            accept=".pdf"           
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send Details &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

import React, { useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export default function SparklesPreview() {
  return (
    <div className="h-[100vh] relative w-[100vw] bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <SignupFormDemo />
    </div>
  );
}
