import React from "react";
import { Layout, notification } from "antd";
import Navbar from "../components/Navbar";
import { db } from "../firebase";
import NewProductForm from "../components/newProductForm";

const { Content } = Layout;

export default function NewProduct() {
  const handleSubmit = (values) => {
    db.collection("products")
      .add(values)
      .then(function () {
        notification.success({
          message: "Document successfully written!",
        });
      })
      .catch(function (error) {
        notification.error({
          message: "Error writing document",
          description: error.message,
        });
        console.error("Error writing document: ", error);
      });
  };

  return (
    <Layout className="layout">
      <Navbar />
      <Content style={{ padding: "50px" }}>
        <div className="site-layout-content">
          <NewProductForm onFinish={handleSubmit} />
        </div>
      </Content>
    </Layout>
  );
}
