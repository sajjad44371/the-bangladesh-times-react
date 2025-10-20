import React from "react";
import { FaLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const News = ({ news }) => {
  const { image_url, title, details, category_id } = news;
  return (
    <>
      <div>
        <h2 className="text-lg font-semibold mb-5">News</h2>
        <div className="shadow-lg rounded-md">
          <div className="p-8">
            <img
              src={image_url}
              alt=""
              className="rounded-md w-full h-[400px] object-cover"
            />
            <h2 className="font-bold text-2xl text-primary my-5">{title}</h2>
            <p className="text-accent">{details}</p>
            <Link
              to={`/category/${category_id}`}
              className="btn btn-secondary mt-8"
            >
              <FaLeftLong></FaLeftLong> All news in this category
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
