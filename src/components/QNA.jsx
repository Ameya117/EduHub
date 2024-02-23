import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
const QNA = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);
  const [isFlipped6, setIsFlipped6] = useState(false);

  const handleClick1 = () => {
    setIsFlipped1((prevState) => !prevState);
  };

  const handleClick2 = () => {
    setIsFlipped2((prevState) => !prevState);
  };

  const handleClick3 = () => {
    setIsFlipped3((prevState) => !prevState);
  };

  const handleClick4 = () => {
    setIsFlipped4((prevState) => !prevState);
  };

  const handleClick5 = () => {
    setIsFlipped5((prevState) => !prevState);
  };

  const handleClick6 = () => {
    setIsFlipped6((prevState) => !prevState);
  };

  return (
    <>
      <div className="hia">
        <h3>Frequently Asked Questions</h3>
        <hr />
      </div>
      <div className="gap-y-[2rem] grid grid-cols-1 lg:grid-cols-3 mt-10">
        <ReactCardFlip isFlipped={isFlipped1} flipDirection="verical">
          <div className="h-[20rem] w-[20rem] bg-slate-200 flex flex-col justify-center items-center mx-auto rounded-xl border-b-4 border-blue-400">
            <h1 className="p-2 text-2xl font-semibold text-center">
              What are the benefits of regular exercise?
            </h1>
            <button className="hover:underline" onClick={handleClick1}>
              Click to view answer
            </button>
          </div>
          <div className="h-[20rem] w-[20rem] bg-blue-100 flex flex-col justify-center items-center mx-auto rounded-xl">
            <div className=" p-2 font-extralight text-center">
              Regular exercise offers numerous benefits, including improved
              cardiovascular health, increased muscle strength and endurance,
              better mood and mental health, weight management, and reduced risk
              of chronic diseases like diabetes and heart disease.
            </div>
            <button className="hover:underline" onClick={handleClick1}>
              Click to flip
            </button>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped2} flipDirection="vertical">
          <div className="h-[20rem] w-[20rem] bg-slate-200 flex flex-col justify-center items-center mx-auto rounded-xl border-b-4 border-blue-400">
            <h1 className="p-2 text-2xl font-semibold text-center">
              How can I improve my diet for better health?
            </h1>
            <button className="hover:underline" onClick={handleClick2}>
              Click to view answer
            </button>
          </div>
          <div className="h-[20rem] w-[20rem] bg-blue-100 flex flex-col justify-center items-center mx-auto rounded-xl">
            <div className="p-2 font-extralight text-center">
              Improving your diet involves incorporating more fruits,
              vegetables, whole grains, lean proteins, and healthy fats into
              your meals. It's also important to limit processed foods, sugary
              snacks, and excessive salt intake. Additionally, staying hydrated
              by drinking plenty of water throughout the day is crucial for
              overall health.
            </div>
            <button className="hover:underline" onClick={handleClick2}>
              Click to flip
            </button>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped3} flipDirection="vertical">
          <div className="h-[20rem] w-[20rem] bg-slate-200 flex flex-col justify-center items-center mx-auto rounded-xl border-b-4 border-blue-400">
            <h1 className="p-2 text-2xl font-semibold text-center">
              What are the warning signs of a stroke?
            </h1>
            <button className="hover:underline" onClick={handleClick3}>
              Click to view answer
            </button>
          </div>
          <div className="h-[20rem] w-[20rem] bg-blue-100 flex flex-col justify-center items-center mx-auto rounded-xl">
            <div className="font-extralight  text-center p-2">
              Common warning signs of a stroke include sudden numbness or
              weakness in the face, arm, or leg (especially on one side of the
              body), confusion, trouble speaking or understanding speech,
              difficulty walking, dizziness, and severe headache. If you or
              someone you know experiences these symptoms, it's important to
              seek medical attention immediately.
            </div>
            <button className="hover:underline" onClick={handleClick3}>
              Click to flip
            </button>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped4} flipDirection="vertical">
          <div className="h-[20rem] w-[20rem] bg-slate-200 flex flex-col justify-center items-center mx-auto rounded-xl border-b-4 border-blue-400">
            <h1 className="p-2 text-2xl font-semibold text-center">
              How much sleep do I need each night?
            </h1>
            <button className="hover:underline" onClick={handleClick4}>
              Click to view answer
            </button>
          </div>
          <div className="h-[20rem] w-[20rem] bg-blue-100 flex flex-col justify-center items-center mx-auto rounded-xl">
            <div className="font-extralight  text-center p-2">
              The amount of sleep needed varies depending on age, but generally,
              adults should aim for 7-9 hours of sleep each night for optimal
              health and well-being. Getting enough quality sleep is essential
              for cognitive function, mood regulation, immune function, and
              overall physical health.
            </div>
            <button className="hover:underline" onClick={handleClick4}>
              Click to flip
            </button>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped5} flipDirection="vertical">
          <div className="h-[20rem] w-[20rem] bg-slate-200 flex flex-col justify-center items-center mx-auto rounded-xl border-b-4 border-blue-400">
            <h1 className="p-2 text-2xl font-semibold text-center">
              What are some strategies for managing stress?
            </h1>
            <button className="hover:underline" onClick={handleClick5}>
              Click to view answer
            </button>
          </div>
          <div className="h-[20rem] w-[20rem] bg-blue-100 flex flex-col justify-center items-center mx-auto rounded-xl">
            <div className="font-extralight  text-center p-2">
              Effective stress management techniques include regular exercise,
              deep breathing exercises, meditation and mindfulness practices,
              spending time outdoors, engaging in hobbies or activities you
              enjoy, maintaining a healthy work-life balance, and seeking
              support from friends, family, or a mental health professional when
              needed.
            </div>
            <button className="hover:underline" onClick={handleClick5}>
              Click to flip
            </button>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped6} flipDirection="vertical">
          <div className="h-[20rem] w-[20rem] bg-slate-200 flex flex-col justify-center items-center mx-auto rounded-xl border-b-4 border-blue-400">
            <h1 className="p-2 text-2xl font-semibold text-center">
              How can I prevent the spread of infectious diseases?
            </h1>
            <button className="hover:underline" onClick={handleClick6}>
              Click to view answer
            </button>
          </div>
          <div className="h-[20rem] w-[20rem] bg-blue-100 flex flex-col justify-center items-center mx-auto rounded-xl border-t-4">
            <div className="font-extralight  text-center p-2">
              Preventing the spread of infectious diseases involves practicing
              good hygiene habits, such as washing your hands frequently with
              soap and water, covering your mouth and nose when coughing or
              sneezing, staying home when you're sick, getting vaccinated
              against preventable diseases, and avoiding close contact with
              people who are sick.
            </div>
            <button className="hover:underline" onClick={handleClick6}>
              Click to flip
            </button>
          </div>
        </ReactCardFlip>
      </div>
    </>
  );
};

export default QNA;
