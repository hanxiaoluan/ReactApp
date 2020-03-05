import React, { useState, useEffect } from "react";
import { Divider } from "antd";
import { get } from "../../utils/service";

const List = () => {
  const [menu, setMenu] = useState([]);
  const getList = async () => {
    let res = await get("liuchen_StorageList");
    setMenu(res);
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="list">
      {menu.map((item, index) => {
        return (
          <div key={index}>
            <p className="list-item">{item.name}</p>
            <Divider />
          </div>
        );
      })}
    </div>
  );
};
export default List;
