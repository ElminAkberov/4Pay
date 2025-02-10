import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const Success = ({ success, message }) => {
  return (
    <div
      className={`fixed bg-[#364565] rounded-xl left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex items-center gap-x-2 p-2 ${
        success ? "top-[100px] opacity-100" : "top-[-300px] opacity-0"
      } z-[999] duration-300 transition-all`}
    >
      <FaRegCircleCheck color="#37B67E" />
      {message}
    </div>
  );
};

export default Success;
