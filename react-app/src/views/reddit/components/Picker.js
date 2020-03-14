import React, { Componet } from "react";
import { Radio } from "antd";
import { selectSubreddit } from "../../../actions/reddit";

const Picker = ({ selectedSubreddit, selectSubreddit }) => {
  return (
    <Radio.Group
      value={selectedSubreddit}
      onChange={e => selectSubreddit(e.target.value)}
    >
      <Radio.Button value="reactjs">reactjs</Radio.Button>
      <Radio.Button value="frontend">frontend</Radio.Button>
    </Radio.Group>
  );
};
export default Picker;
