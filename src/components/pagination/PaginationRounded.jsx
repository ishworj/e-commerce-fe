import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { setOrderPage } from "../../features/orders/orderSlice";
import { useDispatch } from "react-redux";
import { setProductPage } from "../../features/products/productSlice";

export default function PaginationRounded({ totalPages, setpage, page, mode }) {
  const dispatch = useDispatch();
  const handleOnChange = (event, value) => {
    setpage(value);
    if (mode === "order") {
      dispatch(setOrderPage(value));
    } else if (mode === "product") {
      dispatch(setProductPage(value));
    }
  };
  return (
    <Stack spacing={2} className="mt-3 d-flex align-items-end">
      <Pagination
        count={totalPages}
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleOnChange}
      />
    </Stack>
  );
}
