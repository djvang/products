import React from "react";
import { Layout, Menu } from "antd";
import UserDropdown from "./UserDropdown";

import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;

export default function Navbar() {
  let location = useLocation();
  return (
    <Header className="c-header">
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item key="/">
          <Link to="/">Products</Link>{" "}
        </Menu.Item>
        <Menu.Item key="/new">
          <Link to="/new">Add Product</Link>{" "}
        </Menu.Item>
      </Menu>
      <UserDropdown />
    </Header>
  );
}
