import React from "react";
import { FaShoppingCart, FaBookmark, FaStar, FaFireAlt } from "react-icons/fa";

const Card2 = () => {
  // var rating = 4;
  return (
    <div className="grid grid-cols-3 justify-center">
      <div className="flex justify-evenly mt-20">
        <div className="relative bg-gray-100 m-1 grow shrink-0 basos-96 max-w-lg max-h-[50rem] duration-200 hover:shadow-[0.5rem 0.75rem 1.5rem #bbbbbb]">
          <img className="mt-8 max-w-full h-auto"
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR90pZoWX_UY9f1QPYuGj5nM9IdqyahZViE-4xFJkwsQLwCalJmio--68GY2FhCaZNugGfNq_CkGU02HpkPr-UC3LL6JEr3SCBRKP105eSsNfO5mdqS9g4vQg&usqp=CAE"
            alt="product"
          />

          <FaShoppingCart className="absolute right-0 m-4 cursor-pointer" />
          <FaBookmark className="absolute right-12 m-4 cursor-pointer" />
          <FaFireAlt className="absolute left-0 m-4 cursor-pointer" />

          <div className="m-8">
            <h3>BoAt Rockerz 370</h3>
            <div>
              <div>₹999.00</div>
              <div>300 units sold</div>
            </div>
            <div>
              <div>
                {/* {[...Array(rating)].map((index) => (
                            <FaStar id={index + 1} key={index} />
                        ))} */}
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div>10 left</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
