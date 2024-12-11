import Image from "next/image";
import React from "react";

const AdvanceCourses = () => {
  return (

    <div id="courses" className="flex flex-col ml-24 mt-24 space-y-8">
      <h1 className="text-2xl font-extrabold text-[42px] text-blue-800">Advance Courses </h1>

      <div className="flex flex-wrap gap-8 justify-start items-start">
        <div className="flex flex-col items-center rounded-lg shadow-xl shadow-black/45 space-y-4">
          <Image
            className="rounded-lg"
            src="/assets/ad1.jpg"
            alt="ad1"
            height={260}
            width={260}
          />
          <h1 className="w-48 h-16 bg-white font-bold mt-4 p-2 text-center rounded-lg ">
            Artificial Intelligence
          </h1>
        </div>

        <div className="flex flex-col items-center rounded-lg shadow-xl shadow-black/45 space-y-4">
          <Image
            className="rounded-lg"
            src="/assets/ad2.jpg"
            alt="ad2"
            height={260}
            width={260}
          />
          <h1 className="w-48 h-16 bg-white font-bold mt-4 p-2 text-center rounded-lg ">
            Web 3 and Metaverse
          </h1>
        </div>

        <div className="flex flex-col items-center rounded-lg shadow-xl shadow-black/45 space-y-4">
          <Image
            className="rounded-lg"
            src="/assets/ad3.jpg"
            alt="ad3"
            height={260}
            width={260}
          />
          <h1 className="w-48 bg-white font-bold mt-4 p-2 text-center rounded-lg ">
            Cloud-Native Computing
          </h1>
        </div>

        <div className="flex flex-col items-center rounded-lg shadow-xl shadow-black/45 space-y-4">
          <Image
            className="rounded-lg"
            src="/assets/ad4.jpg"
            alt="ad4"
            height={260}
            width={260}
          />
          <h1 className="w-48 bg-white font-bold mt-4 p-2 text-center rounded-lg">
            Ambient Computing and IoT
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AdvanceCourses;
