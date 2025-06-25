import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano is one of the most iconic and fascinating natural
              wonders of the Philippines. Located in Batangas, just a few hours
              from Manila, it is known as the world’s smallest active volcano.
              What makes it truly unique is its volcano within a lake, within a
              volcano structure—Taal Volcano sits in the middle of Taal Lake,
              offering breathtaking views and a surreal landscape. Despite its
              size, it is one of the most active and closely monitored volcanoes
              in the country. A favorite among tourists and nature lovers, Taal
              is both a symbol of nature's beauty and power."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Mt. Daguldul is a beginner-friendly mountain located in San Juan, Batangas, known for its scenic trails and relaxing coastal views. The hike takes you through lush forests, gentle slopes, and charming trails lined with friendly locals selling refreshments. At the summit, you're rewarded with a breathtaking view of the sea and surrounding mountains. A perfect weekend escape that ends with a refreshing dip at Laiya Beach!"
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
