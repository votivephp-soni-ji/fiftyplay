import { useState } from "react";
import "../assets/css/faq.css";

const faqs = [
  {
    q: "What is FiftyPlay?",
    a: "FiftyPlay is a digital fundraising platform that allows nonprofit organizations, sports teams, and community groups to raise money through 50/50 raffles tied to the purchase of official merchandise. Our system provides a transparent, secure, and modern way to support meaningful causes.",
  },
  {
    q: "How does the 50/50 raffle system work?",
    a: "When users purchase an official item for an event or cause, they automatically receive an entry into the 50/50 raffle. At the end of the campaign, 50% of the total funds raised goes to the organization, and the remaining 50% goes to the winning participant.",
  },
  {
    q: "Is purchasing an item required to enter the raffle?",
    a: "Yes. Participation in all FiftyPlay raffles is exclusively linked to the purchase of designated merchandise offered by the organization or event.",
  },
  {
    q: "How do I know if I won?",
    a: "All winners receive an instant notification through the FiftyPlay app and via email. The winning number and details are also displayed directly in the app for full transparency.",
  },
  {
    q: "Are FiftyPlay raffles secure and verifiable?",
    a: "Absolutely. FiftyPlay uses modern digital technology to ensure every raffle is transparent, traceable, and fair. All transactions and drawings follow strict verification processes.",
  },
  {
    q: "What types of organizations can use FiftyPlay?",
    a: "Any approved nonprofit, community program, sports team, or charitable initiative can host a 50/50 raffle using our platform. FiftyPlay is designed to support a wide range of social, educational, cultural, and athletic causes.",
  },
  {
    q: "Where does the raised money go?",
    a: "50% of the funds support the nonprofit organization or cause running the campaign. The other 50% is awarded to the raffle winner. Organizations receive detailed reports for auditing and record-keeping.",
  },
  {
    q: "What merchandise is available for purchase?",
    a: "Each organization selects its own items. These may include shirts, bottles, stickers, wristbands, hats, or other official merchandise. Items will vary depending on the event or campaign.",
  },
  {
    q: "Can I see the prize pool in real time?",
    a: "Yes. The FiftyPlay app displays the growing prize pool live, allowing participants to track contributions and progress throughout the event.",
  },
  {
    q: "How do organizations host a raffle through FiftyPlay?",
    a: "Organizations can contact our team to set up their campaign. We handle the technical setup, reporting tools, real-time tracking, and secure payment processing so organizations can focus on their mission.",
  },
  {
    q: "Is FiftyPlay part of Ticket Plus?",
    a: "Yes. FiftyPlay is a digital product developed under the parent company Ticket Plus, owned by Carlos Crespo Müller. This ensures a strong corporate foundation and reliable operational infrastructure.",
  },
  {
    q: "Which payment methods are accepted?",
    a: "The platform supports secure and certified digital payment methods. Accepted options may vary by region and event.",
  },
  {
    q: "Can I participate from anywhere?",
    a: "Participation depends on the specific campaign rules and geographical restrictions. Each event will clearly list eligibility requirements.",
  },
  {
    q: "How can I contact support?",
    a: "You can reach our customer support team directly through the app or via our official website. We’re here to assist with any questions about purchases, events, or raffle results.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-container">
  <h2 className="faq-title">FiftyPlay – Frequently Asked Questions (FAQ)</h2>

  <div className="space-y-4">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className="faq-box"
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
      >
        <div className="faq-question">
          {faq.q}
          <span className="faq-toggle">
            {openIndex === index ? "−" : "+"}
          </span>
        </div>

        {openIndex === index && (
          <p className="faq-answer">{faq.a}</p>
        )}
      </div>
    ))}
  </div>
</div>

  );
}
