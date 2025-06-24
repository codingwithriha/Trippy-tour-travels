import Navbar from "../components/Navbar";
import ContactImg from "../assets/2.jpg";
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
    </>
  );
}

export default Contact;
