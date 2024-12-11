import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <div className="text-[30px]  font-extrabold text-blue-900  px-20">
        Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
        Developing Billion-Dollar Valued Developers and Solopreneurs
      </div>
      <div className="flex justify-center items-center mt-8 px-24 ">
        <p className="tet-24 font-bold">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members.
        </p>
      </div>

      <div className=" flex justify-center items-center space-x-10 mt-8">
          <Image className="rounded-md shadow-2xl shadow-black"
            src="/assets/one.jpg"
            alt="cards"
            height={340}
            width={320}
          ></Image>

          <Image className="rounded-md shadow-2xl shadow-black"
            src="/assets/two.jpg"
            alt="cards"
            height={350}
            width={350}
          ></Image>

          <Image className="rounded-md shadow-2xl shadow-black "
            src="/assets/three.jpg"
            alt="cards"
            height={340}
            width={320}
          ></Image>
        </div>
    </div>
  );
};

export default Content;
