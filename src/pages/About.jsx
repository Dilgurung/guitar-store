import PagesHeader from "../components/PagesHeader.jsx";
import Footer from "../components/Footer.jsx";
import BottomBar from "../components/BottomBar.jsx";
import "../styles/about.css";

function About() {
  return (
    <div className="about-us-page">
      <PagesHeader />

      <main className="about-main-content">
        <section className="about-intro">
          <h1>Guitar Store</h1>
          <p className="tagline">
          "Empowering To Create"
          </p>
          <p>
          Every artist leaves a mark on the world. We are dedicated to helping you craft a musical legacy that will resonate through generations.
          </p>
        </section>

        <section className="our-mission">
          <h2>  Who We Are?</h2>
          <p>
        
          Guitar Store is Nepal’s full-fledged online music store and guitar store. The best musical shop and guitar shop in Nepal. We proudly deal in the best Acoustic guitar, Electric guitar, Ukulele and  Bass guitar from a myriad of tried and trusted brands. Guitar store is the one-stop destination for all kinds of accessories like Guitar strings, Guitar strap, and Guitar cable. 
          </p>
        </section>

        <section className="our-products">
          <h2>Brands We Deal In</h2>
          <p>
          We are the exclusive authorised distributor of Manaslu, Native Instruments, Laney, Alctron, Beyerdynamic, Hex Instruments, MXL Mics and Stagg Music for Nepal.
          We deal in products of renowned brands like Daddario, Presonus, Behringer, KRK, Casio, Roland, Focusrite, Shure, Akai, etc. Let’s create some great music together
          </p>
        </section>

        <section className="visit-us">
          <h2>Visit Us</h2>
          <p>
            Want to learn more or get in touch with us? Visit our{" "}
            <a href="/contact">Contact Page</a> and let's start a conversation.
            We're always here to talk tea.
          </p>
        </section>
      </main>

      <Footer />
      <BottomBar />
    </div>
  );
}

export default About;
