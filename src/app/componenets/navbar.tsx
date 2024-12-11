import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="z-50 sticky top-0  border-y-slate-100">
      <div className="flex flex-col fixed mt-4 ml-8  items-start cursor-pointer">
        <Image
          src="/assets/logo.png"
          width={100}
          height={100}
          alt="logo"
        ></Image>
      </div>
      <div>
        <ul className="flex justify-center  items-center space-x-7  bg-blue-700 text-white h-20">
          <div className="flex justify-center items-start p-[50px]">
            <h1 className="text-[20px] font-bold text-blue-200">
              Tuition Free Education Program on Latest Technologies
            </h1>
          </div>
          <Link href="/">
            <li className="cursor-pointer font-semibold">Home</li>
          </Link>

          <Link href="#apply">
            <li className="cursor-pointer font-semibold">Apply</li>
          </Link>

          <Link href="/">
            <li className="cursor-pointer font-semibold">Job</li>
          </Link>

          <Link href="/">
            <li className="cursor-pointer font-semibold">Result</li>
          </Link>

          <Link href="#courses">
            <li className="cursor-pointer font-semibold">Courses</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
