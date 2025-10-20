import React from "react";
import bg from "../../assets/bg.png";

const Ads = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-[500px] flex justify-center items-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div>
          <h3 className="text-pink-400 text-xl font-semibold">For Ads</h3>
        </div>
      </div>
    </>
  );
};

export default Ads;
