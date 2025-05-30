import React from "react";
import { Accordion } from "react-bootstrap";

const OrderCard = ({ orders }) => {
  return (
    <div className="w-100">
      {orders.map((item, index) => {
        return (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey={index} className="d-flex flex-column">
              <Accordion.Header className="justify-items-around align-items-center row w-100">
                <div className="col-5 d-flex flex-column gap-2">
                  <div className="d-flex gap-2">
                    {item.products.map((product, index) => {
                      return (
                        <img
                          src={product.productImages}
                          alt=""
                          srcset=""
                          className="border"
                          key={index}
                          style={{ height: "50px", width: "50px" }}
                        />
                      );
                    })}
                  </div>
                  <div>{item.createdAt.slice(0, 10)}</div>
                </div>
                <div className="col-5 text-end">
                  <b>{item.status}</b>
                  <p>${item.totalAmount}</p>
                </div>
              </Accordion.Header>
              <Accordion.Body className="d-flex flex-column gap-2">
                {item.products.map((product, index) => {
                  return (
                    <div className="d-flex flex-row gap-2" key={index}>
                      <img
                        src={product.productImages}
                        alt=""
                        srcset=""
                        className="border"
                        style={{ height: "80px", width: "80px" }}
                      />

                      <div className="d-flex flex-column">
                        <b className="">{product.name}</b>
                        <p className="mb-0">Quantity: {product.quantity}</p>
                        <p className="mb-0">Price: {product.amount_total}</p>
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
