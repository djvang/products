import React, { useState, useEffect } from "react";
import { Layout, Spin, notification } from "antd";
import Navbar from "../components/Navbar";
import { db } from "../firebase";
import NewProductForm from "../components/newProductForm";

import { useParams } from "react-router-dom";

const { Content } = Layout;

export default function EditProduct() {
  const [values, setValues] = useState(null);

  let { id } = useParams();

  const handleSubmit = (values) => {
    db.collection("products")
      .doc(id)
      .set(values)
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

  const fields = values
    ? Object.entries(values).reduce((fields, [key, value]) => {
        fields.push({
          name: [key],
          value,
        });

        return fields;
      }, [])
    : [];

  useEffect(() => {
    const docRef = db.collection("products").doc(id);

    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setValues(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <Layout className="layout">
      <Navbar />
      <Content style={{ padding: "50px" }}>
        <div className="site-layout-content">
          <Spin spinning={!values}>
            <NewProductForm fields={fields} onFinish={handleSubmit} />
          </Spin>
        </div>
      </Content>
    </Layout>
  );
}
