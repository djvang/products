import React from "react";

import { Avatar, Card } from "antd";

import { Link, useLocation } from "react-router-dom";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const CardProduct = ({ product }) => {
  return (
    <Card
      actions={[
        <Link to={`/products/${product.id}`}>
          <EditOutlined key="edit" />
        </Link>,
        <Link>
          <DeleteOutlined key="delete" />
        </Link>,
      ]}
    >
      <Card.Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={product.title}
        description={product.description}
      />
    </Card>
  );
};

export default CardProduct;
