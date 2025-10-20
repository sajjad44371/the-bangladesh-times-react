import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import Qzone from "./Qzone";
import Ads from "./Ads";

const RightAside = () => {
  return (
    <>
      <div className="space-y-8">
        <SocialLogin></SocialLogin>
        <FindUs></FindUs>
        <Qzone></Qzone>
        <Ads></Ads>
      </div>
    </>
  );
};

export default RightAside;
