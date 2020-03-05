import React, { useState, useEffect } from "react";
import { Divider } from "antd";
import { get } from "../../utils/service";

const List = () => {
  /* const getList = async () => {
    let res = await get("liuchen_StorageList");
    return res;
  };
  const [menu, setMenu] = useState(getList()); */
  const menu = ["栾晗霄", "大好人"];
  return (
    <div>
      {menu.map((item, index) => {
        return (
          <div key={index}>
            {item}
            <Divider />
          </div>
        );
      })}
    </div>
  );
};
export default List;
