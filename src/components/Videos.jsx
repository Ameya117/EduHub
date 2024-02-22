import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PhysicalVideos from "./VideoComponents/PhysicalVideos";
import MentalVideos from "./VideoComponents/MentalVideos";
import NutritionVideos from "./VideoComponents/NutritionVideos";

const Videos = () => {
  const location = useLocation();
  let element = <PhysicalVideos />;

  // useEffect(() => {
  //   console.log(location);
  // }, []);

  if (location.pathname === "/videos/physical") {
    element = <PhysicalVideos />;
  } else if (location.pathname === "/videos/mental") {
    element = <MentalVideos />;
  } else if (location.pathname === "/videos/nutrition") {
    element = <NutritionVideos />;
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row mt-12 justify-around">
        <h1
          className={` ${
            location.pathname === "/videos/physical"
              ? "bg-slate-100 rounded-t-xl"
              : ""
          } text-xl font-semibold w-1/3 text-center hover:bg-slate-100 rounded-t-xl h-8`}
        >
          <Link
            to="/videos/physical"
            className={`${
              location.pathname === "/videos/physical"
                ? "border-b-2 border-black pointer-events-none"
                : ""
            } align-middle`}
          >
            Physical
          </Link>
        </h1>
        <h1
          className={` ${
            location.pathname === "/videos/mental"
              ? "bg-slate-100 rounded-t-xl"
              : ""
          } text-xl font-semibold w-1/3 text-center hover:bg-slate-100 rounded-t-xl h-8`}
        >
          <Link
            to="/videos/mental"
            className={`${
              location.pathname === "/videos/mental"
                ? "border-b-2 border-black pointer-events-none"
                : ""
            } align-middle`}
          >
            Mental
          </Link>
        </h1>
        <h1
          className={` ${
            location.pathname === "/videos/nutrition"
              ? "bg-slate-100 rounded-t-xl"
              : ""
          } text-xl font-semibold w-1/3 text-center hover:bg-slate-100 rounded-t-xl h-8`}
        >
          <Link
            to="/videos/nutrition"
            className={`${
              location.pathname === "/videos/nutrition"
                ? "border-b-2 border-black pointer-events-none"
                : ""
            } align-middle`}
          >
            Nutrition
          </Link>
        </h1>
      </div>
      <hr />
      <div>{element}</div>
    </div>
  );
};

export default Videos;
