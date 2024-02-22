import React from "react";

const NewsCard = (props) => {
  const { title, urlToImg, url, author } = props;
  return (
    <>
      <div className="w-64 h-72 mx-5 rounded-xl overflow-hidden shadow-lg bg-[#edebeb] relative">
        <img
          className="w-full h-36 object-cover"
          src={urlToImg ? `${urlToImg}` : "/vite.svg"}
          alt="default"
        />
        <div className="flex flex-col justify-between">
          <h1 className="font-semibold px-2 pb-1">{title.slice(0, 45)}..</h1>
          {author ? (
            <h2 className="text-slate-900 mx-2 my-2"> {`By ${author}`}</h2>
          ) : (
            ""
          )}
          <a
            className="border-2 border-black m-2 rounded-md px-2 py-1 hover:bg-black hover:text-white transition-all self-end absolute bottom-0 right-0"
            href={url}
            target="_blank"
          >
            Know more
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
