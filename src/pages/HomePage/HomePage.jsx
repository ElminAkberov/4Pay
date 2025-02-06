import React from "react";
import ApexChart from "./ApexChart/ApexChart";
const HomePage = () => {
  return (
    <menu className="p-[20px] w-full overflow-hidden">
      <div className="card md:grid grid-cols-3 max-[1400px]:grid-cols-2  gap-[20px] ">
        <div className="bg-white p-5 h-fit max-md:mb-5 shadow-[0px_0_30px_rgba(1,41,112,0.1)] rounded-md">
          <h5
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="font-poppins text-[#012970] mb-5 "
          >
            Заявок <span className="text-[#899bbd]">| Сегодня</span>
          </h5>
        </div>
        <div className="bg-white p-5 max-md:mb-5 shadow-[0px_0_30px_rgba(1,41,112,0.1)] rounded-md">
          <h5
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="font-poppins text-[#012970] mb-5"
          >
            Баланс <span className="text-[#899bbd]"> | USDT</span>
          </h5>
          <div className="flex items-center gap-3 mb-7">
            <div className="w-[64px] h-[64px] bg-[#e0f8e9] rounded-full"></div>
            <div className="">
              <h6 className="text-[#012970] text-[28px] font-bold nunito leading-5">
                0₮
              </h6>
              <p className="text-sm">
                профит <span className="text-[#198754] font-bold">42%</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 max-[1400px]:col-span-2 h-fit shadow-[0px_0_30px_rgba(1,41,112,0.1)] rounded-md">
          <h5
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="font-poppins text-[#012970] mb-5"
          >
            Заявок <span className="text-[#899bbd]">| Сегодня</span>
          </h5>
        </div>
      </div>
      <div className="bg-white p-5 mt-5 shadow-[0px_0_30px_rgba(1,41,112,0.1)] rounded-md">
        <h5
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="font-poppins text-[#012970] mb-5 "
        >
          Заказы <span className="text-[#899bbd]">| Сегодня</span>
        </h5>
        <ApexChart />
      </div>
    </menu>
  );
};

export default HomePage;
