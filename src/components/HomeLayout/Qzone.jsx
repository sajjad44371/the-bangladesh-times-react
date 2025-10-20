import React from "react";
import swimmingImg from "../../assets/swimming.png";
import playgroundImg from "../../assets/playground.png";
import classImg from "../../assets/class.png";

const Qzone = () => {
  return (
    <>
      <div className="bg-base-200 px-2 py-4">
        <h2 className="text-lg font-semibold mb-5">Q-Zone</h2>
        <div className="space-y-3">
          <img src={swimmingImg} alt="" className="mx-auto" />
          <img src={playgroundImg} alt="" className="mx-auto" />
          <img src={classImg} alt="" className="mx-auto" />
        </div>
      </div>
    </>
  );
};

export default Qzone;
