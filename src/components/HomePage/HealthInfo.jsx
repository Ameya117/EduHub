import React from "react";
import "../../index.css";
import { Link, useNavigate } from "react-router-dom";
import { motion, useTransform, useScroll } from "framer-motion";

const HealthInfo = () => {
  const navigate = useNavigate();
  const handlePhysicalSurvey = () => {
    navigate("/survey/physical");
  };

  const handleMentalSurvey = () => {
    navigate("/survey/mental");
  };
  const handleNutritionSurvey = () => {
    navigate("/survey/nutrition");
  };
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.7]);

  return (
    <div className="flex flex-col md:flex-row justify-evenly healthinfo-card-group my-4 ml-12">
      <motion.div style={{ scale }}>
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        />
        <div className="healthinfo-card h-48 shadow-sm pt-3 border-2 rounded-lg border-blue-400 w-72 my-12 md:my-0">
          <Link to="/physicalhealth/info" className="w-[10%] lg:w-[20%]">
            <h1 className="text-center font-semibold text-xl">Physical Health</h1>
            <span className="material-symbols-outlined flex justify-center">
              cardiology
            </span>
            <div className="healthinfo mx-2">
              <p className="text-disappear">
                Survey your way to better health! Share your thoughts and help
                us improve.{" "}
              </p>
            </div>
          </Link>
          <span
            className="material-symbols-outlined hover:cursor-pointer grid place-content-center my-2 w-fit mx-auto"
            onClick={handlePhysicalSurvey}
          >
            open_in_new
          </span>
        </div>
      </motion.div>

      <motion.div style={{ scale }}>
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        />
        <div className="healthinfo-card h-48 shadow-sm pt-3 border-2 rounded-lg border-blue-400 w-72 my-12 md:my-0">
          <Link to="/mentalhealth/info" className="w-[20%]">
            <h1 className="text-center font-semibold text-xl">Mental Health</h1>
            <span className="material-symbols-outlined flex justify-center">
              neurology
            </span>
            <div className="healthinfo m-2">
              <p className="text-disappear text-base">
                Let's build a healthier future together! Participate in our
                mental health survey now.{" "}
              </p>
            </div>
          </Link>
          <span
            className="material-symbols-outlined hover:cursor-pointer grid place-content-center my-2 w-fit mx-auto"
            onClick={handleMentalSurvey}
          >
            open_in_new
          </span>
        </div>
      </motion.div>

      <motion.div style={{ scale }}>
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        />
        <div className="healthinfo-card h-48 shadow-sm pt-3 border-2 rounded-lg border-blue-400 w-72 my-12 md:my-0">
          <Link to="/nutrition/info" className="w-[20%]">
            <h1 className="text-center font-semibold text-xl">Nutrition</h1>
            <span className="material-symbols-outlined  flex justify-center">
              nutrition
            </span>
            <div className="healthinfo m-2">
              <p className="text-disappear">
                Get personalized nutrition tips! Complete the survey and receive
                a tailored report.{" "}
              </p>
            </div>
          </Link>
          <span
            className="material-symbols-outlined hover:cursor-pointer grid place-content-center my-2 w-fit mx-auto"
            onClick={handleNutritionSurvey}
          >
            open_in_new
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default HealthInfo;
