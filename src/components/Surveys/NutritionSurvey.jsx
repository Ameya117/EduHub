import React, { useState } from "react";
import images from "/nutrition.avif";
import Options1 from "./Options1";
import Options2 from "./Options2";
import Options3 from "./Options3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NutritionSurvey = () => {
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
    q11: "",
  });

  const handleInputChange = (question, answer) => {
    setAnswers({
      ...answers,
      [question]: answer,
    });
  };

  const handleSubmit = () => {
    for (const key in answers) {
      if (answers[key] === "") {
        toast.error("Please answer all questions before submitting");
        return;
      }
    }

    toast.success(
      "Thanks for taking the survey. Check your email for further updates regarding your report",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );

    // Set submitted to true
    setSubmitted(true);
  };

  return (
    <>
      <div className="mx-10">
        <div className="relative flex justify-center overflow-hidden rounded-xl my-2">
          <img
            className="w-[100vw] h-[40vh] object-cover shadow-md"
            src={images}
            alt="Mental Health Survey"
          ></img>
          <div className="absolute my-[10rem]">
            <h1 className="font-bold text-[4rem] italic font text-black">
              Nutrition Survey
            </h1>
          </div>
        </div>
        <div className="mx-4 border-y-2 mt-8 ">
          <h2 className="text-4xl font-medium font-serif py-8">
            General Evaluation
          </h2>
        </div>
        <div className="mx-4 border-b-2 mt-8 ">
          <p className="text-xl font-extralight font-serif py-2">
            Over the last 2 weeks, how often have you been bothered by any of
            the following problems?
          </p>
          <p className="text-xl font-extralight font-serif py-2 text-red-500">
            Please note, all the fields are required.
          </p>
        </div>
        <div className="m-4 mt-[3rem] border-blue-200 border-4 rounded-xl p-4">
          <div className="flex flex-col gap-2 ">
            <div className="font-semibold text-2xl">
              1. How often do you eat fruits, vegetables, and whole grains?
            </div>
            <div className="font-extralight text-xl">
              <Options1
                onChange={(answer) => handleInputChange("q1", answer)}
              />
            </div>
            <div className="font-semibold text-2xl">
              2. Do you consume sugary drinks, processed foods, or red meat
              regularly?
            </div>
            <div className="font-extralight text-xl">
              <Options3
                onChange={(answer) => handleInputChange("q2", answer)}
              />
            </div>
            <div className="font-semibold text-2xl"></div>
            <div className="font-semibold text-2xl">
              3. Do you cook most of your meals at home?
            </div>
            <div className="font-extralight text-xl">
              <Options3
                onChange={(answer) => handleInputChange("q3", answer)}
              />
            </div>
            <div className="font-semibold text-2xl">
              4. Do you have any dietary restrictions or allergies?
            </div>
            <div className="font-extralight text-xl">
              <Options3
                onChange={(answer) => handleInputChange("q4", answer)}
              />
            </div>
            <div className="font-semibold text-2xl">
              5. How important do you consider healthy eating for your overall
              health?
            </div>
            <div className="font-extralight text-xl">
              <Options2
                onChange={(answer) => handleInputChange("q5", answer)}
              />
            </div>
            <div className="font-semibold text-2xl">
              6.Do you understand the role of different nutrients in your diet?
            </div>
            <div className="font-extralight text-xl">
              <Options3
                onChange={(answer) => handleInputChange("q6", answer)}
              />
            </div>
            <div className="font-semibold text-2xl">
              7. Do you or have you ever had cholesterol problems?
            </div>
            <div className="font-extralight text-xl">
              <Options3
                onChange={(answer) => handleInputChange("q7", answer)}
              />
            </div>
            <div className="font-semibold text-2xl">
              8 .What is your daily water intake ?
            </div>
            <div className="font-extralight text-xl">
              <Options2
                onChange={(answer) => handleInputChange("q8", answer)}
              />
            </div>
            <div className="font-semibold text-2xl">
              9. How often do you eat fast food or go to a restaurant?
            </div>
            <div className="font-extralight text-xl">
              <Options1
                onChange={(answer) => handleInputChange("q9", answer)}
              />
            </div>
            <div className="font-semibold text-2xl">
              10. How often do you drink alcohol?
            </div>
            <div className="font-extralight text-xl">
              <Options1
                onChange={(answer) => handleInputChange("q10", answer)}
              />
            </div>
            <div className="font-semibold text-2xl">
              11. If you want to share any other thoughts feel free to share
              them below
            </div>
            <div className="font-extralight text-xl">
              <input
                type="text"
                className="w-[50rem] h-[5rem] border border-gray-300 rounded-md py-1 px-4 focus:outline-none focus:border-blue-500 m-2"
                placeholder="Share your thoughts..."
              />
            </div>
          </div>

          {/* Other questions and options */}
        </div>
        <div className="text-center mt-4">
          <div>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-5 rounded w-[8rem] h-[3rem]"
              disabled={submitted} // Disable button after submission
            >
              {submitted ? "Submitted" : "Submit"}
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default NutritionSurvey;
