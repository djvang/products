import React, { useEffect, useState } from "react";
import { Layout, Row, Col } from "antd";
import CardProduct from "../components/CardProduct";
import { db } from "../firebase";

import Navbar from "../components/Navbar";

const { Content } = Layout;

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const products = await db.collection("products");
      products.get().then((querySnapshot) => {
        const tempDoc = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(tempDoc);
      });
    }

    getProducts();
  }, []);

  return (
    <Layout className="layout">
      <Navbar />
      <Content style={{ padding: "50px" }}>
        <div className="site-layout-content">
          <Row gutter={[16, 16]}>
            {products.map((product) => {
              return (
                <Col key={product.id} span={8}>
                  <CardProduct product={product} />
                </Col>
              );
            })}
          </Row>
        </div>
      </Content>
    </Layout>
  );
}
