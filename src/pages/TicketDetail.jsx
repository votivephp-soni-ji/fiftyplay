import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../assets/css/ticket_detail.css";

const TicketDetail = () => {

  const [searchParams] = useSearchParams();
  const ticketNumber = searchParams.get("ticket_number");
   const baseUrl = import.meta.env.VITE_BASE_URL;

  const [ticket, setTicket] = useState(null);



  useEffect(() => {
    if (ticketNumber) {
      fetch(`${baseUrl}/ticket-info?ticket_number=${ticketNumber}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.status) {
            setTicket(data.data);
          }
        })
        .catch(err => console.log(err));
    }
  }, [ticketNumber]);

  if (!ticket) {
    return <div className="text-center p-5">Loading ticket...</div>;
  }

  return (
    <>
      {/* Banner */}
      <section className="event-details-add">
        <div className="container">
          <h1 className="text-center">Ticket Details</h1>
          <ul className="event-list-add">
            <li><a href="/">HOME</a></li>
            <li>/</li>
            <li>Ticket</li>
          </ul>
        </div>
      </section>

      {/* Ticket */}
      <section className="about-section">
        <div className="container">

          <div className="about-card">

            <h6>
              <i className="bi bi-ticket-perforated"></i> Your Ticket
            </h6>

             <h3 className="bold mb-4">{ticket?.event}</h3>

    <div className={`winner-status ${ticket.is_winner ? "winner" : "lost"}`}>

      <h4>Raffle Winner: {ticket.win_ticket ? ticket.win_ticket : 'Not available'}</h4>
    </div>
  

            <div className="ticket-detail-card">

              <div className="ticket-left">

                <div className="ticket-item">
                  <span className="label">Product</span>
                  <span className="value">{ticket.package?.product_name}</span>
                </div>

                <div className="ticket-item">
                  <span className="label">Ticket Number</span>
                  <span className="value ticket-number">#{ticket.ticket_number}</span>
                </div>

                <div className="ticket-item">
                  <span className="label">Quantity</span>
                  <span className="value">{ticket.sold_tickets}</span>
                </div>

                <div className="ticket-item">
                  <span className="label">Total Price</span>
                  <span className="value">${ticket.total_price}</span>
                </div>

                <div className="ticket-item">
                  <span className="label">Purchase Date</span>
                  <span className="value">{ticket.purchase_at.toLocaleString()}</span>
                </div>

              </div>

              {/* QR Code */}
              <div className="ticket-right">

                <img
                  src={`${ticket.qr_code_url}`}
                  alt="QR Code"
                />

                <p className="scan-text">Scan to view ticket</p>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default TicketDetail;