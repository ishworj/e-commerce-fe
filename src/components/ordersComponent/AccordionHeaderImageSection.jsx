import { BsChevronDown } from "react-icons/bs";

const AccordionHeaderImageSection = ({ item, isOpen, toggleAccordion }) => {
  return (
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
        onClick={() => toggleAccordion(item._id.toString())}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default AccordionHeaderImageSection;
