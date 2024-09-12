import { useState } from "react";
import PagesHeader from "../components/PagesHeader.jsx";
import Footer from "../components/Footer.jsx";
import BottomBar from "../components/BottomBar.jsx";
import "../styles/faq.css";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAnswers = [
    {
      question: "What are the prices for the guitar?",
      answer:
        "Buying a guitar tends to fall into three main categories as it has a vast price range. The categories are further divided as Beginners guitars, mid-level guitars and high-end guitars.The price range of the guitars totally depends on the make of the guitars, the wood, and material used in the making of the guitar. Higher the price better the quality.In Nepal, the price range of beginner guitar ranges from Rs 3000 to Rs 9000 whereas mid-level are between the price range of Rs 10,000 to Rs 25,000. Then comes the High-end guitars which include anything above Rs 25,000 and the range goes to lakhs.",
    },
    {
      question: " Which guitar is best to buy in Nepal?",
      answer:
        "Choosing the best guitar for beginners can be a difficult task as there are so many options available. We suggest starting off with a beginner’s guitar or a decent-priced guitar is a perfect way to start out your musical journey towards perfection. Manasalu and Mantra Guitars are the best to buy in nepal.",
    },
    
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship internationally. Shipping costs and times vary depending on the destination.",
    },
    {
      question: "Is there any warranty on guitar?",
      answer:
        "We have 1 year warranty on the action adjustment.",
    },

    {
      question: "Do you do repairs?",
      answer:
        "Yes we do! We have an in-house guitar tech offering full setups/servicing, fret dressing and re-stringing.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-page">
      <PagesHeader />

      <main className="faq-content">
        <div className="faq-container">
          <h1>Frequently Asked Questions</h1>
          {questionsAnswers.map((qa, index) => (
            <div
              key={index}
              className={`faq-item ${index === activeIndex ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {qa.question}
              </div>
              <div className="faq-answer">
                {index === activeIndex && <p>{qa.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <BottomBar />
    </div>
  );
}

export default Faq;
