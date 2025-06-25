import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../assets/2.jpg";
import Footer from "../components/Footer";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Contact;
