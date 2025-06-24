import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
    </>
  );
}

export default Service;
