import { format } from "date-fns";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="logo-font mt-[50px] mb-5 text-6xl text-[#403F3F]">
          The Bangladesh Times
        </h1>
        <p className="text-lg text-accent mb-2.5">
          Journalism Without Fear or Favour
        </p>
        <p className="text-accent font-medium text-xl">
          {format(new Date(), "EEEE, MMMM dd, yyyy")}
        </p>
      </div>
    </>
  );
};

export default Header;
