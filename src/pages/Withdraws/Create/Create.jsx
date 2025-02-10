import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { widthdrawCreate } from "../../../features/widthdraws/widthDrawsCreateSlice";

const Create = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.widthdrawCreate);

  const [formData, setFormData] = useState({
    amount_in_usdt: "",
    address: "",
    geo: "Россия", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(widthdrawCreate(formData)).then(() => {
      setFormData({
        amount_in_usdt: "",
        address: "",
        geo: "Россия", 
      });
    });

  };

  return (
    <menu className="flex items-center justify-center w-full p-[20px]">
      <div className="min-md:w-1/3"></div>
      <form className="min-md:w-1/3" onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="id_amount_in_usdt" className="block">
              Сумма вывода в USDT:
            </label>
            <input
              name="amount_in_usdt" 
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              type="number"
              value={formData.amount_in_usdt} 
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="id_address" className="block">
              Address:
            </label>
            <input
              name="address" 
              className="bg-white w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              type="text" 
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="id_geo" className="block">
              Гео:
            </label>
            <select
              name="geo"
              id="id_geo"
              className="bg-[#1a222c] text-[white] w-full placeholder:text-black px-[12px] py-[6px] rounded-sm border border-[#ced4da] form-input duration-200"
              value={formData.geo} 
              onChange={handleChange}
            >
              <option value="Россия">Россия</option>
             
            </select>
          </div>
          <button className="hover:bg-[#05256b] hover:text-white px-[12px] py-[6px] border border-[#05256b] text-[#05256b] rounded-sm w-full my-4 duration-200 cursor-pointer text-[white]">
            Конвертировать
          </button>
        </fieldset>
      </form>
      <div className="min-md:w-1/3"></div>
    </menu>
  );
};

export default Create;
