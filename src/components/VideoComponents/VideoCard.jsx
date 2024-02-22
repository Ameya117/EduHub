import React from "react";

const VideoCard = (props) => {
  const { id, author, title, description, thumbnail } = props;
  return (
    <div className="flex flex-row rounded-xl overflow-hidden h-1/2 w-full my-10 border-2 border-black bg-slate-50">
      <div>
        <img
          className="object-cover lg:w-[30vw] h-full p-2"
          src={`${thumbnail}`}
          alt="thumbnail"
        />
      </div>
      <div className="flex flex-col mx-2">
        <h1 className="text-3xl font-bold my-2">{title}</h1>
        <h1 className="text-xl my-4">{description}</h1>
      </div>
    </div>
  );
};

export default VideoCard;
