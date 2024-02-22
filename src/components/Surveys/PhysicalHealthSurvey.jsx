import React, { useState } from "react";
import images from "/physical_img.avif";
import Options1 from "./Options1";
import Options2 from "./Options2";
import Options3 from "./Options3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PhysicalHealthSurvey = () => {
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
      <div className="relative flex justify-center overflow-hidden m-4 rounded-xl">
        <img
          className="w-[100vw] h-[50vh] object-cover"
          src={images}
          alt="physical Health Survey"
        ></img>
        <div className="absolute my-[6rem]">
          <h1 className="font-bold text-[4rem] italic font text-black-200">
            Physical Health Survey
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
          Over the last 2 weeks, how often have you been bothered by any of the
          following problems?
        </p>
        <p className="text-xl font-extralight font-serif py-2 text-red-500">
          Please note, all the fields are required.
        </p>
      </div>
      <div className="m-4 mt-[3rem] border-blue-200 rounded-xl border-4 p-4">
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-2xl">
            1. How would you rate your overall physical health on a scale of 1
            to 10?
          </div>
          <div className="font-extralight text-xl">
            <Options2 onChange={(answer) => handleInputChange("q1", answer)} />
          </div>
          <div className="font-semibold text-2xl">
            2. How often do you engage in moderate-intensity physical
            activities, such as brisk walking or cycling, for at least 30
            minutes a day?
          </div>
          <div className="font-extralight text-xl">
            <Options1 onChange={(answer) => handleInputChange("q2", answer)} />
          </div>
          <div className="font-semibold text-2xl"></div>
          <div className="font-semibold text-2xl">
            3. Do you currently smoke cigarettes or use other tobacco products?
          </div>
          <div className="font-extralight text-xl">
            <Options3 onChange={(answer) => handleInputChange("q3", answer)} />
          </div>
          <div className="font-semibold text-2xl">
            4. Have you experienced any chronic pain or discomfort in the past
            month?
          </div>
          <div className="font-extralight text-xl">
            <Options3 onChange={(answer) => handleInputChange("q4", answer)} />
          </div>
          <div className="font-semibold text-2xl">
            5. How often do you engage in strength training exercises, such as
            lifting weights or bodyweight exercises, each week?
          </div>
          <div className="font-extralight text-xl">
            <Options1 onChange={(answer) => handleInputChange("q5", answer)} />
          </div>
          <div className="font-semibold text-2xl">
            6. How would you rate your stress level on a scale of 1 to 5?
          </div>
          <div className="font-extralight text-xl">
            <Options2 onChange={(answer) => handleInputChange("q6", answer)} />
          </div>
          <div className="font-semibold text-2xl">
            7. Are you currently experiencing any symptoms of illness or injury
            that affect your physical well-being?
          </div>
          <div className="font-extralight text-xl">
            <Options3 onChange={(answer) => handleInputChange("q7", answer)} />
          </div>
          <div className="font-semibold text-2xl">
            8 .Have you had any significant changes in your weight or body
            composition in the past year?
          </div>
          <div className="font-extralight text-xl">
            <Options3 onChange={(answer) => handleInputChange("q8", answer)} />
          </div>
          <div className="font-semibold text-2xl">
            9.How frequently do you experience symptoms of fatigue or
            exhaustion?
          </div>
          <div className="font-extralight text-xl">
            <Options1 onChange={(answer) => handleInputChange("q9", answer)} />
          </div>
          <div className="font-semibold text-2xl">
            10. Have you had any preventive health screenings or check-ups in
            the past year?
          </div>
          <div className="font-extralight text-xl">
            <Options3 onChange={(answer) => handleInputChange("q10", answer)} />
          </div>
          <div className="font-semibold text-2xl">
            11. If you want to share any other thoughts feel free to share them
            below
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
    </>
  );
};

export default PhysicalHealthSurvey;
