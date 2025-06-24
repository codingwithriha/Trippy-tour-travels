import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroImg from "../assets/12.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HeroImg}
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
