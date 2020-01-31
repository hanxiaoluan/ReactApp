import React, { Component } from "react";
import { Table, Divider, Col, Row, Anchor, Tag, Button, Alert } from "antd";
const { Link } = Anchor;
const { Column } = Table;
const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Address", dataIndex: "address", key: "address" },
  {
    title: "Tags",
    dataIndex: "tags",
    key: "tags",
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") color = "volcano";
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "Action",
    key: "action",
    render: (text, record, index) => (
      <span>
        <Button type="link">Invite {record.name}</Button>
        <Divider type="vertical" />
        <Button type="link">Delete</Button>
      </span>
    )
  }
];
const dataSource = [];
for (let i = 0; i < 46; i++) {
  dataSource.push({
    key: i,
    name: `SmallWhite ${i}`,
    age: `${i + 1}`,
    address: `花果山 水帘洞 ${i}`,
    tags: ["nice", "developer"]
  });
}
class Table1 extends Component {
  render() {
    return <Table dataSource={dataSource} columns={columns} />;
  }
}
const Table2 = () => (
  <Table dataSource={dataSource}>
    <Column title="Name" dataIndex="name" key="name"></Column>
    <Column title="Age" dataIndex="age" key="age"></Column>
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") color = "volcano";
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      )}
    />
    <Column
      title="Action"
      dataIndex="action"
      render={(text, record) => (
        <span>
          <Button type="link">Invite {record.name}</Button>
          <Divider type="vertical" />
          <Button type="link">Delete</Button>
        </span>
      )}
    />
  </Table>
);
class Table3 extends Component {
  state = {
    selectedRowKeys: [],
    loading: false
  };
  start = () => {
    this.setState({ loading: true });
    //axios request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false
      });
    }, 1000);
  };
  onSelectChange = selectedRowKeys => {
    console.log(`selectedRowKeys:${selectedRowKeys}`);
    console.log(selectedRowKeys.length);
    this.setState({ selectedRowKeys });
  };
  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [
        {
          key: "all-data",
          text: "Select All Data",
          onSelect: () => {
            this.setState({
              selectedRowKeys: [...Array(46).keys()] // 0...45
            });
          }
        },
        {
          key: "odd",
          text: "Select Odd Row",
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          }
        },
        {
          key: "even",
          text: "Select Even Row",
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          }
        }
      ]
    };
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={selectedRowKeys.length === 0}
            loading={loading}
          >
            Reload
          </Button>
          <span style={{ marginLeft: 8 }}>
            {selectedRowKeys.length !== 0 &&
              `Selected${selectedRowKeys.length}`}
          </span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataSource}
        />
      </div>
    );
  }
}
class Table4 extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null
  };
  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };
  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };
  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "age"
      }
    });
  };
  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        filters: [
          { text: "SmallWhite 20", value: "SmallWhite 20" },
          { text: "SmallWhite 30", value: "SmallWhite 30" }
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
        ellipsis: true
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === "age" && sortedInfo.order,
        ellipsis: true
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
        filters: [
          { text: "London", value: "London" },
          { text: "New York", value: "New York" }
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === "address" && sortedInfo.order,
        ellipsis: true
      },
      {
        title: "Tags",
        dataIndex: "tags",
        key: "tags",
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? "geekblue" : "green";
              if (tag === "loser") color = "volcano";
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        )
      },
      {
        title: "Action",
        key: "action",
        render: (text, record, index) => (
          <span>
            <Button type="link">Invite {record.name}</Button>
            <Divider type="vertical" />
            <Button type="link">Delete</Button>
          </span>
        )
      }
    ];
    return (
      <div>
        <div style={{marginBottom:16}}>
          <Button onClick={this.setAgeSort}>Sort age</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </div>
        <Table columns={columns} dataSource={dataSource} onChange={this.handleChange} />
      </div>
    );
  }
}
class MyTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="base-style">
          <h3>何时使用</h3>
          <Divider />
          <p>当有大量结构化的数据需要展现时；</p>
          <p>当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。</p>
        </div>
        <Row>
          <Anchor className="toc-affix">
            <Link title="基础表格" href='#basic'/>
            <Link title="JSX表格" href='#JSX' />
            <Link title="可选表格" href='#checkful' />
            <Link title="可筛选排序表格" href='#sort' />
          </Anchor>
          <Col>
            <div className="base-style">
              <h3 id="basic">基础表格</h3>
              <Divider orientation="left">基础表格</Divider>
              <Table1 />
            </div>
          </Col>
          <Col>
            <div className="base-style">
              <h3 id='JSX'>JSX表格</h3>
              <Divider orientation="left">JSX表格</Divider>
              <Table2 />
            </div>
          </Col>
          <Col>
            <div className="base-style">
              <h3 id='checkful'>可选表格</h3>
              <Divider orientation="left">可选表格</Divider>
              <Table3 />
            </div>
          </Col>
          <Col>
            <div className="base-style">
              <h3 id='sort'>可筛选排序表格</h3>
              <Divider orientation="left">可筛选排序表格</Divider>
              <Table4 />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default MyTable;
