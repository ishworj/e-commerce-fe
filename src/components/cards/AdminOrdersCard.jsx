import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { filterFunctionOrders } from "../../utils/filterProducts";
import {
  getAdminOrderAction,
  getOrderAction,
} from "../../features/orders/orderActions";
import AccordionHeaderTopPart from "../ordersComponent/AccordionHeaderTopPart";
import AccordionHeaderImageSection from "../ordersComponent/AccordionHeaderImageSection";
import AccordionActions from "../ordersComponent/AccordionActions";
import ActionsForItems from "../ordersComponent/ActionsForItems";
import ItemPriceQuantity from "../ordersComponent/ItemPriceQuantity";
import ControlBar from "../ordersComponent/ControlBar";

const AdminOrdersCard = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orderInfo);
  const { user } = useSelector((state) => state.userInfo);

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
      <ControlBar form={form} handleOnChange={handleOnChange} />
      <hr />
      {displayOrders.length <= 0 && (
        <p className="text-center" style={{ minHeight: "80vh" }}>
          No orders here yet...
        </p>
      )}

      {displayOrders?.map((item, index) => {
        const key = item._id.toString();
        const isOpen = activeKey === key;
        return (
          <Accordion activeKey={activeKey} key={key} className="z-1">
            <Accordion.Item eventKey={key} className="d-flex flex-column w-100">
              <Accordion.Header
                as="div"
                className="justify-items-around align-items-center row w-100 orderAccordion"
                style={{ minHeight: "12rem" }}
                onClick={(e) => e.preventDefault()}
              >
                <div className="d-flex flex-column gap-2 w-100">
                  <div className="d-flex flex-column gap-2 align-items-between w-100">
                    {/* status and the creation date  */}
                    <AccordionHeaderTopPart item={item} user={user} />

                    {/* images in the accordion header*/}
                    <AccordionHeaderImageSection
                      item={item}
                      isOpen={isOpen}
                      toggleAccordion={toggleAccordion}
                    />

                    {/* total amounts and action buttons*/}
                    <AccordionActions item={item} user={user} />
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
                      {/* images of the items */}
                      <div className="d-flex flex-row gap-2" key={index}>
                        <img
                          src={product.productImages}
                          alt=""
                          srcSet=""
                          className="border"
                          style={{ height: "80px", width: "80px" }}
                        />
                        {/* product quantity and the unit price */}
                        <ItemPriceQuantity product={product} />
                      </div>
                      {/* actions for the particular product within the order */}
                      <ActionsForItems
                        user={user}
                        item={item}
                        product={product}
                      />
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
