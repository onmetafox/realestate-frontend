import React from "react";
import clsx from "clsx";

import { Typography } from "@material-tailwind/react";

import Rect1PNG from "../../assets/images/rect-1.png";
import Rect2PNG from "../../assets/images/rect-2.png";
import Rect3PNG from "../../assets/images/rect-3.png";
import Rect4PNG from "../../assets/images/rect-4.png";

import Rect1DPNG from "../../assets/images/rect-1-l.png";
import Rect2DPNG from "../../assets/images/rect-2-l.png";
import Rect3DPNG from "../../assets/images/rect-3-l.png";
import Rect4DPNG from "../../assets/images/rect-4-l.png";

const Section4: React.FC = () => {
  return (
    <div id="section-roadmap" className="pt-20 max-w-[1200px] mt-20 px-5">
      <div className="z-20 relative  py-3 mx-auto flex flex-row items-end justify-between -xl:flex-col -xl:items-start -xl:justify-start -xl:gap-5">
        <Typography
          variant="h1"
          color="white"
          className="flex-[3] max-w-[741px] tracking-tighter -xl:text-[32px] "
        >
          Paving the Way to a New Era in Real Estate and Cryptocurrency
        </Typography>
        <Typography
          variant="paragraph"
          color="white"
          className="flex-1 text-[#ffffff7c]"
        >
          Embark on the journey of 'E'state Coin with our carefully crafted
          roadmap, outlining key milestones on the path to reshaping real estate
          and cryptocurrency integration.
        </Typography>
      </div>

      <div className=" max-w-[1200px] mt-10 h-[280px] -2md:h-[570px]">
        <div className=" relative  z-10 -2md:flex-col -2md:gap-16 ">
          <div
            className={clsx(
              " bg-contain bg-no-repeat bg-center h-[255px] -xl:p-6 -lg:p-5 p-8 float-left w-[54%] absolute top-0 left-0",
              "-2md:max-w-[500px] -2md:relative -2md:mx-auto -2md:w-full -2md:float-none"
            )}
          >
            <img
              src={Rect1DPNG}
              className={clsx(
                " h-full object-fill",
                "z-0 absolute left-0 top-0 bottom-0 -2md:hidden",
                "-2md:top-0 -2md:bottom-auto -2md:max-w-[735px] -2md:h-[250px]"
              )}
              draggable={false}
            />
            <img
              src={Rect1PNG}
              className={clsx(
                " object-fill",
                "z-0 absolute left-0 top-0 bottom-0 right-0 2md:hidden",
                "  h-[250px] w-full"
              )}
              draggable={false}
            />
            <div
              className={clsx("max-w-[298px] z-10 relative -lg:max-w-[260px]")}
            >
              <div className="p-[1px] bg-gradient-to-b from-[#7a7a7b] to-[#646b9e] rounded-full z-10 w-fit mb-2">
                <div className=" bg-gradient-to-r from-[#252631] to-[#424258] py-2 px-3 rounded-full h-full w-fit">
                  <Typography
                    variant="small"
                    className=" text-[#ffffff7c] text-center"
                  >
                    Q3. 2024
                  </Typography>
                </div>
              </div>
              <Typography
                variant="h3"
                color="white"
                className="-lg:text-[18px]"
              >
                Inception and Planning
              </Typography>
              <Typography
                variant="small"
                className="text-[#ffffff7c] mt-3 -lg:mt-1"
              >
                Conducted market research and devised a comprehensive business
                plan.
              </Typography>
              <Typography
                variant="small"
                className="text-[#ffffff7c] mt-2  -lg:mt-1"
              >
                Assembled a skilled team across real estate, blockchain,
                finance, legal, marketing, and development.
              </Typography>
            </div>
          </div>
          <div
            className={clsx(
              " bg-contain bg-no-repeat bg-center h-[255px] -xl:p-6 p-8 float-right w-[54%] absolute top-0 right-0",
              "-2md:max-w-[500px] -2md:relative -2md:mx-auto -2md:w-full -2md:float-none -2md:mt-10"
            )}
          >
            <img
              src={Rect2DPNG}
              className={clsx(
                " h-full object-fill",
                "z-0 absolute left-0 top-0 bottom-0 w-[120%] -2md:hidden"
              )}
              draggable={false}
            />
            <img
              src={Rect2PNG}
              className={clsx(
                " object-fill",
                "z-0 absolute left-0 top-0 bottom-0 right-0 2md:hidden",
                "  h-[250px] w-full"
              )}
              draggable={false}
            />
            <div className="max-w-[298px] z-10 relative -lg:max-w-[250px] float-right -2md:float-left">
              <div className="p-[1px] bg-gradient-to-b from-[#7a7a7b] to-[#646b9e] rounded-full z-10 w-fit mb-2">
                <div className=" bg-gradient-to-r from-[#252631] to-[#424258] py-2 px-3 rounded-full h-full w-fit">
                  <Typography
                    variant="small"
                    className=" text-[#ffffff7c] text-center"
                  >
                    Q4. 2024
                  </Typography>
                </div>
              </div>

              <Typography
                variant="h3"
                color="white"
                className="-lg:text-[18px]"
              >
                Technical Development
              </Typography>
              <Typography
                variant="small"
                className="text-[#ffffff7c] mt-3 -lg:mt-1"
              >
                Designed and developed the 'E'state Coin blockchain platform
                with a focus on scalability and security.
              </Typography>
              <Typography
                variant="small"
                className="text-[#ffffff7c] mt-2 -lg:mt-1"
              >
                Established smart contract protocols for seamless property
                linking and transparent transaction verification.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-[1200px] mt-10 h-[280px] -2md:mt-0 -2md:h-[510px]">
        <div className=" relative  z-10 -2md:flex-col -2md:gap-16 ">
          <div
            className={clsx(
              " bg-contain bg-no-repeat bg-center h-[280px] -xl:p-6 -lg:p-5 p-8 float-left w-[54%] absolute top-0 left-0",
              "-2md:max-w-[500px] -2md:relative -2md:mx-auto -2md:w-full -2md:float-none"
            )}
          >
            <img
              src={Rect4DPNG}
              className={clsx(
                " h-full object-fill",
                "z-0 absolute left-0 top-0 bottom-0 -2md:hidden",
                "-2md:top-0 -2md:bottom-auto -2md:max-w-[735px] -2md:h-[250px]"
              )}
              draggable={false}
            />
            <img
              src={Rect4PNG}
              className={clsx(
                " object-fill",
                "z-0 absolute left-0 top-0 bottom-0 right-0 2md:hidden",
                "  h-[250px] w-full"
              )}
              draggable={false}
            />
            <div
              className={clsx(" max-w-[298px] z-10 relative -lg:max-w-[270px]")}
            >
              <div className="p-[1px] bg-gradient-to-b from-[#7a7a7b] to-[#646b9e] rounded-full z-10 w-fit mb-2">
                <div className=" bg-gradient-to-r from-[#252631] to-[#424258] py-2 px-3 rounded-full h-full w-fit">
                  <Typography
                    variant="small"
                    className=" text-[#ffffff7c] text-center"
                  >
                    Q1. 2025
                  </Typography>
                </div>
              </div>

              <Typography
                variant="h3"
                color="white"
                className="-lg:text-[18px]"
              >
                Community Building and Marketing
              </Typography>
              <Typography variant="small" className="text-[#ffffff7c] mt-3">
                Launched a compelling marketing campaign, engaging real estate
                communities, influencers, and partners.
              </Typography>
              <Typography variant="small" className="text-[#ffffff7c] mt-2">
                Established an active online presence through social media,
                forums, and events.
              </Typography>
            </div>
          </div>
          <div
            className={clsx(
              " bg-contain bg-no-repeat bg-center h-[280px] p-8  -xl:p-6 -lg:p-5 float-right w-[54%] absolute top-0 right-0",
              "-2md:max-w-[500px] -2md:relative -2md:mx-auto -2md:w-full -2md:float-none -2md:mt-10"
            )}
          >
            <img
              src={Rect3DPNG}
              className={clsx(
                " h-full object-fill",
                "z-0 absolute left-0 top-0 bottom-0 w-[120%] -2md:hidden"
              )}
              draggable={false}
            />
            <img
              src={Rect3PNG}
              className={clsx(
                " object-fill",
                "z-0 absolute left-0 top-0 bottom-0 right-0 2md:hidden",
                "  h-[250px] w-full"
              )}
              draggable={false}
            />
            <div className="max-w-[310px] -lg:max-w-[270px] z-10 relative float-none ml-24 -2md:ml-0 -2md:float-left">
              <div className="p-[1px] bg-gradient-to-b from-[#7a7a7b] to-[#646b9e] rounded-full z-10 w-fit mb-2">
                <div className=" bg-gradient-to-r from-[#252631] to-[#424258] py-2 px-3 rounded-full h-full w-fit">
                  <Typography
                    variant="small"
                    className=" text-[#ffffff7c] text-center"
                  >
                    Q2. 2025
                  </Typography>
                </div>
              </div>

              <Typography
                variant="h3"
                color="white"
                className="-lg:text-[18px]"
              >
                Onboarding and Engagement
              </Typography>
              <Typography variant="small" className="text-[#ffffff7c] mt-3">
                Developed an intuitive platform for property owners to
                effortlessly link their properties to the 'E'state Coin network.
              </Typography>
              <Typography variant="small" className="text-[#ffffff7c] mt-2">
                Created a user-friendly marketplace for investors and traders,
                ensuring liquidity and informed decision-making.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
