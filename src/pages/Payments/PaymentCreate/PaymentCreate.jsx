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
    <menu className="flex items-center justify-center w-full p-[20px] max-w-[640px] mx-auto">
      <form className="w-full">
        <h2 className="nunito text-[31px] text-[#fff]">Создать Заявку</h2>
        <fieldset>
          <div className="w-full mb-4">
            <label htmlFor="" className="block mb-2">
              Сумма:
            </label>
            <input
              className="w-full rounded-lg border-[#3d4d60] border bg-[#1D2A39] text-white py-3 px-5  outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "
              type="number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="id_amount_in_usdt" className="block">
              Метод перевода:
            </label>

            <select
              defaultValue={"******"}
              className="w-full rounded-lg border-[#3d4d60] border bg-[#1D2A39] text-white py-3 px-5  outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "
              name=""
              id=""
            >
              <option value="Any">******</option>

              <option value="to_card_number">Карта</option>
              <option value="to_sbp_number">СБП</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Банк:
            </label>

            <select
              defaultValue={banks[1]}
              className="w-full rounded-lg border-[#3d4d60] border bg-[#1D2A39] text-white py-3 px-5  outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]  "
            >
              {banks.map((bank) => (
                <option key={bank} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
          </div>
          <button className="hover:bg-[#05256B] hover:border-[#05256B] hover:text-white px-[12px] py-[6px] border border-[#fff] text-[#fff] bg-[] rounded-sm w-full my-4 duration-200 cursor-pointer">
            Сохранить
          </button>
        </fieldset>
      </form>
    </menu>
  );
};

export default PaymentCreate;
