import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import VideoCard from "./VideoCard";

const NutritionVideos = () => {
    const data = [
        {
          id: "0011",
          thumbnail: "/img2.jpeg",
          author: "author1",
          title: "Understanding Micronutrients: Vitamins and Minerals",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio est eos consequatur. Ad quaerat veniam est, sequi dolor accusantium.",
        },
        {
          id: "0012",
          thumbnail: "/img3.webp",
          author: "author2",
          title: "The Impact of Sugar on Health",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio est eos consequatur. Ad quaerat veniam est, sequi dolor accusantium.",
        },
        {
          id: "0013",
          thumbnail: "/img4.jpeg",
          author: "author3",
          title: "Eating for Energy: Foods that Fuel Your Body",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio est eos consequatur. Ad quaerat veniam est, sequi dolor accusantium.",
        },
        {
          id: "0014",
          thumbnail: "/img1.jpeg",
          author: "author4",
          title: "Random Title",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio est eos consequatur. Ad quaerat veniam est, sequi dolor accusantium.",
          
        },
      ];
      return (
        <div className="rounded-lg mx-2 lg:mx-12">
          {/* <h1 className='text-xl'>Physical Videos</h1> */}
          <ScrollArea className="h-[75vh] my-4 w-full">
            {data.map((item) => {
              return (
                <div key={item.id}>
                  <VideoCard
                    id={item.id}
                    author={item.author}
                    title={item.title}
                    description={item.description}
                    thumbnail={item.thumbnail}
                  />
                </div>
              );
            })}
          </ScrollArea>
        </div>
      );
}

export default NutritionVideos
