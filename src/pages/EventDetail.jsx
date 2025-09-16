import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

import "../assets/css/event_details.css";
import { useLocation, useNavigate } from "react-router-dom";
import { eventDetail } from "../services/EventService";

export default function EventDetail() {
  const [event, setEvent] = useState({});
  const [chosenPrice, setChosenPrice] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const eventId = location.state?.event;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const loadEvent = async () => {
      try {
        let res = await eventDetail(eventId);
        console.log("event info", res);
        setEvent(res.data);

        // default selected price
        if (res.data.multiple_price && res.data.prices?.length) {
          setChosenPrice(res.data.prices[0]);
        }
      } catch (err) {
        console.error("Failed to load event", err);
      }
    };
    if (eventId) loadEvent();
  }, [eventId]);

  // countdown timer
  useEffect(() => {
    if (!event?.draw_time) return;

    const targetDate = new Date(event.draw_time).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [event?.draw_time]);

  return (
    <>
      {/* Banner */}
      <section className="event-details-add">
        <div className="container">
          <h1 className="text-center">{event.title}</h1>
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
              <a href="#">{event.title}</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Carousel */}
      <div className="event-testimonials">
        <div className="container">
          <Carousel>
            {(event.banners || []).map((src, idx) => (
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
                  <strong>${event.ticket_price}</strong> Per Ticket
                </p>
              </div>
              <h3 className="fw-bold">{event.title}</h3>
              <p className="contest-number">
                Contest No. <b>B2B</b> | Drawn: {event.end_date}
              </p>
              <h5 className="mt-4">Description</h5>
              <p>{event.description}</p>
              <h5 className="mt-4">Fundraiser Details</h5>
              <p>{event.description}</p>
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
                {/* // Total Sold Amount */}
                <p>${Number(event?.total_amount || 0).toLocaleString()}</p>
                {event.multiple_price === true && (
                  <select
                    id="tickets"
                    name="tickets"
                    onChange={(e) => {
                      const selected = event.prices.find(
                        (price) => price.id === parseInt(e.target.value)
                      );
                      setChosenPrice(selected);
                    }}
                  >
                    {event.prices.map((price) => (
                      <option key={price.id} value={price.id}>
                        {price.quantity} Ticket{price.quantity > 1 ? "s" : ""} -
                        ${price.price}
                      </option>
                    ))}
                  </select>
                )}
                <button
                  className="btn btn-buy"
                  onClick={() =>
                    navigate("/checkout", {
                      state: {
                        event,
                        selectedPrice: event.multiple_price
                          ? chosenPrice
                          : null,
                      },
                    })
                  }
                >
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
