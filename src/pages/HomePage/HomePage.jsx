import React from "react";
import Charts from "./Charts/Charts";

const HomePage = () => {
  return (
    <menu className="p-[20px] w-full overflow-hidden">
      <div className="card md:grid grid-cols-3 max-[1400px]:grid-cols-2 gap-[20px]"></div>
     
      <div className="bg-[#24303F] p-5 mt-5 shadow-[0px_0_30px_rgba(1,41,112,0.1)]">
        <h5 className="text-[#fff] mb-5">
          Заказы <span className="text-[#899bbd]">| Сегодня</span>
        </h5>
        <Charts />
      </div>
    </menu>
  );
};

export default HomePage;
