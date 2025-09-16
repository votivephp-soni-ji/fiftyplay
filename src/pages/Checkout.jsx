import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//import "../assets/css/checkout.css";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get event + selected price option from EventDetail
  const event = location.state?.event;
  const selectedPrice = location.state?.selectedPrice;

  console.log("state", location.state)

  const [tickets, setTickets] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [chosenPrice, setChosenPrice] = useState(null);

  useEffect(() => {
    if (!event) {
      // If no event data, redirect back to product list
      navigate("/fundraising-products");
    }

    if (selectedPrice) {
        console.log("change price")
      setChosenPrice(selectedPrice.id);
    }
  }, [event, navigate]);

  if (!event) return null;

  const handleCheckout = () => {
    console.log("Proceeding with checkout", {
      event,
      selectedPrice,
      tickets,
    });
    // Navigate to payment gateway or confirmation page
    navigate("/payment", {
      state: { event, selectedPrice, tickets },
    });
  };

  return (
    <div className="checkout-page container my-5">
      {/* Page Header */}
      <section className="page-header banner-top-add mb-4">
        <div className="container">
          <h1>Checkout</h1>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/fundraising-products">Fundraising Products</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Checkout
            </li>
          </ul>
        </div>
      </section>

      <div className="row">
        {/* Left: Event Summary */}
        <div className="col-lg-7 mb-4">
          <div className="card p-4">
            <h4 className="fw-bold">{event.title}</h4>
            <p>
              Contest No. <b>{event.contest_no || "N/A"}</b>
            </p>
            <p>Draw Date: {event.end_date}</p>

            <img
              src={event.banners?.[0] || "./images/default-event.png"}
              alt={event.title}
              className="img-fluid rounded mb-3"
            />

            <p>{event.description}</p>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="col-lg-5">
          <div className="card p-4 shadow-sm">
            <h5 className="fw-bold mb-3">Order Summary</h5>
            <p>
              
              {!selectedPrice && <strong>Ticket Price: ${event.ticket_price}</strong> } 
                
            </p>

            {selectedPrice ? (
              <>
                <label htmlFor="ticketQty">Selected Tickets</label>
                <select
                  id="ticketQty"
                  className="form-select"
                  value={chosenPrice}
                  onChange={(e) => setChosenPrice(e.target.value)}
                >
                  {event.prices.map((price) => (
                    <option key={price.id} value={price.id}>
                      {price.quantity} Ticket{price.quantity > 1 ? "s" : ""} - $
                      {price.price}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <p>
                <div className="d-flex align-items-center mb-3">
                  <strong className="me-3">Quantity:</strong>
                  <button className="btn btn-outline-secondary">-</button>
                  <span className="mx-3">{quantity}</span>
                  <button className="btn btn-outline-secondary">+</button>
                </div>
              </p>
            )}

            <hr />
            <h5>
              Total: $
              {selectedPrice
                ? selectedPrice.price
                : (event.ticket_price || 0) * tickets}
            </h5>

            <button onClick={handleCheckout} className="btn btn-buy mt-3 w-100">
              Proceed to Payment <i className="bi bi-arrow-right ms-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
