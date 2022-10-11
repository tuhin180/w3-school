import React from "react";
import { ArrowRight } from "react-hero-icon/solid";
import { Link } from "react-router-dom";

const subject = ({ subject }) => {
  const { id, name, logo } = subject;
  return (
    <div className="">
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src={logo}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide text-center">
              {name}
            </h2>
          </div>
          <Link
            to={`/quiz/${id}`}
            type="button"
            className="flex gap-2 items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
          >
            Start Practice
            <ArrowRight className="mt-1"></ArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default subject;
