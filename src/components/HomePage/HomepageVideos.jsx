import React from "react";
import { Link } from "react-router-dom";

const HomepageVideos = () => {
  return (
    <>
      <div className="mx-6 mb-6 mt-24">
        <div className="text-slate-950 text-4xl border-b-4 border-slate-400 pb-2 flex flex-row justify-between">
          <span>Featured Videos</span>
          <span className="text-xl hover:tracking-wide hover:cursor-pointer">
            <Link to="/videos">View All Videos &rarr;</Link>
          </span>
        </div>
        <div className="h-[40vh] mt-4 border-2 border-black rounded-lg m-2 p-2 flex">
          <iframe
            className="w-[80vw]"
            src="https://www.youtube.com/embed/azuBmRnRYpo?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1&loop=1"
            title="Why is physical education a student's most important subject? | William Simon, Jr. | TEDxUCLA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div className="text-slate-900 my-auto p-5 font-semibold italic text-xl hidden md:block">
            Join William Simon, Jr. in this captivating TED Talk as he explores
            the vital role of physical education in shaping young minds and
            bodies. Discover why physical education isn't just another
            subject—it's the cornerstone of holistic student development.
          </div>
        </div>
        <div className="h-[40vh] mt-4 border-2 border-black rounded-lg m-2 p-2 flex">
          <div className="text-slate-900 my-auto p-5 font-semibold italic text-xl hidden md:block">
            Constant exposure to our environment, the things we eat, and
            stresses from both inside and outside our bodies all cause us to age
            over time. This film explores those biological processes of aging,
            how we can maintain health throughout our lives with healthy
            lifestyles, and how scientists are learning more about the specific
            nutrients that can positively impact health.
          </div>
          <iframe
            className="w-[80vw]"
            src="https://www.youtube.com/embed/c06dTj0v0sM?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1&loop=1"
            title="Nutrition for a Healthy Life"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="h-[40vh] mt-4 border-2 border-black rounded-lg m-2 p-2 flex">
          <iframe
            className="w-[80vw]"
            src="https://www.youtube.com/embed/oxx564hMBUI?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1&loop=1"
            title="What Is Mental Health?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="text-slate-900 my-auto p-5 font-semibold italic text-xl hidden md:block">
            “So efficient and hushed are our brains in their day to day
            operations, we are apt to miss what an extraordinary and complicated
            achievement it is to feel mentally well. A mind in a healthy state
            is, in the background, continually performing a near-miraculous set
            of manoeuvres that underpin our moods of clear-sightedness and
            purpose. To appreciate what mental health might be (and therefore
            what its opposite involves), we might take a moment to consider some
            of what will be going on in the folds of an optimally-functioning
            mind...”
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageVideos;
