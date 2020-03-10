import React, { useState, useEffect } from "react";
import { Divider, Menu } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./index.scss";
import List from "./List";
import Repository from "./Repository";
import Log from "./Log";
const TextStorage = () => {
  const titleList = ["list", "repository", "log"];
  const [showComponent, setShowComponent] = useState("list");
  const [showRepository, setShowRepository] = useState("");

  const toRepository = repositoryName => {
    setShowRepository(repositoryName);
    setShowComponent("repository");
  };

  return (
    <div className="text-storage">
      <h3>
        文字搜集仓{" "}
        <PlusOutlined
          style={{ color: "red", marginLeft: 10, cursor: "pointer" }}
        />
      </h3>
      <Divider />
      <Menu
        mode="horizontal"
        theme="light"
        selectedKeys={[
          (titleList.findIndex(item => item === showComponent) + 1).toString()
        ]}
      >
        <Menu.Item key="1" onClick={() => setShowComponent("list")}>
          列表
        </Menu.Item>
        <Menu.Item key="2" onClick={() => setShowComponent("repository")}>
          仓库
        </Menu.Item>
        <Menu.Item key="3" onClick={() => setShowComponent("log")}>
          更新日志
        </Menu.Item>
      </Menu>
      <div>
        {showComponent === "list" ? (
          <List
            toRepository={repositoryName => {
              toRepository(repositoryName);
            }}
          />
        ) : showComponent === "repository" ? (
          <Repository showRepository={showRepository} />
        ) : (
          <Log />
        )}
      </div>
    </div>
  );
};
export default TextStorage;
