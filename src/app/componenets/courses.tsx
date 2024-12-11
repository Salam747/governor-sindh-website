import Image from "next/image";
import React from "react";

const Courses = () => {
  return (
    <div id="courses" className="flex flex-col ml-6 md:ml-12 lg:ml-24 mt-8 md:mt-16 lg:mt-24 space-y-8">
      <h1 className="text-2xl font-extrabold text-[32px] md:text-[36px] lg:text-[42px] text-blue-800">
        Core Courses
      </h1>

      <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 justify-start items-start">
        <div className="flex flex-col items-center rounded-lg shadow-xl shadow-black/45 space-y-4">
          <Image
            className="rounded-lg"
            src="/assets/course1.jpg"
            alt="ad5"
            height={260}
            width={260}
          />
          <h1 className="w-48 h-16 bg-white font-bold mt-4 p-2 text-center rounded-lg ">
            Programming Fundamentals
          </h1>
        </div>

        <div className="flex flex-col items-center rounded-lg shadow-xl shadow-black/45 space-y-4">
          <Image
            className="rounded-lg"
            src="/assets/course2.jpg"
            alt="ad6"
            height={260}
            width={260}
          />
          <h1 className="w-48 h-16 bg-white font-bold mt-4 p-2 text-center rounded-lg ">
            Web 2 Using NextJs
          </h1>
        </div>

        <div className="flex flex-col items-center rounded-lg shadow-xl shadow-black/45 space-y-4">
          <Image
            className="rounded-lg"
            src="/assets/course3.jpg"
            alt="ad6"
            height={260}
            width={260}
          />
          <h1 className="w-48 h-16 bg-white font-bold mt-4 p-2 text-center rounded-lg ">
            Earn as You Learn
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Courses;
