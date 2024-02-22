import React from "react";

export const ReviewCard = ({ name, occupation, review }) => {
  return (
    <>
      <div className="review-card p-5 rounded-xl bg-blue-50 border-blue-400 border-2">
        <h3 className="text-3xl font-extrabold decoration-slate-600 text-blue-400">
          {name}
        </h3>
        <p className="font-semibold font-serif my-5 text-xl">{occupation}</p>
        <p className="text-xl font-thin">{review}</p>
      </div>
    </>
  );
};
