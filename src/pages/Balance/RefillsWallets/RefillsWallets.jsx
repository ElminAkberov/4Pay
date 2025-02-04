import React from "react";

const RefillsWallet = () => {
  return (
    <menu className=" text-center  justify-center w-full p-[20px]">
      <div className="">
        <h2 className="text-[#0d6efd] nunito font-semibold text-[37px]">
          Ваши кошельки
        </h2>
        <p className="text-[#6c757d]">
          Просматривайте ваши кошельки и сканируйте QR-коды для быстрого
          доступа.
          <br></br>
          Минимальная сумма пополнения 100 USDT. Штраф за пополнение c garantex
          - 50% от суммы перевода!<br></br>
          После пополнения вставляете хэш перевода на сайте в раздел пополнить в
          USDT
        </p>
        <div className="card text-left mt-20 bg-white mx-20">
          <h4 className="text-[#798eb3] text-[24px] p-[25px] leading-5">
            Список ваших кошельков
          </h4>
          <hr style={{ border: "0.1px solid #EBEEF4" }} />
          <div className="card-body">
            <p className="text-[#6c757d] text-[17px] p-[25px]">
              У вас пока нет активных кошельков.
            </p>
          </div>
        </div>
      </div>
    </menu>
  );
};

export default RefillsWallet;
