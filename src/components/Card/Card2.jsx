import React from "react";
import { FaShoppingCart, FaBookmark, FaStar, FaFireAlt } from "react-icons/fa";

const Card2 = () => {
  var rating = 3;
  return (
    <div className="grid grid-cols-3 justify-center">
      <div className="flex mt-20">
        <div className="relative flex justify-items-start flex-col bg-gray-100 m-1 grow shrink-0 base-96 max-w-lg max-h-[50rem] duration-200 hover:-translate-y-2 hover:shadow-[0.5rem 0.75rem 1.5rem #bbbbbb]">
            <img
              className="mt-8 max-w-fit max-h-80 h-auto"
              alt="product"
              src="https://m.media-amazon.com/images/I/71ne0uMgcgL._SX466_.jpg"
            />

          <div>
            <FaShoppingCart className="absolute right-0 m-4 cursor-pointer" />
            <FaBookmark className="absolute right-8 m-4 cursor-pointer" />
            {/* <FaFireAlt className="absolute left-0 m-4 cursor-pointer" /> */}
          </div>

          <div className="m-8 items-center">
            <h3 className="text-2xl">BoAt Rockerz 370</h3>
            <div className="my-8 flex justify-between items-center">
              <div className="text-2xl font-bold">₹999.00</div>
              <div className="text-[1.1rem]">300 units sold</div>
            </div>
            <div className="my-8 flex justify-between items-center">
              <div className="flex flex-row gap-1">
                {[...Array(rating)].map((index) => (
                            <FaStar key={index} />
                        ))}
                {/* <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /> */}
              </div>
              <div className="text-[1.1rem]">10 left</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
