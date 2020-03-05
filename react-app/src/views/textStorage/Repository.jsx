import React from "react";
import { Divider, Input, Button } from "antd";
const Repository = () => {
  return (
    <div className="repository">
      <p>
        <span>仓库名</span>
        <Input className="repository-input" />
        <Button className="toggle-btn">切换</Button>
      </p>

      <p>
        <span>仓库文字</span>
        <Input className="repository-input" />
        <div className="btn-box">
          <Button>清空</Button>
          <Button ghost type="primary">
            复制
          </Button>
        </div>
      </p>
      <Button type="primary" className="submit-btn">
        提交
      </Button>
    </div>
  );
};
export default Repository;
