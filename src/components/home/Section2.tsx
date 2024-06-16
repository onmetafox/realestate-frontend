import React from "react";
import clsx from "clsx";

import { Typography } from "@material-tailwind/react";

import ExternalArr from "../../assets/svgs/external-arr.svg";
import Coin1 from "../../assets/svgs/coin1.svg";
import Coin2 from "../../assets/svgs/coin2.svg";
import Coin3 from "../../assets/svgs/coin3.svg";

const Section2: React.FC = () => {
  return (
    <div id="section-intro" className="pt-20">
      <div className="z-10 relative">
        <Typography
          variant="h1"
          color="white"
          className="text-center -xl:text-[32px]"
        >
          Introduction to <br /> Three Unique Cryptocurrencies
        </Typography>
      </div>
      <div
        className={clsx(
          "w-full grid grid-cols-3 gap-6  z-10 pt-10 -2md:grid-cols-1 -2md:gap-8"
        )}
      >
        <div
          className={clsx(
            "flex flex-col items-center bg-[#1D1D26]  max-w-[390px] mx-auto",
            " rounded-[24px] z-10 p-[1px] ",
            "bg-gradient-to-b from-[#79797a] to-[#258260]"
          )}
        >
          <div className=" bg-gradient-to-br from-[#16554b] to-[#1D1D26] rounded-[24px]  items-center flex flex-col px-12 py-6 h-full transition-opacity duration-300 hover:opacity-80 cursor-pointer">
            <img src={Coin3} />
            <Typography
              variant="h2"
              color="white"
              className="py-5 font-trapMedium text-center"
            >
              Title Coin
            </Typography>
            <Typography
              variant="small"
              className=" text-[#ffffff7c] text-center"
            >
              Explore the future of Real Estate Transactions. Join the
              revolution with a curtoncy based on acogramnicall coordinates,
              oftening seamless transactions earnings, and interest in the
              crypto real estate realm.
            </Typography>
          </div>
        </div>
        <div
          className={clsx(
            "flex flex-col items-center bg-[#1D1D26] max-w-[390px] mx-auto",
            " rounded-[24px] z-10 p-[1px] ",
            "bg-gradient-to-b from-[#79797a] to-[#5b6396]"
          )}
        >
          <div className=" bg-gradient-to-br from-[#2c2e58] to-[#1D1D26] rounded-[24px]  items-center flex flex-col px-12 py-6 h-full transition-opacity duration-300 hover:opacity-80 cursor-pointer">
            <img src={Coin1} />
            <Typography
              variant="h2"
              color="white"
              className="py-5 font-trapMedium text-center"
            >
              Estate Coin
            </Typography>
            <Typography
              variant="small"
              className=" text-[#ffffff7c] text-center"
            >
              Experience the stability of the first stablecoin backed entirely
              by real property. Invest in an asset that appreciates with the
              value of the properties backing it, offering a secure and
              defiationary investment opportunities.
            </Typography>
          </div>
        </div>

        <div
          className={clsx(
            "flex flex-col items-center bg-[#1D1D26]  max-w-[390px] mx-auto",
            " rounded-[24px] z-10 p-[1px] ",
            "bg-gradient-to-b from-[#79797a] to-[#4d1674]"
          )}
        >
          <div className=" bg-gradient-to-br from-[#401c5f] to-[#1D1D26] rounded-[24px]  items-center flex flex-col px-12 py-6 h-full transition-opacity duration-300 hover:opacity-80 cursor-pointer">
            <img src={Coin2} />
            <Typography
              variant="h2"
              color="white"
              className="py-5 font-trapMedium text-center"
            >
              Title NFT
            </Typography>
            <Typography
              variant="small"
              className=" text-[#ffffff7c] text-center"
            >
              Embowering Creators and Bevondl Get ready for the future with a
              dialtal property title that not only serves creators and
              collectors but also holds real-world title records and crucial
              information. Join us in shaping a more prepared world!
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
