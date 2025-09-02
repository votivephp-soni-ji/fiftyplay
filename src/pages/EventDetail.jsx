import React, { useState } from "react";
import { Container, Row, Col, Button, ProgressBar, Card } from "react-bootstrap";
import Countdown from "react-countdown";

const EventDetail = () => {
  const [soldTickets, setSoldTickets] = useState(200); // Example
  const maxTickets = 500;
  const ticketPrice = 200;

  const renderer = ({ days, hours, minutes, seconds }) => (
    <span>
      {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
    </span>
  );

  return (
    <div>
      {/* Hero Section */}
      <div
        className="text-white text-center p-5"
        style={{
          background: "linear-gradient(90deg, #ec008c, #fc6767)",
        }}
      >
        <h2>The Breeze Zodiac IX</h2>
        <p>HOME / CONTEST / TITLE GOES HERE</p>
      </div>

      {/* Event Banner */}
      <Container className="my-4">
        <Row>
          <Col md={8}>
            <img
              src="https://via.placeholder.com/800x400"
              alt="event"
              className="img-fluid rounded mb-3"
            />

            {/* Thumbnails */}
            <div className="d-flex gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`https://via.placeholder.com/120x80?text=Img+${i}`}
                  alt="thumb"
                  className="rounded"
                />
              ))}
            </div>

            {/* Event Info */}
            <div className="mt-4">
              <h4>Enter now for a chance to win</h4>
              <h3>The Breeze Zodiac IX</h3>
              <p>
                Contest No. <b>B2T</b> | Drawn: 30 August 2025
              </p>
              <h5>${ticketPrice} Per Ticket</h5>
              <p>Maximum of {maxTickets} entries.</p>

              <h5>Description</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
                ex eget mi sollicitudin consequat. Sed rhoncus ligula vel justo
                dignissim aliquam. 
              </p>

              <h5>Fundraiser Details</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
                ex eget mi sollicitudin consequat. Vestibulum congue laoreet mi.
              </p>
            </div>
          </Col>

          {/* Sidebar */}
          <Col md={4}>
            <Card className="p-3 shadow-sm">
              <h6>This competition ends in:</h6>
              <Countdown
                date={Date.now() + 1000 * 60 * 60 * 24 * 2}
                renderer={renderer}
              />

              <hr />

              <p>Tickets Sold</p>
              <ProgressBar
                now={(soldTickets / maxTickets) * 100}
                label={`${soldTickets}/${maxTickets}`}
              />

              <h4 className="mt-3">${soldTickets * ticketPrice} Current Total</h4>

              <Button
                className="mt-3 w-100"
                style={{
                  background: "linear-gradient(90deg,#ec008c,#fc6767)",
                  border: "none",
                }}
              >
                Buy Tickets →
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EventDetail;
