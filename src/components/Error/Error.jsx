import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineError } from "react-icons/md";

const Error = ({ message }) => {
  const [closePopUp, setClosePopUp] = useState(false);
  return (
    <>
      <section
        className={`fixed ${
          !closePopUp ? "top-16" : "top-[-400px]"
        }  bg-[#12181F]  shadow-xl rounded-md -translate-x-1/2 -translate-y-1/2 left-1/2 text-white items-center max-[300px]:w-[250px] w-[300px] md:w-[500px]  p-5 duration-300 z-30`}
      >
        <div className="flex justify-between items-center capitalize gap-x-2 relative z-[]">
          <div className="flex items-center gap-x-2">
            <MdOutlineError color="red" size={25} />
            {message}
          </div>
          <IoCloseSharp
            onClick={() => {
              setClosePopUp(!closePopUp);
            }}
            size={30}
            className={` z-30 cursor-pointer`}
          />
        </div>
      </section>
    </>
  );
};

export default Error;
