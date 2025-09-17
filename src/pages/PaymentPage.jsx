import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Event + order details from Checkout
  const event = location.state?.event;
  const chosenPrice = location.state?.chosenPrice;
  const quantity = location.state?.quantity || 1;
  const selectedPrice = location.state?.selectedPrice;

  // ✅ Payment Method
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [processing, setProcessing] = useState(false);

  if (!event) {
    // If no event/order data → back to checkout
    navigate("/checkout");
    return null;
  }

  const totalAmount = selectedPrice
    ? selectedPrice.price
    : (event.ticket_price || 0) * quantity;

  const handlePayment = async () => {
    setProcessing(true);

    try {
      // Mock API call → replace with real payment gateway integration
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Payment successful!");
      navigate("/fundraising-products"); // ✅ redirect after success
    } catch (err) {
      toast.error("Payment failed. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="payment-page container my-5">
      {/* Page Header */}
      <section className="page-header banner-top-add mb-4">
        <div className="container">
          <h1>Payment</h1>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/fundraising-products">Fundraising Products</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Payment
            </li>
          </ul>
        </div>
      </section>

      <div className="row">
        {/* Left: Payment Methods */}
        <div className="col-lg-7 mb-4">
          <div className="card p-4 shadow-sm">
            <h5 className="fw-bold mb-3">Select Payment Method</h5>

            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                id="cod"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label" htmlFor="cod">
                Cod
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                id="stripe"
                value="stripe"
                checked={paymentMethod === "stripe"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label" htmlFor="stripe">
                Stripe
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                id="paypal"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label" htmlFor="paypal">
                PayPal
              </label>
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="col-lg-5">
          <div className="card p-4 shadow-sm">
            <h5 className="fw-bold mb-3">Order Summary</h5>
            <p>
              <strong>{event.title}</strong>
            </p>
            <p>
              Contest No: <b>{event.contest_no || "N/A"}</b>
            </p>
            <p>
              Tickets:{" "}
              {selectedPrice ? `${selectedPrice.quantity} (Package)` : quantity}
            </p>

            <hr />
            <h5>Total Amount: ${totalAmount}</h5>

            <button
              onClick={handlePayment}
              className="btn btn-buy mt-3 w-100"
              disabled={processing}
            >
              {processing ? "Processing..." : `Pay Now (${paymentMethod})`}
              <i className="bi bi-arrow-right ms-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
