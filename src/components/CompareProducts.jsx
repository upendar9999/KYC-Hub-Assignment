import React, { useContext, useState } from "react";
import { Button, Modal, Table, Typography } from "antd";
import Context from "../context/Context";

const CompareProducts = () => {
  const { products, productsToCompare, setProductsToCompare } =
    useContext(Context);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { Text } = Typography;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleRemove = (productId) => {
    setProductsToCompare(
      productsToCompare.filter((product) => product.id !== productId)
    );
  };

  const handleAdd = (product) => {
    if (productsToCompare.length < 4) {
      setProductsToCompare([...productsToCompare, product]);
    }
  };

  const columns = [
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        const isProductSelected = productsToCompare.some(
          (p) => p.id === record.id
        );
        return isProductSelected ? (
          <Button type="link" onClick={() => handleRemove(record.id)}>
            Remove
          </Button>
        ) : (
          <Button
            type="link"
            onClick={() => handleAdd(record)}
            disabled={productsToCompare.length >= 4}
          >
            Add
          </Button>
        );
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  const attributes = ["Title", "Price", "Discount Percentage", "Brand"];
  return (
    <div className="flex-1 p-4 ml-64 mt-16 overflow-auto">
      <Modal
        title="Add Products to Compare"
        open={isModalVisible}
        onCancel={handleCancel}
        onOk={handleCancel}
      >
        <Table
          columns={columns}
          dataSource={products.map((item) => ({ ...item, key: item.id }))}
          pagination={{ pageSize: 5 }}
        />
      </Modal>

      {/* comparison table  */}

      {productsToCompare.length > 0 ? (
        <div className="overflow-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b"></th>
                {productsToCompare.map((product) => (
                  <th
                    key={product.id}
                    className="px-4 py-2 border-b text-center"
                  >
                    <div className="flex flex-col items-center">
                      <span className="font-semibold">{product.title}</span>
                      <Button
                        type="link"
                        onClick={() => handleRemove(product.id)}
                        className="text-red-400"
                      >
                        Remove
                      </Button>
                    </div>
                  </th>
                ))}
                {productsToCompare.length < 4 && (
                  <th className="px-4 py-2 border-b text-center">
                    <Button
                      className="bg-green-400"
                      type="dashed"
                      onClick={showModal}
                    >
                      + Add More
                    </Button>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {attributes.map((attribute) => (
                <tr key={attribute}>
                  <td className="px-4 py-2 border-b font-semibold">
                    {attribute}
                  </td>
                  {productsToCompare.map((product) => (
                    <td
                      key={product.id}
                      className="px-4 py-2 border-b text-center"
                    >
                      {attribute === "Title" && product.title}
                      {attribute === "Price" && product.price}
                      {attribute === "Discount Percentage" &&
                        product.discountPercentage}
                      {attribute === "Brand" && product.brand}
                    </td>
                  ))}
                  {productsToCompare.length < 4 && (
                    <td className="px-4 py-2 border-b"></td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <p className="font-bold text-center">
            No products selected for comparison.
          </p>

          <div className="px-4 py-2 border-b text-center bg-yellow-200">
            <Button type="dashed" onClick={showModal}>
              + Add More
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompareProducts;
