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

      <div className="first-des">
        <div className="des-text">
          <h2>Taal Volcano, Batangas</h2>
          <p>
            Taal Volcano is one of the most iconic and fascinating natural
            wonders of the Philippines. Located in Batangas, just a few hours
            from Manila, it is known as the world’s smallest active volcano.
            What makes it truly unique is its volcano within a lake, within a
            volcano structure—Taal Volcano sits in the middle of Taal Lake,
            offering breathtaking views and a surreal landscape. Despite its
            size, it is one of the most active and closely monitored volcanoes
            in the country. A favorite among tourists and nature lovers, Taal is
            both a symbol of nature's beauty and power.
          </p>
        </div>

        <div className="image">
          <img alt="img" src={Mountain1} />
          <img alt="img" src={Mountain2} />
        </div>
      </div>
    </div>
  );
};

export default Destination;
