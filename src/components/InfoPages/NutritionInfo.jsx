import React from "react";
import Footer from "../Footer";
import '../../index.css'
import QNA from "../QNA";
import HeadNutrition from "./HeadNutrition";
const NutritionInfo = () => {
  return (
    <>
    <HeadNutrition />
      <div className="di1">
        <h3>What is Nutritional Health?</h3>
        <p className="w-[80vw] mx-auto">
          Nutrition is a critical part of health and development. Better
          nutrition is related to improved infant, child and maternal health,
          stronger immune systems, safer pregnancy and childbirth, lower risk of
          non-communicable diseases (such as diabetes and cardiovascular
          disease), and longevity. Healthy children learn better. People with
          adequate nutrition are more productive and can create opportunities to
          gradually break the cycles of poverty and hunger. Malnutrition, in
          every form, presents significant threats to human health. Today the
          world faces a double burden of malnutrition that includes both
          undernutrition and overweight, especially in low- and middle-income
          countries. There are multiple forms of malnutrition, including
          undernutrition (wasting or stunting), inadequate vitamins or minerals,
          overweight, obesity, and resulting diet-related noncommunicable
          diseases. The developmental, economic, social, and medical impacts of
          the global burden of malnutrition are serious and lasting for
          individuals and their families, for communities and for countries.
        </p>
        <img
          className="image"
          src="https://www.mlchc.org/sites/default/files/styles/max_650x650/public/2022-03/nutrition_image2.jpg?itok=fUi0J40D"
          alt="Nutrition"
        ></img>
      </div>

      <div>
        <h3>Balanced Diet</h3>
        <p className="w-[80vw] mx-auto">
          A healthy diet or balanced diet is a diet (what you eat) that contains
          the right amounts of all the food groups. It includes fruit,
          vegetables, grains, dairy products, and protein. It does not include
          too much or too little of any kind of food.Eating wrong amounts of a
          food group, whether it be too much or too little, is called an
          'unhealthy diet' or an 'imbalanced diet'. A healthy diet is one that
          includes more foods that come from plants and fewer convenience foods.
        </p>

        <img
          className="image1"
          src="https://miro.medium.com/v2/resize:fit:800/1*MnOgAYNnG_-OypVEPnrIsg.jpeg"
          alt="pic2"
        ></img>
      </div>
      <div>
        <h3>Essential Components of a Balanced Diet</h3>
        <p className="t1">
          There are seven essential components of a balanced diet:
        </p>
        <ul className="l1">
          <li type="circle">
            Carbohydrates - Carbohydrates provide you with energy, which should
            constitute 50- 60% of your diet. Though it forms a significant diet
            component, you should not treat all carbs equally
          </li>
          <li type="circle">
            Protein - Protein helps you build muscles and develops skin and
            hair. It should constitute 10-12% of your diet.
          </li>
          <li type="circle">
            Fat - It is a misconception that fats are bad for your health. It
            would be best if you chose healthy fats as fats help you maintain
            your body temperature and help absorb fat-soluble vitamins A,D,E and
            K.
          </li>
          <li type="circle">
            Vitamins- Vitamins are organic substances that are generally
            classified as either fat soluble or water soluble.It cannot be
            synthesised by the body.It helps to carry out various functions in
            our{" "}
          </li>
          <li type="circle">
            Minerals - Minerals help release energy from the food you take and
            promote the growth of organs. Some essential minerals are iron,
            calcium, potassium, iodine, and sodium.
          </li>
          <li type="circle">
            Fibre - Fibre helps in digestion and also helps in lowering your
            cholesterol levels and controlling sugar levels.
          </li>
          <li type="circle">
            Water - It is one of most important components that is necessary for
            survival.
          </li>
        </ul>

        <img
          class="image3"
          src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2017/04/healthy-eating-triangle.png"
          alt="pic3"
        ></img>
      </div>
      <div>
        <h3>Creating a Balanced Diet</h3>
        <p className="t11">
          The creation of a balanced diet includes many factors.individual
          dietary needs can vary based on factors like age, activity level, and
          underlying health conditions. Some helpful tips that may help you
          create a balanced diet are:
        </p>
        <ul className="l1">
          <li type="circle">
            Portion Control: Be mindful of portion sizes to avoid overeating.
            Use smaller plates and listen to your body's hunger cues.
          </li>
          <li type="circle">
            Variety: Consume a wide range of foods to ensure you get a diverse
            array of nutrients.
          </li>
          <li type="circle">
            Moderation: Enjoy treats and less nutritious foods in moderation to
            maintain balance.
          </li>
          <li type="circle">
            Meal Planning: Plan meals ahead to ensure they include a mix of food
            groups. This can help you avoid relying on convenience or fast
            foods.
          </li>
          <li type="circle">
            Hydration:Water is an essential part for nutritional health and
            holds an important place in the diet.
          </li>
        </ul>
        <img
          className="image4"
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzcyNzl0bGE4bGJucmZ5NWRjbzlzNjI4bGlzZ3poa3Y4NXJmMTloOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AhUISJe5V5vC2Jbj55/giphy.gif"
        ></img>
      </div>
      <QNA />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default NutritionInfo;
