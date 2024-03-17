import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import NewsCard from "../NewsCard";
import Loading from "../Loading"

const News = () => {
  //useeffect
  const [news, setNews] = useState(null);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const getNews = async ()=>{
    try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${apiKey}`
        );
        let parsedData = await response.json();
        setNews(parsedData.articles);
      } catch (error) {
        console.log("error");
      }
  }

 
  useEffect(()=>{
    getNews();
  },[])

  return (
    <>
    // <div className="w-full mt-8 relative -top-16 md:-top-24">
    //   {/* <h1 className="text-3xl text-center font-semibold mb-3">Latest News</h1> */}
    //   {news ? (
    //     <Carousel
    //       opts={{
    //         align: "start",
    //       }}
    //       className="w-[75%] mx-auto"
    //     >
    //       <CarouselContent >
    //         {news.map((item) => {
    //           return (
    //             <div key={item.url} className="w-full">
    //               <CarouselItem className="md:basis-1/2 mx-2">
    //                 <NewsCard
    //                   title={item.title}
    //                   urlToImg={item.urlToImage}
    //                   url={item.url}
    //                   author={item.author}
    //                 />
    //               </CarouselItem>
    //             </div>
    //           );
    //         })}
    //       </CarouselContent>
    //       <CarouselPrevious />
    //       <CarouselNext />
    //     </Carousel>
    //   ) : (
    //     <div className="text-center mx-auto grid place-content-center">{<Loading/>}</div>
    //   )}
    // </div>
    </>
  )
};

export default News;
