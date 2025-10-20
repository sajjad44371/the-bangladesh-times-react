import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation, useParams } from "react-router";
import NewsCard from "../../components/HomeLayout/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const navigation = useNavigation();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (parseInt(id) === 0) {
      setCategoryNews(data);
      return;
    }

    if (parseInt(id) === 1) {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategoryNews(filteredNews);
      return;
    }

    const filteredNews = data.filter(
      (news) => news.category_id === parseInt(id)
    );
    setCategoryNews(filteredNews);
  }, [data, id]);

  if (navigation.state === "loading") {
    return (
      <>
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <h2 className="text-lg font-semibold mb-5">News</h2>
        <div className="grid grid-cols-1 gap-8">
          {categoryNews.map((news) => (
            <NewsCard key={news.id} news={news}></NewsCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryNews;
