import React, { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import { BsChevronDown } from "react-icons/bs";
import { GoCopy } from "react-icons/go";

const OrderCard = ({ orders }) => {
  const [activeKey, setActiveKey] = useState(null);
  const handleOnCancelOrder = () => {};
  const toggleAccordion = (key) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };
  return (
    <div className="w-100 d-flex flex-column gap-2">
      {orders.map((item, index) => {
        const key = index.toString();
        const isOpen = activeKey === key;
        return (
          <Accordion activeKey={activeKey} key={key}>
            <Accordion.Item eventKey={key} className="d-flex flex-column w-100">
              <Accordion.Header
                as="div"
                className="justify-items-around align-items-center row w-100"
                onClick={(e) => e.preventDefault()}
              >
                <div className="d-flex flex-column gap-2 w-100">
                  <div className="d-flex flex-column gap-2 align-items-between w-100">
                    {/* status and the creation date  */}
                    <div className="d-flex w-100 justify-content-between">
                      <p>
                        <b>Order Id:</b>
                        {item._id}
                        &nbsp;
                        <GoCopy
                          onClick={() =>
                            navigator.clipboard.writeText(item._id)
                          }
                          style={{
                            cursor: "pointer",
                            userSelect: "text",
                            color: "blue",
                          }}
                          title="Copy Order Id"
                        />
                      </p>
                      <p className="text-end">
                        <span
                          className={
                            item.status === "pending"
                              ? "text-warning"
                              : item.status === "shipped"
                              ? "text-primary"
                              : "text-success"
                          }
                        >
                          {item.status.charAt(0).toUpperCase() +
                            item.status.slice(1)}
                        </span>{" "}
                        | {item.createdAt.slice(0, 10)}
                      </p>
                    </div>
                    {/* images */}
                    <div className="d-flex justify-content-between align-items-center">
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
                      <BsChevronDown
                        className={`fs-4 ${isOpen ? "rotate-180" : ""}`}
                        onClick={() => toggleAccordion(key)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    {/* total amounts and cancel button*/}
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0" style={{ height: "20px" }}>
                        $ {item.totalAmount}
                      </p>
                      <Button variant="danger" onClick={handleOnCancelOrder}>
                        Cancel
                      </Button>
                    </div>
                  </div>
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
                        <p className="mb-0">
                          Unit Price: {product.amount_total}
                        </p>
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
