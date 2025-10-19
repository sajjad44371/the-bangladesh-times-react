import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <>
      <div className="bg-base-200">
        <div className="flex items-center gap-5 p-4">
          <p className="bg-secondary text-base-100 px-3 py-2 font-medium text-xl">
            Latest
          </p>
          <Marquee className="flex gap-5" pauseOnHover={true}>
            <p className="font-semibold text-lg text-pink-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              nostrum magnam, dolor delectus debitis officia.
            </p>
            <p className="font-semibold text-lg text-orange-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              nostrum magnam, dolor delectus debitis officia.
            </p>
            <p className="font-semibold text-lg text-rose-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              nostrum magnam, dolor delectus debitis officia.
            </p>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
