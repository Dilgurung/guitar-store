import PagesHeader from "../components/PagesHeader.jsx";
import Footer from "../components/Footer.jsx";
import BottomBar from "../components/BottomBar.jsx";
import "../styles/wholesale.css";

function Wholesale() {
  return (
    <div className="wholesale-page">
      <PagesHeader />

      <main className="wholesale-main-content">
        <h1>Welcome to Guitar store </h1>
        <p>
          Join us in bringing the rich heritage of music  to enthusiasts
          around the globe.
        </p>

        <section className="why-wholesale">
          <h2>FACTORY DIRECT PRICE</h2>
          <ul className="our-offerings-list">
            <li>
              Direct from the Source:
              <span>
              Because we’ll make you more money with the customer-focused, factory-direct sale. also can make you have a one-step purchase of various musical instruments which are made by experienced Nepelese craftsmen.
                
              </span>
            </li>
            <li>
              Exclusive Wholesale Prices:
              <span>
                Enjoy competitive pricing, enabling attractive margins for your
                business.
              </span>
            </li>
            <li>
              Marketing Support:
              <span>
                We provide promotional materials and online visibility to
                support your sales efforts.
              </span>
            </li>
            <li>
              Dedicated Account Management:
              <span>
                A dedicated team member will assist you with orders,
                customization, and any inquiries.
              </span>
            </li>
          </ul>
        </section>

        <section className="our-offerings">
          <h2>Our Curated Selection for Wholesale</h2>
          <p>
            Guitar category and types 
          </p>
          <ul className="our-offerings-list">
            <li>
              Classical Guitar:
              <span>Crafted with precision and passion, the classical guitar embodies centuries of musical tradition. Its warm, resonant tones and delicate, intricate craftsmanship evoke a bygone era while remaining a timeless companion for the modern musician.</span>
            </li>
            <li>
              Electric Guitar:
              <span>Designed for both stage and studio, the electric guitar marries cutting-edge technology with timeless craftsmanship. Its magnetic pickups capture every nuance of your playing style, delivering a spectrum of tones—from searing highs to deep, soulful lows—with unparalleled clarity and power.

</span>
            </li>
            <li>
              Acoustic Guitar:
              <span>
              Strung with steel or nylon strings, the acoustic guitar's voice spans a spectrum of emotions—from the bright and lively strumming of folk music to the delicate fingerpicking of classical compositions. Its sound resonates with authenticity and clarity, filling rooms and hearts with melodies that transcend time and culture.
              </span>
            </li>
            <li>
            Semi-Acoustic Guitar:
              <span>Embrace the fusion of tradition and innovation with the semi-acoustic guitar. Let its harmonious blend of acoustic charm and electric power inspire your musical journey and elevate your performance to new heights.</span>
            </li>
          </ul>
        </section>

        <section className="how-to-apply">
          <h2>Begin Your Wholesale Journey</h2>
          <p className="">Getting started is simple:</p>
          <ul className="contact-us our-offerings-list">
            <li>
              Give us your details<a href="/contact"> here</a>
            </li>
            <li>
              Our team will review your request and reach out to discuss your
              needs and how we can best support your business.
            </li>
            <li>
              Once approved, you'll have access to our wholesale catalog and
              pricing.
            </li>
          </ul>
        </section>

        <section className="faqs contact-us">
          <h2>Frequently Asked Questions</h2>
          <span className="bottom-p">
            Have more questions? Visit our <a href="/faqs">FAQ page</a> or
            contact us directly.
          </span>
        </section>

        <section className="contact-us">
          <h2>Let's Connect</h2>
          <span className="bottom-p">
            Ready to explore the possibilities or need more information? Our
            Wholesale Team is here to assist. Email us at{" "}
            <a href="mailto:wholesale@teaofassam.com">
              wholesale@teaofassam.com
            </a>{" "}
            or visit our <a href="/contact">Contact Page</a> for more details.
          </span>
        </section>
      </main>

      <Footer />
      <BottomBar />
    </div>
  );
}

export default Wholesale;
