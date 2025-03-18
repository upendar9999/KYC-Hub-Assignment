import React, { useContext } from "react";
import Context from "../context/Context";
import { Button, Table } from "antd";
import { useNavigate } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { products, productsToCompare, setProductsToCompare } =
    useContext(Context);
  useFetchProducts(); // fetching data through custom hook

  const handleCompare = (product) => {
    if (productsToCompare.length < 4) {
      setProductsToCompare([...productsToCompare, product]);
      navigate("/compareproducts");
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
      render: (text, record) => {
        const isCompared = productsToCompare.some((p) => p.id === record.id);
        return (
          <span className={isCompared ? "font-bold text-blue-500" : ""}>
            {text}
          </span>
        );
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price ($)",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      render: (text, record) => {
        const isCompared = productsToCompare.some((p) => p.id === record.id);
        return (
          <span className={isCompared ? "font-bold text-blue-500" : ""}>
            {text}
          </span>
        );
      },
    },
    {
      title: "Discount (%)",
      dataIndex: "discountPercentage",
      key: "discountPercentage",
      sorter: (a, b) => a.discountPercentage - b.discountPercentage,
      render: (text, record) => {
        const isCompared = productsToCompare.some((p) => p.id === record.id);
        return (
          <span className={isCompared ? "font-bold text-blue-500" : ""}>
            {text}
          </span>
        );
      },
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      sorter: (a, b) => (a.brand || "").localeCompare(b.brand || ""),
      render: (text, record) => {
        const isCompared = productsToCompare.some((p) => p.id === record.id);
        return (
          <span className={isCompared ? "font-bold text-blue-500" : ""}>
            {text}
          </span>
        );
      },
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      sorter: (a, b) => (a.brand || "").localeCompare(b.brand || ""),
    },
    {
      title: "Image",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (img) => (
        <img src={img} alt="product" className="w-16 h-16 rounded-lg" />
      ),
    },
    {
      title: "Compare",
      key: "compare",
      render: (_, record) => {
        const isProductAdded = productsToCompare.some(
          (p) => p.id === record.id
        );
        return (
          <Button
            onClick={() => {
              handleCompare(record);
            }}
            disabled={isProductAdded || productsToCompare.length >= 4}
          >
            Compare
          </Button>
        );
      },
    },
  ];

  return (
    <div className="flex-1 p-4 ml-64 mt-16 overflow-auto">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <Table
        columns={columns}
        dataSource={products.map((item) => ({ ...item, key: item.id }))}
        pagination={{ pageSize: 5 }}
        className="bg-white shadow-lg p-4 rounded-lg"
      />
    </div>
  );
};

export default ProductDetails;
