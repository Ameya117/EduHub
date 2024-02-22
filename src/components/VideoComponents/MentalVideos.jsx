import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import VideoCard from "./VideoCard";

const MentalVideos = () => {
  const data = [
    {
      id: "0005",
      thumbnail: "/img4.jpeg",
      author: "author1",
      title: "Understanding Mental Health: Breaking the Stigma",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio est eos consequatur. Ad quaerat veniam est, sequi dolor accusantium.",
    },
    {
      id: "0006",
      thumbnail: "/img3.webp",
      author: "author2",
      title: "Self-Care for Mental Health: Prioritizing Your Well-Being",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio est eos consequatur. Ad quaerat veniam est, sequi dolor accusantium.",
    },
    {
      id: "0007",
      thumbnail: "/img2.jpeg",
      author: "author3",
      title: "Building Resilience: Strengthening Mental Health in Tough Times",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio est eos consequatur. Ad quaerat veniam est, sequi dolor accusantium.",
    },
    {
      id: "0008",
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

export default MentalVideos
