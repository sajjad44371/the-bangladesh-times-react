import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import SocialLogin from "../../components/HomeLayout/SocialLogin";
import FindUs from "../../components/HomeLayout/FindUs";
import Qzone from "../../components/HomeLayout/Qzone";
import News from "../../components/News/News";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const newsData = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = newsData.find((singleNews) => singleNews.id === id);
    setNews(newsDetails);
  }, [newsData, id]);
  return (
    <>
      <div>
        <header>
          <Header></Header>
        </header>
        <main className="w-11/12 mx-auto grid grid-cols-12 gap-8 mt-[40px]">
          <section className="col-span-9">
            <News news={news}></News>
          </section>
          <section className="col-span-3 space-y-8">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
          </section>
        </main>
      </div>
    </>
  );
};

export default NewsDetails;
