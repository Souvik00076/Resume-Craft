import { FC } from "react";
import { Link } from "react-router-dom";

export const Home: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mx-12">
        <h1 className="mt-12 text-center text-6xl text-primary-light font-bold">
          Resume Craft
        </h1>
        <h1 className="mt-4 text-center text-4xl text-primary-light">
          Get Your developer style resume ready with resume-craft
        </h1>
        <h1 className="mt-4 text-center text-4xl">
          All new platform to build developer style resume in just few
          seconds..Font need to be changed here..
        </h1>
      </div>
      <div className="steps">
        <div>Follow the steps</div>
        <div>
          <div className="step-head">Step 1:</div>
          <div className="step-subhead">Input all your details</div>
          <div className="step-subhead">Select the template you want</div>
          <div className="step-head">:Step 2</div>
          <div className="step-head">Step 3:</div>
          <div className="step-subhead">Your resume is ready to download</div>
          <div className="step-subhead">Click on download</div>
          <div className="step-head">:Step 4</div>
        </div>
      </div>
      <div className="my-12 text-4xl flex flex-col gap-y-8">
        <span className="font-bold">Are you ready?</span>
        <Link to={"/build"} className="link">
          <button
            className="border 
            border-4 
            border-primary-light
            px-6 
            py-2 
            rounded-xl 
            hover:text-white-smoke 
            hover:bg-primary-light
            transition-hover 
            delay-300 
            ease-in-out
            text-primary-light
            cursor-pointer
            "
          >
            Get started
          </button>
        </Link>
      </div>
      <div className="w-full h-[200px] bg-primary-light px-6 py-6">
        <h1 className="text-center text-white-smoke font-bold text-4xl">
          Get in Touch. Font need to change here.Also add icons here
        </h1>
      </div>
    </div>
  );
};
