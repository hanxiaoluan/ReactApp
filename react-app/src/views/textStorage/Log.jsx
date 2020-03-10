import React from "react";
import { logs } from "./data";
import { List } from "antd";
const Log = () => {
  return (
    <div>
      <List
        dataSource={logs}
        renderItem={item => (
          <List.Item>
            <p style={{}}>日志： {item.text}</p>
            <p>updateTime： {item.updateTime}</p>
          </List.Item>
        )}
      ></List>
    </div>
  );
};
export default Log;
