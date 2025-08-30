"use client";

import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";

const steps = [
  {
    step: 1,
    title: "Step One",
    description: "Add Travelers",
  },
  {
    step: 2,
    title: "Step Two",
    description: "Choose Options",
  },
  {
    step: 3,
    title: "Step Three",
    description: "Review",
  },
  {
    step: 4,
    title: "Step Four",
    description: "Pay",
  },
];

function Component() {
  return (
    <div className="space-y-8 text-center md:min-w-[850px] min-w-screen">
      <Stepper defaultValue={1}>
        {steps.map(({ step, title, description }) => (
          <StepperItem
            key={step}
            step={step}
            className="max-md:items-start [&:not(:last-child)]:flex-1"
          >
            <StepperTrigger className="max-md:flex-col">
              <StepperIndicator />
              <div className="text-center md:text-left">
                <StepperTitle >{description}</StepperTitle>
              </div>
            </StepperTrigger>
            {step < steps.length && (
              <StepperSeparator className="max-md:mt-3.5 md:mx-4" />
            )}
          </StepperItem>
        ))}
      </Stepper>
    </div>
  );
}

export { Component };
export default function Navbar() {
  return (
    <div className="flex flex-col items-center gap-2">
      <nav className="w-full text-black md:px-8  border-b border-[#8080806f]">
        <div className="w-full  flex justify-between items-center px-8 py-2 bf-">
          <Image
            src="/logo-1.png"
            alt="My Logo"
            width={250}
            height={150}
            priority
          />
          <div className="relative flex flex-row gap-4 items-center">
            <div className="flex flex-row gap-3 text-sm items-center">
              <div className="flex items-center gap-2">
                <Image
                  src={"/user.png"}
                  alt="avatar"
                  width={38}
                  height={38}
                  className="rounded-xl"
                />
                <div className="flex flex-col">
                  <span>Amr dajani</span>
                  <span className="text-xs text-gray-500">
                    amr.dajani@me.com
                  </span>
                </div>
                <div className="px-2">
                  <IoIosArrowDown className="cursor-pointer opacity-60 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-center w-full h-10 text-xl font-semibold bg-[#39a2d692]">
        Dr. Mike Alexander- Paris and Normandy Cruise, October 7 to 16, 2025
      </div>
      <div className="w-fit">
        <Component></Component>
      </div>
    </div>
  );
}
