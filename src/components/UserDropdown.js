import React from "react";

import { Avatar, Menu, Dropdown, Button } from "antd";

const menu = () => (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Редактировать
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Выйти
      </a>
    </Menu.Item>
  </Menu>
);

const UserDropdown = () => {
  return (
    <Dropdown overlay={menu} placement="bottomRight" arrow>
      <Avatar size="large">Ivan</Avatar>
    </Dropdown>
  );
};

export default UserDropdown;
