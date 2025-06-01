import React, { useEffect, useState } from "react";
import { Accordion, Button, Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { GoCopy } from "react-icons/go";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TbShoppingCartCancel } from "react-icons/tb";
import {
  handleOnDeleteProductFromOrder,
  handleOnInvoiceOrder,
  handleOnUpdateProductFromOrder,
} from "../../utils/ordersFunctions";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { filterFunctionOrders } from "../../utils/filterProducts";
import {
  deleteOrderAction,
  getAdminOrderAction,
  getOrderAction,
  updateOrderAction,
} from "../../features/orders/orderActions";
import { IoCloseOutline } from "react-icons/io5";

const AdminOrdersCard = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orderInfo);
  const { user } = useSelector((state) => state.userInfo);

  const [activeKey, setActiveKey] = useState(null);
  const [displayOrders, setDisplayOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const { form, handleOnChange, setForm } = useForm({
    searchQuery: "",
    status: "all",
    date: "newest",
  });

  const toggleAccordion = (key) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };

  // order status
  const handleOnStatus = (e, id) => {
    console.log(e.target.value);
    dispatch(updateOrderAction({ _id: id, status: e.target.value }));
  };
  // deleting the order
  const handleOnCancelOrder = (_id) => {
    dispatch(deleteOrderAction(_id));
  };

  // update the order
  const handleOnUpdateOrder = () => {
    setIsUpdate(!isUpdate);
  };

  useEffect(() => {
    const data = filterFunctionOrders(form, orders);
    setDisplayOrders(data);
  }, [form, orders]);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      user.role === "admin"
        ? dispatch(getAdminOrderAction())
        : dispatch(getOrderAction());
      setIsLoading(false);
    };
    fetchOrders();
  }, []);

  return (
    <div className="w-100 d-flex flex-column gap-2 position-relative">
      {/* controls bar */}
      <Form>
        <Row>
          {/* searching feature */}
          <Col md={6}>
            <Form.Control
              name="searchQuery"
              type="text"
              placeholder="Search Orders ..."
              onChange={handleOnChange}
            />
          </Col>
          {/* status and the date sorting orders */}
          <Col className="d-flex justify-content-end gap-1 gap-sm-2 mt-3 mt-sm-0">
            {/* sorting acc to status */}
            <Form.Group>
              <Form.Select
                name="status"
                value={form.status}
                onChange={handleOnChange}
              >
                <option value="all">All</option>
                <option value="pending" className="text-warning">
                  Pending
                </option>
                <option value="shipped" className="text-primary">
                  Shipped
                </option>
                <option value="delivered" className="text-success">
                  Delivered
                </option>
              </Form.Select>
            </Form.Group>
            {/* sorting acc to date */}
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
          <Accordion activeKey={activeKey} key={key} className="z-1">
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
                        <b>Tracking Number:</b>
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
                            onChange={(e) => handleOnStatus(e, item._id)}
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
                      <div className="d-flex gap-2 text-decoration-underline">
                        <div
                          onClick={handleOnInvoiceOrder}
                          title="Invoice"
                          className=" text-primary"
                        >
                          Download Invoice
                        </div>
                        {user.role === "admin" && (
                          <div
                            className="text-black"
                            onClick={handleOnUpdateOrder}
                            title="Update"
                          >
                            Change Shipping Address
                          </div>
                        )}
                        <div
                          className="text-danger"
                          onClick={() => handleOnCancelOrder(item._id)}
                          title="Cancel"
                        >
                          Cancel
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body className="d-flex flex-column gap-2">
                {item.products.map((product, index) => {
                  return (
                    <div
                      className="d-flex align-items-center justify-content-between"
                      key={index}
                    >
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
      {isUpdate && (
        <>
          <Container
            className="position-absolute z-3 text-black w-50 p-2 px-3 rounded-2 updateBox"
            style={{ top: "0", left: "25%", height: "500px" }}
          >
            <div className="d-flex flex-column align-items-center justify-content-center">
              <header className="d-flex justify-content-between align-items-center mt-2 w-100">
                <h1>Update!</h1>
                <IoCloseOutline
                  className="fs-1"
                  onClick={handleOnUpdateOrder}
                  style={{ cursor: "pointer" }}
                />
              </header>
              <hr className="w-100" />
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default AdminOrdersCard;
