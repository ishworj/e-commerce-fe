import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { deleteOrderItemAction } from "../../features/orders/orderActions";
import { useDispatch } from "react-redux";

const ActionsForItems = ({ user, item, product }) => {
  const dispatch = useDispatch();
  // remove items from the order
  const handleItemsOnOrder = (id, ID) => {
    dispatch(deleteOrderItemAction(id, ID));
  };
  return (
    <>
      {user.role === "admin" && (
        <div className="d-flex gap-3">
          <AiOutlineDelete
            className="fs-4 text-danger"
            style={{ cursor: "pointer" }}
            title="Delete"
            onClick={() => handleItemsOnOrder(item._id, product.id)}
          />
        </div>
      )}
    </>
  );
};

export default ActionsForItems;
