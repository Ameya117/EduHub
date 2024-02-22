import React, { useState } from "react";
import images from "/Mental.avif";
import Options1 from "./Options1";
import Options2 from "./Options2";
import Options3 from "./Options3";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../index.css"

const MentalHealthSurvey = () => {
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
    
  });

  const handleInputChange = (question, answer) => {
    setAnswers({
      ...answers,
      [question]: answer,
    });
  };

  const handleSubmit = () => {
    // Check if all questions are answered
    for (const key in answers) {
      if (answers[key] === "") {
        toast.error("Please answer all questions before submitting");
        return;
      }
    }

    // Logic for submitting the form (if needed)

    // Display toast message
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
        <div className="relative flex justify-center rounded-xl overflow-hidden my-4">
          <img
            className="w-[100vw] h-[50vh] object-cover survey-img"
            src={images}
            alt="Mental Health Survey"
          />
          <div className="absolute my-[6rem]">
            <h1 className="font-bold text-[4rem] text-amber-400 italic font">
              Mental Health Survey
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
        <div className="m-4 mt-[3rem]">
          <div className="flex flex-col gap-2 border-blue-200 border-2 rounded-xl p-4 ">
            <div className="font-semibold text-2xl">
              1. How often do you feel overwhelmed by your daily
              responsibilities?
            </div>
            <div className="font-extralight text-xl">
              <Options1
                onChange={(answer) => handleInputChange("q1", answer)}
              />
            </div>
            <div className="font-semibold text-2xl">
              2. Have you experienced persistent feelings of sadness or
              hopelessness in the past month?
            </div>
            <div className="font-extralight text-xl">
              <Options3
                onChange={(answer) => handleInputChange("q2", answer)}
              />
            </div>
            <div className="font-semibold text-2xl"></div>
            <div className="font-semibold text-2xl">
              3. How would you rate your overall stress level on a scale of 1 to
              5?
            </div>
            <div className="font-extralight text-xl">
              <Options2
                onChange={(answer) => handleInputChange("q3", answer)}
              />
            </div>
            <div className="font-semibold text-2xl">
              4.Have you ever experienced panic attacks or sudden feelings of
              intense fear?
            </div>
            <div className="font-extralight text-xl">
              <Options3
                onChange={(answer) => handleInputChange("q4", answer)}
              />
            </div>
            <div className="font-semibold text-2xl">
              5. How would you rate your self-esteem and confidence levels?
            </div>
            <div className="font-extralight text-xl">
              <Options2
                onChange={(answer) => handleInputChange("q5", answer)}
              />
            </div>
            <div className="font-semibold text-2xl">
              6. Have you experienced traumatic events or significant life
              changes in the past year?
            </div>
            <div className="font-extralight text-xl">
              <Options3
                onChange={(answer) => handleInputChange("q6", answer)}
              />
            </div>
            <div className="font-semibold text-2xl">
              7. How often do you engage in activities that you enjoy or find
              fulfilling?
            </div>
            <div className="font-extralight text-xl">
              <Options1
                onChange={(answer) => handleInputChange("q7", answer)}
              />
            </div>
            <div className="font-semibold text-2xl">
              8 .Do you have trouble setting boundaries or saying no to others?
            </div>
            <div className="font-extralight text-xl">
              <Options3
                onChange={(answer) => handleInputChange("q8", answer)}
              />
            </div>
            <div className="font-semibold text-2xl">
              9. How satisfied are you with your work or school life?
            </div>
            <div className="font-extralight text-xl">
              <Options2
                onChange={(answer) => handleInputChange("q9", answer)}
              />
            </div>
            <div className="font-semibold text-2xl">
              10. Have you ever sought professional help for mental health
              concerns?
            </div>
            <div className="font-extralight text-xl">
              <Options3
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
        <div className="text-center mt-8">
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
      <Footer />
    </>
  );
};

export default MentalHealthSurvey;
