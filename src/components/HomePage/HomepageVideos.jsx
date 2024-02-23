import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../index.css";

const HomepageVideos = () => {
  const fadeInAnimationVariants1 = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };
  const fadeInAnimationVariants2 = {
    initial: {
      opacity: 0,
      x: 0,
    },
    animate: {
      opacity: 1,
      x: 15,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };
  return (
    <>
      <div className="mx-6 mb-6 mt-24">
        <div className="text-slate-950 text-5xl border-b-4 border-slate-400 pb-2 flex flex-row justify-between">
          <span className="teko-h1 font-semibold">Featured Videos</span>
          <span className="text-xl hover:tracking-wide hover:cursor-pointer hover:bg-slate-100 h-fit">
            <Link to="/videos">View All Videos &rarr;</Link>
          </span>
        </div>
        <div className="h-[40vh] mt-4 border-2 border-black rounded-xl m-2 p-2 flex">
          <iframe
            className="w-[80vw]"
            src="https://www.youtube.com/embed/azuBmRnRYpo?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1&loop=1"
            title="Why is physical education a student's most important subject? | William Simon, Jr. | TEDxUCLA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <motion.div
            className="text-slate-900 my-auto p-5 font-semibold italic text-xl hidden md:block"
            variants={fadeInAnimationVariants1}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            Join William Simon, Jr. in this captivating TED Talk as he explores
            the vital role of physical education in shaping young minds and
            bodies. Discover why physical education isn't just another
            subject—it's the cornerstone of holistic student development.
          </motion.div>
        </div>
        <div className="h-[40vh] mt-4 border-2 border-black rounded-xl m-2 p-2 flex">
          <motion.div
            className="text-slate-900 my-auto p-5 font-semibold italic text-xl hidden md:block"
            variants={fadeInAnimationVariants2}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            Constant exposure to our environment, the things we eat, and
            stresses from both inside and outside our bodies all cause us to age
            over time. This film explores those biological processes of aging,
            how we can maintain health throughout our lives with healthy
            lifestyles, and how scientists are learning more about the specific
            nutrients that can positively impact health.
          </motion.div>
          <iframe
            className="w-[80vw]"
            src="https://www.youtube.com/embed/c06dTj0v0sM?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1&loop=1"
            title="Nutrition for a Healthy Life"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="h-[40vh] mt-4 border-2 border-black rounded-xl m-2 p-2 flex">
          <iframe
            className="w-[80vw]"
            src="https://www.youtube.com/embed/oxx564hMBUI?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1&loop=1"
            title="What Is Mental Health?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <motion.div
            className="text-slate-900 my-auto p-5 font-semibold italic text-xl hidden md:block"
            variants={fadeInAnimationVariants1}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            “So efficient and hushed are our brains in their day to day
            operations, we are apt to miss what an extraordinary and complicated
            achievement it is to feel mentally well. A mind in a healthy state
            is, in the background, continually performing a near-miraculous set
            of manoeuvres that underpin our moods of clear-sightedness and
            purpose. To appreciate what mental health might be (and therefore
            what its opposite involves), we might take a moment to consider some
            of what will be going on in the folds of an optimally-functioning
            mind...”
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HomepageVideos;
