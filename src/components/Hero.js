import "./HeroStyles.css";
function Hero() {
  return (
    <>
      <div className="hero">
        <img
          alt="HeroImg"
          src="https://images.unsplash.com/photo-1710915322745-cd5912851417?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="hero-text">
          <h1>Your Journey Your Story</h1>
          <p>Choose your Favourite Destination.</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
