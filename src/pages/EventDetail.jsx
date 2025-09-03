import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

import "../assets/css/event_details.css";

export default function EventDetail({
  title = "The Breeze Zodiac IX",
  contestNo = "B27",
  drawDate = "30 August 2025",
  pricePerTicket = 200,
  totalAmount = 20000,
  images = [
    "./images/event-img-main.png",
    "./images/event-img-two.png",
    "./images/event-img-three.png",
    "./images/event-img-four.png",
    "./images/event-img-five.png",
    "./images/event-img-six.png"
  ],
}) {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 10,
    minutes: 57,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Banner */}
      <section className="event-details-add">
        <div className="container">
          <h1 className="text-center">{title}</h1>
          <ul className="event-list-add">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>/</li>
            <li>
              <a href="#">CONTEST</a>
            </li>
            <li>/</li>
            <li>
              <a href="#">{title}</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Carousel */}
      <div className="event-testimonials">
        <div className="container">
          <Carousel>
            {images.map((src, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={src}
                  alt={`Slide ${idx + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        
      </div>

      {/* Details */}
      <div className="chance-to-win">
        <div className="container my-4">
          <div className="row inner-content-add-win">
            {/* Left content */}
            <div className="col-lg-8 inner-content-win-right">
              <div className="enter-now-chance">
                <h6>
                  <i className="bi bi-trophy"></i> Enter now for a chance to win
                </h6>
                <p>
                  <strong>${pricePerTicket}</strong> Per Ticket
                </p>
              </div>
              <h3 className="fw-bold">{title}</h3>
              <p className="contest-number">
                Contest No. <b>{contestNo}</b> | Drawn: {drawDate}
              </p>
              <h5 className="mt-4">Description</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <h5 className="mt-4">Fundraiser Details</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>

            {/* Right sidebar */}
            <div className="col-lg-4 inner-content-win-left">
              <div className="countdown text-center mb-3">
                <p className="mb-1">This Raffle ends in:</p>
                <h3>
                  <span className="number-text-add">
                    {timeLeft.days}{" "}
                    <small className="days-text-add">Days</small>
                  </span>
                  <span className="number-text-add">
                    {timeLeft.hours}{" "}
                    <small className="days-text-add">Hours</small>
                  </span>
                  <span className="number-text-add">
                    {timeLeft.minutes}{" "}
                    <small className="days-text-add">Minutes</small>
                  </span>
                  <span className="number-text-add">
                    {timeLeft.seconds}{" "}
                    <small className="days-text-add">Seconds</small>
                  </span>
                </h3>
              </div>

              <div className="ticket-box text-center">
                <h5>Total Amount</h5>
                <p>${totalAmount.toLocaleString()}</p>
                <select id="tickets" name="tickets">
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n} Ticket{n > 1 ? "s" : ""} - ${n * pricePerTicket}
                    </option>
                  ))}
                </select>
                <button className="btn btn-buy">
                  BUY TICKETS <i className="bi bi-arrow-right ms-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
