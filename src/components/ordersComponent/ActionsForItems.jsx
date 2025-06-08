import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { deleteOrderItemAction } from "../../features/orders/orderActions";
import { useDispatch } from "react-redux";

const ActionsForItems = ({
  setIsUpdateQuantity,
  isUpdateQuantity,
  user,
  item,
  product,
}) => {
  const dispatch = useDispatch();
  // remove items from the order
  const handleItemsOnOrder = (id, ID) => {
    dispatch(deleteOrderItemAction(id, ID));
  };

  // handle update for items inside the order

  const handleOnUpdateProductFromOrder = () => {
    setIsUpdateQuantity(!isUpdateQuantity);
  };
  return (
    <>
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
            onClick={() => handleItemsOnOrder(item._id, product.id)}
          />
        </div>
      )}
    </>
  );
};

export default ActionsForItems;
