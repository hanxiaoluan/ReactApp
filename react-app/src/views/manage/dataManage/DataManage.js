import React, { Component } from 'react';
import { Table, Tag, message } from 'antd';
import { getDataList } from '@/api/data';

class DataManage extends Component {
  state = {
    dataSource: [],
    showAlert: false,
  };
  initPage = async () => {
    let res = await getDataList();
    this.setState({ dataSource: res });
  };
  componentDidMount() {
    this.initPage();
  }
  render() {
    const columns = [
      {
        title: 'key',
        dataIndex: 'key',
      },
      {
        title: 'value',
        dataIndex: 'value',
        render: (text, record) => JSON.stringify(text),
      },
      {
        title: 'action',
        render: (text, record) => (
          <Tag
            color="error"
            onClick={() => {
              message.info('暂无此功能，敬请期待');
            }}
          >
            删除
          </Tag>
        ),
      },
    ];
    return (
      <div>
        <Table
          columns={columns}
          dataSource={this.state.dataSource}
          rowKey={(record) => record.key}
        />
      </div>
    );
  }
}

export default DataManage;
