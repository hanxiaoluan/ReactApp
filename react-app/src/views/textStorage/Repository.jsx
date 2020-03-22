import React, { useState, useEffect } from "react";
import { Divider, Input, Button, Alert, message } from "antd";
import { textStorageService, textStorageListService } from "./request";

const Repository = ({ showRepository }) => {
  const [repositoryName, setRepositoryName] = useState(showRepository || "");
  const [repositoryContent, setRepositoryContent] = useState("");
  const updateStorageList = async storageName => {
    const storageData = {
      name: repositoryName,
      date: new Date()
    };
    let storageList = await textStorageListService.get();
    if (!Array.isArray(storageList)) {
      storageList = [];
    }
    storageList = storageList.filter(item => item.name !== repositoryName);
    storageList.unshift(storageData);
    await textStorageListService.post(storageList);
  };
  const submit = async () => {
    let res = await textStorageService.post(repositoryName, repositoryContent);
    await updateStorageList(repositoryName);
  };
  const handleCopy = value => {
    const tempInput = document.createElement("input");
    tempInput.setAttribute("value", repositoryContent);
    document.body.appendChild(tempInput);
    tempInput.select();
    let successful = document.execCommand("copy");
    document.body.removeChild(tempInput);
    if (successful) {
      message.success("复制成功");
    } else {
      message.warning("复制失败，请手动复制");
    }
  };
  const getText = async () => {
    try {
      console.log(repositoryName);
      let res = await textStorageService.get(repositoryName);
      console.log(res);
      setRepositoryContent(res);
    } catch (error) {
      message.error(error);
    }
  };
  useEffect(() => {
    setRepositoryName(showRepository);
    repositoryName && getText();
  }, []);
  return (
    <div className="repository">
      <p>
        <span>仓库名</span>
        <input
          className="repository-input"
          value={repositoryName}
          onChange={e => setRepositoryName(e.target.value)}
        />
        <Button className="toggle-btn">切换</Button>
      </p>
      <p>
        <span>仓库文字</span>
        <input
          className="repository-input"
          value={repositoryContent}
          onChange={e => setRepositoryContent(e.target.value)}
        />
        <span className="btn-box">
          <Button>清空</Button>
          <Button
            ghost
            type="primary"
            onClick={() => handleCopy(repositoryContent)}
          >
            复制
          </Button>
        </span>
      </p>
      <Button type="primary" className="submit-btn" onClick={() => submit()}>
        提交
      </Button>
    </div>
  );
};
export default Repository;
