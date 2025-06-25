import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="A trip to Indonesia is nothing short of magical. From the tranquil beaches of Bali to the ancient temples of Yogyakarta, every corner is rich with culture, color, and charm. You can hike up the smoky peaks of Mount Bromo at sunrise, dive into the crystal-clear waters of Raja Ampat, or wander through the lush rice terraces of Ubud. The locals are warm, the food is bursting with flavor, and the landscapes are truly unforgettable. Indonesia is a place where adventure meets serenity — a journey that stays in your heart long after you leave."
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="A trip to Malaysia is a colorful blend of nature, culture, and modern wonders. From the futuristic skyline of Kuala Lumpur with its iconic Petronas Towers, to the historic streets of George Town in Penang, every destination tells a story. Explore lush rainforests, relax on the stunning beaches of Langkawi, or dive into the vibrant food scenes at local night markets. With its rich cultural mix of Malay, Chinese, and Indian influences, Malaysia offers a truly unique and unforgettable travel experience."
        />
        <TripData
          image={Trip3}
          heading="Trip in Paris"
          text="A trip to Paris feels like stepping into a romantic postcard. From the elegant Eiffel Tower sparkling at night to the charming cobblestone streets of Montmartre, every moment feels magical. Mornings begin with buttery croissants at a corner café, and afternoons are spent exploring iconic spots like the Louvre, Notre-Dame, and the Seine River. Whether you're admiring art, savoring pastries, or simply watching the world go by, Paris wraps you in its timeless charm and leaves you with memories you’ll cherish forever."
        />
      </div>
    </div>
  );
}

export default Trip;
