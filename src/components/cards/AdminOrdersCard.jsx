import React, { useEffect, useState } from "react";
import { Accordion, Button, Col, Form, Row } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { GoCopy } from "react-icons/go";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TbShoppingCartCancel } from "react-icons/tb";
import {
  handleOnCancelOrder,
  handleOnDeleteProductFromOrder,
  handleOnInvoiceOrder,
  handleOnStatus,
  handleOnUpdateOrder,
  handleOnUpdateProductFromOrder,
} from "../../utils/ordersFunctions";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { filterFunctionOrders } from "../../utils/filterProducts";
import {
  getAdminOrderAction,
  getOrderAction,
} from "../../features/orders/orderActions";

const AdminOrdersCard = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orderInfo);
  const { user } = useSelector((state) => state.userInfo);
  console.log(user, 22);
  const [activeKey, setActiveKey] = useState(null);
  const [displayOrders, setDisplayOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { form, handleOnChange, setForm } = useForm({
    searchQuery: "",
    status: "all",
    date: "newest",
  });

  const toggleAccordion = (key) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      user.role === "admin"
        ? dispatch(getAdminOrderAction())
        : dispatch(getOrderAction());
      setIsLoading(false);
    };
    fetchOrders();
  }, [dispatch]);

  console.log(displayOrders, "orders for the admin ");
  console.log(orders);
  useEffect(() => {
    const data = filterFunctionOrders(form, orders);
    setDisplayOrders(data);
  }, [form, orders]);
  return (
    <div className="w-100 d-flex flex-column gap-2">
      {/* controls bar */}
      <Form>
        <Row>
          <Col md={6}>
            <Form.Control
              name="searchQuery"
              type="text"
              placeholder="Search Orders ..."
              onChange={handleOnChange}
            />
          </Col>
          <Col className="d-flex justify-content-center gap-1 gap-sm-2">
            <Form.Group>
              <Form.Select
                name="status"
                value={form.status}
                onChange={handleOnChange}
              >
                <option value="all">All</option>
                {orders.map((item, index) => (
                  <option key={index} value={item.status}>
                    {item.status}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Select
                name="date"
                value={form.date}
                onChange={handleOnChange}
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <hr />
      {displayOrders?.map((item, index) => {
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
                    <div
                      className="d-flex justify-content-between flex-wrap"
                      style={{ width: "98%" }}
                    >
                      {/* order id */}
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
                      {/* status */}
                      <div className="" style={{ height: "auto" }}>
                        {item.createdAt.slice(0, 10)} | &nbsp;
                        {user.role === "admin" ? (
                          <select
                            className={
                              item.status === "pending"
                                ? "text-warning"
                                : item.status === "shipped"
                                ? "text-primary"
                                : "text-success"
                            }
                            style={{
                              border: "0px",
                              background: "transparent",
                              outline: "none",
                            }}
                            value={item.status}
                            onChange={handleOnStatus}
                          >
                            <option value="pending" className="text-warning">
                              Pending
                            </option>
                            <option value="shipped" className="text-primary">
                              Shipped
                            </option>
                            <option value="delivered" className="text-success">
                              Delivered
                            </option>
                          </select>
                        ) : (
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
                          </span>
                        )}
                      </div>
                    </div>
                    {/* images */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex gap-2 flex-wrap">
                        {item.products.map((product, index) => {
                          return (
                            <img
                              src={product.productImages}
                              alt=""
                              srcSet=""
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
                    {/* total amounts and action buttons*/}
                    <div
                      className="d-flex align-items-center justify-content-between"
                      style={{ width: "98%" }}
                    >
                      <p className="mb-0" style={{ height: "20px" }}>
                        $ {item.totalAmount}
                      </p>
                      {/* buttons */}
                      <div className="d-flex gap-2">
                        <div
                          //   variant="light"
                          onClick={handleOnInvoiceOrder}
                          title="Invoice"
                        >
                          <LiaFileInvoiceDollarSolid className="fs-4" />
                        </div>
                        {user.role === "admin" && (
                          <div
                            //   variant="primary"
                            onClick={handleOnUpdateOrder}
                            title="Update"
                          >
                            <CiEdit className="fs-4 text-primary" />
                          </div>
                        )}
                        <div onClick={handleOnCancelOrder} title="Cancel">
                          <TbShoppingCartCancel className="fs-4 text-danger" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body className="d-flex flex-column gap-2">
                {item.products.map((product, index) => {
                  return (
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex flex-row gap-2" key={index}>
                        <img
                          src={product.productImages}
                          alt=""
                          srcSet=""
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
                      {/* actions for the particular product within the order */}
                      {user.role === "admin" && (
                        <div className="d-flex gap-3">
                          <CiEdit
                            className="fs-4 text-primary"
                            style={{ cursor: "pointer" }}
                            title="Update"
                            onClick={handleOnUpdateProductFromOrder}
                          />
                          <AiOutlineDelete
                            className="fs-4 text-danger"
                            style={{ cursor: "pointer" }}
                            title="Delete"
                            onClick={handleOnDeleteProductFromOrder}
                          />
                        </div>
                      )}
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

export default AdminOrdersCard;
