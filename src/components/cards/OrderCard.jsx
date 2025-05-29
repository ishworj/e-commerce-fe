import React from "react";
import { Accordion } from "react-bootstrap";

const OrderCard = ({ orders }) => {
  return (
    <div className="w-100">
      {orders.map((item, index) => {
        return (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey={index}>
              <Accordion.Header className="d-flex justify-items-around align-items-center">
                <div>
                  <div>imgs imgs imgs imgs </div>
                  <div>{item.createdAt.slice(0, 10)}</div>
                </div>
                <div>
                  <b>{item.status}</b>
                  <p>${item.totalAmount}</p>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                {item.products.map((product) => {
                  return (
                    <div className="d-flex flex-row gap-2">
                      <img
                        src=""
                        alt=""
                        srcset=""
                        className="border"
                        style={{ height: "50px", width: "50px" }}
                      />
                      <div className="d-flex flex-column">
                        <b>itemName</b>
                        <p>{product.quantity}</p>
                      </div>
                    </div>
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </div>
  );
};

export default OrderCard;
