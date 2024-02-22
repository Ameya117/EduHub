import React from "react";
import { ReviewCard } from "./ReviewCard";
import { motion } from "framer-motion";

const ReviewBox = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.18 * custom,
      },
    }),
  };
  return (
    <div className="mx-5">
      <div className="text-slate-950 text-4xl border-b-4 border-slate-400 pb-2 ">
        Customer Reviews
      </div>
      <div className="review-container flex gap-4 m-5">
        <motion.div
          className="h-[30vh] w-1/3"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        >
          <ReviewCard
            name="Alice Smith"
            occupation="Teacher"
            review="The health and education resources provided here are invaluable. They've greatly enhanced my classroom curriculum."
          />
        </motion.div>
        <motion.div
          className="h-[30vh] w-1/3"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
          custom={2}
        >
          <ReviewCard
            name="John Doe"
            occupation="Parent"
            review="As a parent, I've found the articles and advice on this website extremely helpful in navigating my child's health and education journey."
          />
        </motion.div>
        <motion.div
          className="h-[30vh] w-1/3"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
          custom={3}
        >
          <ReviewCard
            name="Mary Jason"
            occupation="Student"
            review="The articles and the results of the survey I have undertaken were beneficial in improving my mental as well as physical health"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewBox;
