import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import VideoCard from "./VideoCard";
import Loading from "../Loading";

const PhysicalVideos = () => {
  const data = [
    {
      id: "0001",
      thumbnail: "/img1.jpeg",
      author: "author1",
      title: "The Importance of Regular Exercise",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio est eos consequatur. Ad quaerat veniam est, sequi dolor accusantium.",
    },
    {
      id: "0002",
      thumbnail: "/img2.jpeg",
      author: "author2",
      title: "Preventing Common Injuries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio est eos consequatur. Ad quaerat veniam est, sequi dolor accusantium.",
    },
    {
      id: "0003",
      thumbnail: "/img3.webp",
      author: "author3",
      title: "Sleep Hygiene",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio est eos consequatur. Ad quaerat veniam est, sequi dolor accusantium.",
    },
    {
      id: "0004",
      thumbnail: "/img4.jpeg",
      author: "author4",
      title: "Random Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio est eos consequatur. Ad quaerat veniam est, sequi dolor accusantium.",
    },
  ];
  return (
    <div className="rounded-lg mx-2 lg:mx-12">
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
};

export default PhysicalVideos;
