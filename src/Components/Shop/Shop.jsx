import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosSearch } from "react-icons/io";
import useAxiosSecure from "./../../Hook/AxiosSecure/useAxiosSecure";
import ShopCard from "./ShopCard";
import { useLoaderData } from "react-router-dom";
const Shop = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [Product, setProduct] = useState([]);
  const [itemPerPage, setItemPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const furnitureData = async () => {
      const res = await axiosSecure.get(
        `/product?page=${currentPage}&size=${itemPerPage}`
      );
      setProduct(res.data);
    };
    furnitureData();
  }, [currentPage, itemPerPage]);

  const { count } = useLoaderData();
  const NumberOfPages = Math.ceil(count / itemPerPage);
  const pages = [];

  for (let index = 0; index < NumberOfPages; index++) {
    pages.push(index);
  }

  const handlePageChange = (e) => {
    setCurrentPage(e);
  };

  const handleFilter = (e) => {
    const val = parseInt(e.target.value);
    setItemPerPage(val);
    setCurrentPage(0);
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="mt-[100px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div className="col-span-1">
            <div className="mt-[10px]">
              <h1 className="text-[16px] font-bold font-interFont">
                Product Categories
              </h1>
              {/* product categories here */}
              <div>
                <form>
                  <div className="mt-4">
                    <select
                      id="brand-name"
                      name="brand_name"
                      className="border-2 px-4 py-2 font-semibold text-[14px] rounded-lg"
                    >
                      <option value="">Select Brand</option>
                      <option value="Samsung">Samsung</option>
                      <option value="Apple">Apple</option>
                      <option value="Sony">Sony</option>
                      <option value="LG">LG</option>
                      <option value="OnePlus">OnePlus</option>
                      <option value="Google">Google</option>
                      <option value="Xiaomi">Xiaomi</option>
                      <option value="Huawei">Huawei</option>
                      <option value="Nokia">Nokia</option>
                      <option value="Motorola">Motorola</option>
                      <option value="Panasonic">Panasonic</option>
                      <option value="Toshiba">Toshiba</option>
                      <option value="Philips">Philips</option>
                      <option value="Sharp">Sharp</option>
                      <option value="Vizio">Vizio</option>
                      <option value="Hisense">Hisense</option>
                      <option value="Roku">Roku</option>
                      <option value="Dell">Dell</option>
                      <option value="HP">HP</option>
                      <option value="Lenovo">Lenovo</option>
                      <option value="Asus">Asus</option>
                      <option value="Microsoft">Microsoft</option>
                      <option value="Canon">Canon</option>
                      <option value="Nikon">Nikon</option>
                      <option value="Fujifilm">Fujifilm</option>
                      <option value="Olympus">Olympus</option>
                      <option value="Leica">Leica</option>
                      <option value="Pentax">Pentax</option>
                      <option value="GoPro">GoPro</option>
                      <option value="Kodak">Kodak</option>
                    </select>

                    <select
                      id="price-range"
                      className="border-2 px-4 lg:ml-4 py-2 font-semibold text-[14px] rounded-lg"
                      name="price_range"
                    >
                      <option value="">Price Range</option>
                      <option value="1400">800$ - 1400$</option>
                      <option value="800">400$ - 800$</option>
                      <option value="400">100$ - 400$</option>
                    </select>
                    <select
                      id="category-name"
                      className="border-2 px-4 py-2 font-semibold text-[14px] rounded-lg"
                      name="category_name"
                    >
                      <option value="">Select Category</option>
                      <option value="Smartphone">Smartphone</option>
                      <option value="Television">Television</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Camera">Camera</option>
                    </select>
                    <button
                      type="submit"
                      className="bg-[#2d4d95] text-white mt-4 ml-4 font-semibold text-[14px] py-2 px-4 rounded-lg"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <hr className="mt-[40px]" />
            <div>
              <h1 className="text-[16px] mt-[30px] font-bold font-interFont">
                Product Sorting
              </h1>
              <form>
                <div className="flex gap-4 items-center">
                  <select
                    id="log-price"
                    className="border-2 px-4 py-2 mt-4 font-semibold text-[14px] rounded-lg"
                    name="low_price"
                  >
                    <option value="">Price Sorting</option>
                    <option value="low">Low Price</option>
                    <option value="high">High Price</option>
                  </select>
                  <span className="border-2 rounded-lg font-semibold text-[14px]  mt-4 py-2 px-4">
                    <DatePicker
                      className="w-[100px]"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </span>
                </div>

                <button
                  type="submit"
                  className="bg-[#2d4d95] text-white mt-4 font-semibold text-[14px] py-2 px-4 rounded-lg"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="col-span-4">
            <div className="flex lg:flex-row flex-col justify-between items-center">
              <div>
                <h2 className="font-semibold text-[15px]">
                  Showing all {Product.length} results
                </h2>
              </div>
              <div className="relative">
                <input
                  type="text"
                  className="border-2  rounded-md outline-none text-[14px] font-interFont px-4 py-2 relative font-medium"
                  placeholder="Search"
                />
                <div className="absolute right-3 top-[12px] cursor-pointer">
                  <IoIosSearch size={20} />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {Product.map((product, idx) => (
                  <ShopCard product={product} key={idx} />
                ))}
              </div>
              <div className="my-8 text-center space-x-2">
                <button
                  onClick={handlePrev}
                  className={`bg-gray-500 text-white font-semibold px-4 py-2 rounded-md`}
                >
                  Prev
                </button>
                {pages.map((page, idx) => (
                  <button
                    key={idx}
                    onClick={() => handlePageChange(page)}
                    className={`bg-gray-500 text-white font-semibold px-4 py-2 rounded-md ${
                      currentPage === page && "bg-orange-500"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <select
                  className="border-2 border-gray-500 rounded-md py-[6px] px-2 font-semibold"
                  value={itemPerPage}
                  onChange={handleFilter}
                >
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="7">7</option>
                </select>
                <button
                  onClick={handleNext}
                  className="bg-gray-500 text-white font-semibold px-4 py-2 rounded-md"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
