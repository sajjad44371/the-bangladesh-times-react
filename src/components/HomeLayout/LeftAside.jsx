import React, { Suspense } from "react";
import Categories from "../Categories/Categories";
import Loading from "../Loading/Loading";

const LeftAside = () => {
  return (
    <>
      <div>
        <Suspense fallback={<Loading></Loading>}>
          <Categories></Categories>
        </Suspense>
      </div>
    </>
  );
};

export default LeftAside;
