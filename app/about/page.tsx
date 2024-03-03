"use client";
import React from "react";
import { StickyScroll } from "@/components//ui/sticky-scroll-reveal";
import Image from "next/image";
import { deflate } from "zlib";
 
const content = [
  {
    title: "Mr. Neil Sharma",
    description:
      "A visionary Founder & Tech Lead mastering Python, AI & ML, and Cloud technologies, crafting transformative solutions with unparalleled expertise and innovation.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white text-center">
        Founder & Tech-Lead
      </div>
    ),
  },
  {
    title: "Mr. Arjun Srivastava",
    description:
      "Encounter a pioneering Co-founder & Tech Lead specialized in Blockchain, Web3, and JavaScript, architecting groundbreaking solutions at the forefront of technological evolution.",
    content: (
      <div className="h-full w-full text-center flex items-center justify-center text-white">
        Co-founder & Tech-Lead
      </div>
    ),
  },
  {
    title: "Mr. Ram Chaturvedi",
    description:
      "Step into the realm of innovation with Mr. Ram Chaturvedi, a dynamic Project Manager excelling in MERN/MEAN, PHP, and DevOps, orchestrating seamless project execution with strategic prowess and technical finesse.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white text-center">
        Project Manager
      </div>
    ),
  },
  {
    title: "Mr. Shaurya Shrivastav",
    description:
      "Dive into the forefront of innovation with our exceptional Creative Lead & Business Developer, revolutionizing industries through mastery in UI/UX, Graphic Design, and Sales. Experience visionary creativity and strategic acumen driving unparalleled growth.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white text-center">
        Creative Lead <br /> & <br /> Business Developer
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className=" w-[100vw] h-[100vh] bg-black">
    <div className="p-5">
      <StickyScroll contentClassName="mt-16" content={content} />
    </div>
    </div>
  );
}