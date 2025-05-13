import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

const CategoryCard = () => {
  return (
    <Card className="shadow-sm" style={{ width: "18rem" }}>
      <Card.Body>
        <div className="d-flex justify-content-between">
            <Card.Title>Electronics</Card.Title>
            <FaEdit className="text-secondary" />
        </div>
    
        <div className="mb-2">15 products</div>
        <div className="d-flex gap-2">
          <Button variant="outline-primary" size="sm">
            View Products
          </Button>
          <Button variant="outline-secondary" size="sm">
            + Add Product
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
