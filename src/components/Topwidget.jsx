import React from "react";
import { IoIosTrendingUp } from "react-icons/io";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Topwidget = ({ heading, value, trend, percentage, Icon, bg }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-5 mb-4">
        <div
          className={`flex rounded-[14px] ${
            bg ? "bg-[#FFFFFF]" : "bg-[#2B7F75]"
          }  p-2.5 text-gray-0 w-12 h-11 justify-center items-center`}
        >
          <Icon className={`${bg ? "text-[#2B7F75]" : "text-white"} w-6 h-6`} />
        </div>
        <div className="flex flex-col">
          <p
            className={`font-medium ${bg ? "text-gray-100" : "text-gray-500"} `}
          >
            {heading}
          </p>
          <p
            className={`${
              bg ? "text-[#ffffff] " : "font-bold text-gray-900"
            } text-lg`}
          >
            {value}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span
          className={`flex rounded-[11px] items-center ${
            bg ? "bg-[#FFFFFF] " : "bg-green-lighter/70 "
          }  justify-center w-8 h-6 text-gray-0 `}
        >
          <IoIosTrendingUp className="text-[#2B7F75] text-lg" />
        </span>
        <span className={`${bg ? "text-[#ffffff]" : "text-[#2B7F75]"}`}>
          +{percentage}{" "}
          <span
            className={`text-[#ffffff] font-medium ${
              bg ? "text-gray-100" : "text-gray-500"
            } `}
          >
            Increase last month
          </span>
        </span>
      </div>
    </div>
  );
};

export default Topwidget;
