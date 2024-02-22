import React from 'react';
import '../../index.css';
import HeadPhy from './HeadPhy';
import Footer from '../Footer';
import QNA from "../QNA";

const PhysicalHealthInfo = () => {
  return (
    <>
    {<HeadPhy/  >}
      <div className="di1">
        <h3> What is Physical Health?</h3>
        <p className='health-info-p'>
          {" "}
          Physical health can be defined as the normal functioning of the body.
          Representing one dimension of total well-being, it's about how your
          body grows, feels and moves, how you care for it, and what you put
          into it.Physical health can be managed by incorporating several key
          aspects into life. These include quality sleep, good nutrition,
          regular physical activity, good hygiene, relaxation, and routine
          preventative care.Physical health is not only the absence of sickness
          and disease, but it is the overall wellness of the body. It is
          important because it is intricately linked to other aspects of
          well-being. Mental health and social health are both impacted by
          physical health.
        </p>
        <img
          className="image5"
          src="https://img.freepik.com/free-vector/healthy-people-carrying-different-icons_53876-43069.jpg"
          alt="pic1"
        ></img>
      </div>

      <div>
        <h3>Four Pillars of Health</h3>
        <p className='health-info-p '>
          {" "}
          Maintaining good physical health decreases your risk of developing
          conditions such as heart disease, stroke and some cancers. Being
          physically healthy also helps you to manage life's challenges by
          protecting you against fatigue, injury and illness.
          <br />
          Physical health is closely linked to mental health and an integral
          part of leading a healthy lifestyle and enjoying life. This is often
          taken for granted and it isn't until we are sick, ill or injured that
          we put the time and energy in to looking after our physical health. It
          is important to regularly monitor your overall physical health and
          getting a check-up if you (or someone you know) are concerned.
          <br />
        </p>
        <p className='health-info-p'>
          The four pillars of health are:
          <li>Sleep (and recovery)</li>
          <li>Nutrition</li>
          <li>Physical Activity</li>
          <li>Connection</li>
        </p>

        <img
          className="image5"
          src="https://st2.depositphotos.com/3382541/11760/v/450/depositphotos_117601752-stock-illustration-sport-workout-concepts-set.jpg"
          alt="pic2"
        ></img>
      </div>
      <div className='mr-36'>
        <h3>Physical Health and Sleep</h3>
        <p className="t1">
          {" "}
          The relationship between sleep and overall physical health is complex
          and interconnected. Sleep allows both the body and brain to recover
          during the night, ensuring you feel refreshed and alert when you wake
          up in the morning. At the same time, your physical health and
          associated medical conditions can make it difficult to get the sleep
          you need. Sleep plays a vital role in your mental and physical
          wellbeing. Different processes that occur during sleep help to promote
          healthy brain activity and maintain good overall health. A lack of
          high-quality sleep means your body has less time to recover during the
          night. This can also lower your body's defenses against diseases and
          medical conditions.
        </p>
        <p className="t1">
          A person's physical health can impact whether or not they get enough
          high-quality sleep. Physical and mental illnesses can cause a person
          to fall short on sleep. Similarly, medications and supplements a
          person may take for health issues can negatively impact sleep duration
          Trusted Source UpToDate More than 2 million healthcare providers
          around the world choose UpToDate to help make appropriate care
          decisions and drive better health outcomes. UpToDate delivers
          evidence-based clinical decision support that is clear, actionable,
          and rich with real-world insights. View Source and quality. While
          people often become sleep-deprived because they do not get enough
          sleep, it can also stem from not getting enough quality sleep. Even a
          person who sleeps eight hours per night can become sleep-deprived if
          their sleep quality is poor. Poor sleep quality usually results from a
          person waking up during the night, even if these awakenings are brief
          and not remembered. Sleep disorders, like obstructive sleep apnea and
          periodic limb movement disorder, can cause multiple awakenings during
          the night and reduce sleep quality. Hormonal fluctuations that occur
          during the menstrual cycle, pregnancy, and menopause can also
          interfere with getting quality sleep.
        </p>

      
      </div>
      <div>
        <h3>Ways to increase Physical Activity</h3>
        <p className="t11 w-[70%]">
          Countries and communities must take action to provide everyone with
          more opportunities to be active, in order to increase physical
          activity. This requires a collective effort, both national and local,
          across different sectors and disciplines to implement policy and
          solutions appropriate to a country's cultural and social environment
          to promote, enable and encourage physical activity.
        </p>
        <ul className="l1">
          <li type="circle">
            Policies to increase physical activity aim to ensure that walking,
            cycling and other forms of active non-motorized forms of transport
            are accessible and safe for all
          </li>
          <li type="circle">
            labour and workplace policies encourage active commuting and
            opportunities for being physically active during the work day
          </li>
          <li type="circle">
            childcare, schools and higher education institutions provide
            supportive and safe spaces and facilities for all students to spend
            their free time actively
          </li>
          <li type="circle">
            primary and secondary schools provide quality physical education
            that supports children to develop behaviour patterns that will keep
            them physically active throughout their lives
          </li>
          <li type="circle">
            community-based and school-sport programmes provide appropriate
            opportunities for all ages and abilities
          </li>
          <li type="circle">
            sports and recreation facilities provide opportunities for everyone
            to access and participate in a variety of different sports, dance,
            exercise and active recreation
          </li>
          <li type="circle">
            health care providers advise and support patients to be regularly
            active.
          </li>
        </ul>
        <img
          className="image5"
          src="https://i.pinimg.com/originals/c1/b9/ab/c1b9ab7396615778f2a0903d420cd10f.gif"
        ></img>
        <QNA/>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default PhysicalHealthInfo;
