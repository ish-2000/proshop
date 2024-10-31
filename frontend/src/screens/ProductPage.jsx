import React, { useState } from "react";
import { Button, Select, InputNumber, Card, Image, Rate } from "antd";

const ProductPage = () => {
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4">
        <Image
          src="https://example.com/path/to/product-image.jpg"
          alt="Product"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 p-4 flex flex-col space-y-4">
        <h1 className="text-2xl font-semibold">Product Name</h1>
        <Rate allowHalf defaultValue={4.5} />
        <p className="text-lg font-bold text-gray-700">$49.99</p>
        <p className="text-gray-600">
          A stylish and comfortable product description here to attract users.
          Made with high-quality materials.
        </p>

        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Size:</span>
          <Select
            placeholder="Select Size"
            value={size}
            onChange={setSize}
            options={[
              { label: "S", value: "S" },
              { label: "M", value: "M" },
              { label: "L", value: "L" },
              { label: "XL", value: "XL" },
            ]}
          />
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Color:</span>
          <Select
            placeholder="Select Color"
            value={color}
            onChange={setColor}
            options={[
              { label: "Red", value: "Red" },
              { label: "Blue", value: "Blue" },
              { label: "Black", value: "Black" },
              { label: "White", value: "White" },
            ]}
          />
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Quantity:</span>
          <InputNumber
            min={1}
            max={10}
            value={quantity}
            onChange={setQuantity}
          />
        </div>

        <Button type="primary" className="w-full mt-4">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductPage;
