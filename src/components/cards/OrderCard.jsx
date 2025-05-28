import React from "react";
import { Accordion } from "react-bootstrap";

const OrderCard = ({ orders }) => {
  return (
    <div className="w-100">
      {orders.map((item) => {
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="">
            <Accordion.Header>{}</Accordion.Header>
            <Accordion.Body>{/* products list  */}</Accordion.Body>
          </Accordion.Item>
        </Accordion>;
      })}
    </div>
  );
};

export default OrderCard;
