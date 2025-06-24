import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
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
              in the country. A favorite among tourists and nature lovers, Taal
              is both a symbol of nature's beauty and power.
            </p>
          </div>

          <div className="image">
            <img alt="img" src={Mountain1} />
            <img alt="img" src={Mountain2} />
          </div>
        </div>
      </div>
    );
  }
}
