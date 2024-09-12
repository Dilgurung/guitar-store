import "../styles/herosection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-background-image"></div>
      <h1 className="hero-heading">Guitar Store</h1>
      <p className="hero-subtitle">
      Every artist leaves a mark on the world. 
      <br />We are dedicated to helping you craft a musical legacy that will resonate through generations.
      </p>
      <Link to="/all-products">
        <button className="shop-now">Explore</button>
      </Link>
    </div>
  );
}

export default HeroSection;
