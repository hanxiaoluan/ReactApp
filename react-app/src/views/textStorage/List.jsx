import React, { useState, useEffect } from "react";
import { Divider } from "antd";
import { textStorageListService } from "./request";

const List = ({ toRepository }) => {
  const [menu, setMenu] = useState([]);
  const getList = async () => {
    let res = await textStorageListService.get();
    setMenu(res);
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="list">
      {menu.length > 0 &&
        menu.map((item, index) => {
          return (
            <div key={index} onClick={() => toRepository(item.name)}>
              <p className="list-item">{item.name}</p>
              <Divider />
            </div>
          );
        })}
      <div className="list-footer">没有更多了</div>
    </div>
  );
};
export default List;
