import React, { Component } from "react";
import { List } from "antd";

const Posts = ({ posts }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={posts}
      renderItem={item => <p>{item.title}</p>}
    ></List>
  );
};
export default Posts;
