import React from "react";
import Footer from "../Footer";
import QNA from "../QNA";

const MentalHealthInfo = () => {
  return (
    <>
      <div id="1">
        <h3>What is Mental Health?</h3>
        <p className="what">
          Mental health is a state of mental well-being that enables people to
          cope with the stresses of life, realize their abilities, learn well
          and work well, and contribute to their community.
        </p>
        <img
          className="image"
          src="https://tse4.mm.bing.net/th?id=OIP.Bl1YBCNlKejCpXhtWRDzkAHaGJ&pid=Api&P=0&h=180"
          alt="Mental Health"
        ></img>
      </div>

      <div id="2">
        <h3>Early signs of a mental disorder:</h3>
        <p className="ml-80 w-[65%]">
          No physical test or scan reliably indicates whether a person has
          developed a mental illness. However, people should look out for the
          following as possible signs of a mental health disorder:
        </p>
        <ul className="l1">
          <li type="circle">withdrawing from friends, family, and colleagues</li>
          <li type="circle">avoiding activities they would normally enjoy.</li>
          <li type="circle">sleeping too much or too little</li>
          <li type="circle">eating too much or too little.</li>
          <li type="circle">
            using mood-altering substances, including alcohol and nicotine, more
            frequently
          </li>
          <li type="circle">thinking of causing physical harm to themselves or others</li>
        </ul>
        <img
          className="image1"
          src="https://static.vecteezy.com/system/resources/previews/000/429/977/large_2x/vector-mental-health-illustration.jpg"
          alt="effects of mental health"
        ></img>
      </div>
      <div id="3">
        <h3>Some key points about mental health:</h3>
        <p id="t1" className="ml-80 w-[65%]">
          Mental health is a broad topic encompassing our emotional,
          psychological, and social well-being.
        </p>
        <ul className="l1">
          <li type="circle">
            Mental Illness vs. Mental Health: Mental illness refers to
            diagnosable conditions that affect a person's thinking, feeling,
            mood, or behavior. Mental health, on the other hand, is a broader
            concept that includes emotional well-being, resilience, and the
            ability to enjoy life.
          </li>
          <li type="circle">
            Stigma Surrounding Mental Health: Despite efforts to reduce stigma,
            mental health conditions are still often stigmatized. This can lead
            to discrimination, reluctance to seek help, and feelings of shame or
            isolation for those experiencing mental health challenges.
          </li>
          <li type="circle">
            Self-Care and Prevention: Taking care of your mental health is
            essential for overall well-being. Practices like regular exercise,
            healthy eating, adequate sleep, stress management, mindfulness,
            social support, and setting boundaries can help promote good mental
            health and resilience.
          </li>
          <li type="circle">
            Seeking Help: It's important to remember that mental health issues
            are common and treatable. If you or someone you know is struggling
            with mental health concerns, seeking help from a mental health
            professional, such as a therapist, psychologist, or psychiatrist,
            can be incredibly beneficial.
          </li>
        </ul>
        <img
          className="image3"
          src="https://static.vecteezy.com/system/resources/previews/000/574/015/original/vector-doctors-help-the-brain-world-mental-health-day-concept.jpg"
          alt="be strong!"
        ></img>
      </div>
      <div className="al" id="4">
        <h3>Healthy ways to cope with stress</h3>
        <p className="ml-80 w-[65%]">
          Here are some ways you can manage stress, anxiety, grief, or
          worry.Keep these in mind whwnver you feel low!
        </p>
        <ul className="l1">
          <li type="circle">
            Take breaks from news stories, including those on social media.
          </li>
          <li type="circle">
            Take care of your body: Staying physically healthy can improve your
            emotional well-being.
          </li>
          <li type="circle">Avoid smoking, vaping,and the use of other tobacco products</li>
          <li type="circle">
            ontinue with regular health appointments, tests, screenings, and
            vaccinations.
          </li>
          <li type="circle">Make time to unwind.</li>
        </ul>
        <img
          className="image4"
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmNmNmwybTM2OXVqcTZyaHU3NGk0NGFsdHIxcjkwYmtla2FiNTRlZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Rb0qg5uHQXQ1rP6Pw5/giphy.gif"
          alt="dont worry!"
        ></img>
      </div>
      <QNA/>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default MentalHealthInfo;
