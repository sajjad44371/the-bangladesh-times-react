import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <>
      <div>
        <h2 className="text-lg font-semibold">All category</h2>
        <div className="grid grid-cols-1 mt-5 gap-3">
          {categories.map((category) => (
            <NavLink
              key={category.id}
              className="px-10 py-5 rounded-lg bg-base-100 btn border-0 hover:bg-base-300 font-medium text-accent"
              to={`/category/${category.id}`}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
