import React from "react";
import { FiBookmark, FiShare2 } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  if (!news) return null;

  const {
    id,
    title,
    image_url,
    thumbnail_url,
    details,
    author,
    rating,
    total_view,
    others,
    tags,
  } = news;

  // formatted date (e.g. Wednesday, April 22, 2025)
  const published = author?.published_date
    ? new Date(author.published_date).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  // short excerpt
  const excerpt =
    details?.length > 220 ? details.slice(0, 220) + "..." : details;

  // rating handling (0-5)
  const ratingNumber = rating?.number ? Number(rating.number) : 0;
  const rounded = Math.round(ratingNumber); // for filled stars

  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden">
      {/* header: author, date, actions */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-12 h-12 rounded-full object-cover border"
          />
          <div>
            <div className="text-sm font-semibold">{author?.name}</div>
            <div className="text-xs text-gray-500">{published}</div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <button
            title="Save"
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            <FiBookmark size={18} />
          </button>
          <button
            title="Share"
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            <FiShare2 size={18} />
          </button>
        </div>
      </div>

      {/* title */}
      <div className="px-4">
        <h2 className="text-xl md:text-2xl font-bold leading-snug mb-3">
          {title}
        </h2>
      </div>

      {/* image */}
      <div className="px-4 pb-4">
        <img
          src={thumbnail_url || image_url}
          alt={title}
          className="w-full h-56 md:h-64 object-cover rounded-lg"
        />
      </div>

      {/* excerpt / tags */}
      <div className="px-4 pb-4 pt-4">
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-3">{excerpt}</p>
          <Link
            to={`/news-details/${id}`}
            href="#read-more"
            className="text-orange-500 font-medium hover:underline"
          >
            Read More
          </Link>
        </div>

        <div className="flex items-center justify-between gap-4 border-t py-3">
          {/* rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) =>
                i < rounded ? (
                  <FaStar key={i} className="text-yellow-400" />
                ) : (
                  <FaRegStar key={i} className="text-gray-300" />
                )
              )}
            </div>
            <span className="text-sm font-medium">
              {ratingNumber.toFixed(1)}
            </span>
          </div>

          {/* views */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaRegEye />
            <span>{total_view?.toLocaleString()}</span>
          </div>
        </div>

        {/* optional badges / tags */}
        <div className="flex items-center gap-2 mt-3 flex-wrap">
          {others?.is_today_pick && (
            <span className="badge badge-primary badge-sm">Today Pick</span>
          )}
          {others?.is_trending && (
            <span className="badge badge-accent badge-sm">Trending</span>
          )}
          {rating?.badge && (
            <span className="badge badge-outline badge-sm">{rating.badge}</span>
          )}
          {tags?.slice?.(0, 4).map((t) => (
            <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded-md">
              #{t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
