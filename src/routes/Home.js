import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://unsplash.com/photos/man-and-woman-kissing-statue-near-city-buildings-during-daytime-BZ8IvPMuQ20"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default Home;
