import { Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import React from "react";

const PaymentCreate = () => {
  const banks = [
    "Any",
    "Ozon",
    "UBRR",
    "ExpoBank",
    "Svoibank",
    "BCSBank",
    "AkBars",
    "Primorye",
    "Raiffeisen",
    "DomRF",
    "Rosbank",
    "Sovcom",
    "MKB",
    "Solidarnost",
    "RSHB",
    "Uralsib",
    "PSB",
    "Mbank",
    "RSB",
    "BSPB",
    "VakifBank",
    "Ingobank",
    "Dolinsk",
    "BANK",
    "PAPARA",
    "M10",
    "Kapital Bank",
    "BerekeBank",
    "Yandex",
    "Tinkoff",
    "Halyk Bank",
    "Kaspi Bank",
    "Freedom Bank",
    "OMoney",
    "BAKAI BANK",
    "OPTIMA BANK",
    "DEMIR BANK",
    "VTB",
    "OTP",
    "ABR",
    "A-Mobile",
    "ChelyabInvest",
    "Tsifra",
    "SinarBank",
    "MTS",
    "primSocBank",
    "Alfa",
    "Eskhata",
    "Dushanbe",
    "IpakYuli",
    "Alif Bank",
    "Forte Bank",
    "UZ Card",
    "Sber",
    "Humo UZS",
    "Gasprom",
    "Pay Me",
  ];
  return (
    <menu className="flex items-center justify-center w-full p-[20px]">
      <div className="min-md:w-1/4"></div>
      <form className="min-md:w-1/2">
        <h2 className="nunito text-[31px] text-[#444]">Создать Заявку</h2>
        <fieldset>
          <div className="w-full">
            <label htmlFor="" className="block">
              Сумма:
            </label>
            <Input
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              type="number"
            />
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Метод перевода:
            </label>
            <Select
              defaultValue={"******"}
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px]  form-input duration-200"
              name=""
              id=""
            >
              <Option value="Any">******</Option>

              <Option value="to_card_number">Карта</Option>
              <Option value="to_sbp_number">СБП</Option>
            </Select>
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Банк:
            </label>
            <Select defaultValue={banks[1]} className="bg-white w-full placeholder:text-black px-[12px] py-[6px] form-input duration-200">
              {banks.map((bank) => (
                <Option key={bank} value={bank}>
                  {bank}
                </Option>
              ))}
            </Select>
            
          </div>
          <button className="hover:bg-[#0a58ca] hover:border-[#0a58ca] hover:text-white px-[12px] py-[6px] border border-[#05256b] text-[#fff] bg-[#05256b] rounded-sm w-full my-4 duration-200 cursor-pointer">
            Сохранить
          </button>
        </fieldset>
      </form>
      <div className="min-md:w-1/3"></div>
    </menu>
  );
};

export default PaymentCreate;
