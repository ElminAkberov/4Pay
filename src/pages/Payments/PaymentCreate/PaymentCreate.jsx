import React from "react";

const PaymentCreate = () => {
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
            <input
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              type="number"
            />
          </div>
          <div className="">
            <label htmlFor="id_amount_in_usdt" className="block">
              Метод перевода:
            </label>
            <select
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
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
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              name=""
              id=""
            >
              <option value="Any">******</option>

              <option value="Ozon">Ozon</option>

              <option value="UBRR">UBRR</option>

              <option value="ExpoBank">ExpoBank</option>

              <option value="Svoibank">Svoibank</option>

              <option value="BCSBank">BCSBank</option>

              <option value="AkBars">AkBars</option>

              <option value="Primorye">Primorye</option>

              <option value="Raiffeisen">Raiffeisen</option>

              <option value="DomRF">DomRF</option>

              <option value="Rosbank">Rosbank</option>

              <option value="Sovcom">Sovcom</option>

              <option value="MKB">MKB</option>

              <option value="Solidarnost">Solidarnost</option>

              <option value="RSHB">RSHB</option>

              <option value="Uralsib">Uralsib</option>

              <option value="PSB">PSB</option>

              <option value="Mbank">Mbank</option>

              <option value="RSB">RSB</option>

              <option value="BSPB">BSPB</option>

              <option value="VakifBank">VakifBank</option>

              <option value="Ingobank">Ingobank</option>

              <option value="Dolinsk">Dolinsk</option>

              <option value="BANK">BANK</option>

              <option value="PAPARA">PAPARA</option>

              <option value="M10">M10</option>

              <option value="Kapital Bank">Kapital Bank</option>

              <option value="BerekeBank">BerekeBank</option>

              <option value="Yandex">Yandex</option>

              <option value="Tinkoff">Tinkoff</option>

              <option value="Halyk Bank">Halyk Bank</option>

              <option value="Kaspi Bank">Kaspi Bank</option>

              <option value="Freedom Bank">Freedom Bank</option>

              <option value="OMoney">OMoney</option>

              <option value="BAKAI BANK">BAKAI BANK</option>

              <option value="OPTIMA BANK">OPTIMA BANK</option>

              <option value="DEMIR BANK">DEMIR BANK</option>

              <option value="VTB">VTB</option>

              <option value="OTP">OTP</option>

              <option value="ABR">ABR</option>

              <option value="A-Mobile">A-Mobile</option>

              <option value="ChelyabInvest">ChelyabInvest</option>

              <option value="Tsifra">Tsifra</option>

              <option value="SinarBank">SinarBank</option>

              <option value="MTS">MTS</option>

              <option value="primSocBank">primSocBank</option>

              <option value="Alfa">Alfa</option>

              <option value="Eskhata">Eskhata</option>

              <option value="Dushanbe">Dushanbe</option>

              <option value="IpakYuli">IpakYuli</option>

              <option value="Alif Bank">Alif Bank</option>

              <option value="Forte Bank">Forte Bank</option>

              <option value="UZ Card">UZ Card</option>

              <option value="Sber">Sber</option>

              <option value="Humo UZS">Humo UZS</option>

              <option value="Gasprom">Gasprom</option>

              <option value="Pay Me">Pay Me</option>
            </select>
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
