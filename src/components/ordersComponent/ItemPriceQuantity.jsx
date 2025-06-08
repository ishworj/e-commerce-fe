const ItemPriceQuantity = ({ product, isUpdateQuantity }) => {
  return (
    <div className="d-flex flex-column">
      <b className="">{product.name}</b>
      <p className="mb-0 d-flex gap-2">
        Quantity:
        {isUpdateQuantity ? (
          <div class="form-floating">
            <input
              type="number"
              class="border-bottom border-0 border-dark w-25 p-0 px-2"
            />
          </div>
        ) : (
          <>&nbsp; {product.quantity}</>
        )}
      </p>
      <p className="mb-0">Unit Price: {product.amount_total}</p>
    </div>
  );
};

export default ItemPriceQuantity;
