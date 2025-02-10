import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import { refillsDownload } from "../../../../features/refillisList/refillsDownload";

const ReportModal = ({ report, setReport }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.refillsDownload);

  const [reportDate, setReportDate] = useState({
    start_date: "",
    end_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportDate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDownload = async () => {
    const response = await dispatch(refillsDownload(reportDate));

    if (response.meta.requestStatus === "fulfilled") {
      const blob = new Blob([response.payload], {
        type: "application/octet-stream",
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "report.csv";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <>
      <div
        className={`${
          !report && "hidden"
        } bg-[#151e30] fixed z-[999] min-h-[35vh] p-5 top-1/2 left-1/2 rounded-xl -translate-y-1/2 -translate-x-1/2`}
      >
        <div className="flex w-full justify-end cursor-pointer">
          <MdClose color="#fff" size={30} onClick={() => setReport(false)} />
        </div>
        <div className="flex max-md:flex-col gap-x-2 my-4">
          <div>
            <label htmlFor="start_date">Дата начала</label>
            <input
              name="start_date"
              value={reportDate.start_date}
              onChange={handleChange}
              className="w-full rounded-lg border-[#3d4d60] border bg-white py-2 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]"
              type="date"
            />
          </div>
          <div>
            <label htmlFor="end_date">Дата окончания</label>
            <input
              name="end_date"
              value={reportDate.end_date}
              onChange={handleChange}
              className="w-full rounded-lg border-[#3d4d60] border bg-white py-2 px-5 text-black outline-none transition focus:border-[#3C50E0] active:border-[#3C50E0]"
              type="date"
            />
          </div>
        </div>
        <button
          onClick={handleDownload}
          disabled={loading}
          className="hover:bg-[#0d6efd] outline-none hover:text-white px-[12px] py-[6px] border border-[#0d6efd] text-[#0d6efd] rounded-sm w-full my-4 duration-200 cursor-pointer"
        >
          {loading ? "Загрузка..." : "Скачать"}
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
      <div
      onClick={() => setReport(false)}
        className={`${!report && "hidden"} fixed inset-0 bg-[#2320204d] z-20`}
      ></div>
    </>
  );
};

export default ReportModal;
