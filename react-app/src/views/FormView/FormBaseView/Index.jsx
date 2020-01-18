import React, { Component } from "react";
import {
  Divider,
  Row,
  Col,
  Alert,
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Checkbox,
  Button,
  AutoComplete,
  Radio,
  DatePicker,
  InputNumber,
  Rate,
  Switch,
  Slider
} from "antd";
import RadioGroup from "antd/lib/radio/group";
import CheckboxGroup from "antd/lib/checkbox/Group";
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const InputGroup = Input.Group;
const residences = [
  {
    label: "地球",
    value: "diqiu",
    children: [
      {
        label: "昆仑山",
        value: "kunlun",
        children: [
          { label: "金光洞", value: "jinguang" },
          { label: "菩提洞", value: "puti" }
        ]
      },
      { label: "亚特兰蒂斯", value: "Asisa" }
    ]
  },
  {
    label: "M78星云",
    value: "M78",
    children: [
      {
        label: "奥特之家",
        value: "aote"
      }
    ]
  }
];
class FormBaseView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { getFieldDecorator,getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 16 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 16 },
        sm: { span: 10 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: { span: 16 },
        sm: { span: 10 ,offset:6}
      }
    };
    return (
      <div>
        <div className="base-style">
          <h3>何时使用</h3>
          <Divider dashed={false} orientation="left">
            text
          </Divider>
          <p>用于创建一个实体或收集信息。</p>
          <p>需要对输入的数据类型进行校验时。</p>
        </div>
        <Row>
          <Col>
            <div className="base-style">
              <div>
                <Alert
                  message="你最好认真的填写表单!"
                  type="warning"
                  showIcon
                  closable
                  banner
                />
              </div>
              <Divider orientation="left">基础功能</Divider>
              <Form {...formItemLayout}>
                <Form.Item
                  label={
                    <span>
                      用户名&nbsp;
                      <Tooltip title="请尽量好听点，真的！如：小白！">
                        <Icon type="question-circle" />
                      </Tooltip>
                    </span>
                  }
                >
                  {getFieldDecorator("username", {
                    rules: [{ required: true, message: "请输入用户名" }]
                  })(<Input placeholder="请输入用户名" />)}
                </Form.Item>
                <Form.Item label="性别:&nbsp;">
                  {getFieldDecorator("gender", {
                    rules: [{ required: true, message: "请选择用户性别" }]
                  })(
                    <RadioGroup>
                      <Radio value={"male"}>男</Radio>
                      <Radio value={"female"}>女</Radio>
                      <Radio value={"unknown"}>不详</Radio>
                    </RadioGroup>
                  )}
                </Form.Item>
                <Form.Item label="爱好:&nbsp;">
                  {getFieldDecorator("hobby", {
                    rules: [{ required: true, message: "请至少选择一个爱好" }],
                    initialValue: ["JavaScript", "Java"]
                  })(
                    <CheckboxGroup
                      style={{ width: "100%", lineHeight: "39px" }}
                    >
                      <Row>
                        <Col span={8}>
                          <Checkbox value={"JavaScript"}>JavaScript</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value={"Java"} disabled>
                            Java
                          </Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox>React</Checkbox>
                        </Col>
                      </Row>
                    </CheckboxGroup>
                  )}
                </Form.Item>
                <Form.Item label="年龄:&nbsp;">
                  {getFieldDecorator("age", {
                    rules: [{ required: true, message: "请填写年龄" }]
                  })(
                    <InputNumber
                      placeholder="请输入年龄"
                      style={{ width: "100%" }}
                    />
                  )}
                </Form.Item>
                <Form.Item label="出生年月:&nbsp;">
                  {getFieldDecorator("birth", {
                    rules: [{ required: true, message: "请选择日期" }]
                  })(
                    <DatePicker
                      placeholder="请选择日期"
                      style={{ width: "100%" }}
                    />
                  )}
                </Form.Item>
                <Form.Item label="邮箱">
                  {getFieldDecorator("email", {
                    rules: [
                      { required: true, message: "请输入邮箱" },
                      {
                        type: "email",
                        message: "请输入正确的邮箱"
                      }
                    ]
                  })(<Input placeholder="请输入邮箱" />)}
                </Form.Item>
                <Form.Item label="密码" hasFeedback>
                  {getFieldDecorator("password", {
                    rules: [{ required: true, message: "请输入密码" }]
                  })(<Input.Password placeholder="请输入密码" />)}
                </Form.Item>
                <Form.Item label="确认密码" hasFeedback>
                  {getFieldDecorator("confirm", {
                    rules: [{ required: true, message: "请确认密码" }]
                  })(<Input.Password placeholder="请确认密码" />)}
                </Form.Item>
                <Form.Item label="家庭住址">
                  {getFieldDecorator("address", {
                    initialValue: ["diqiu", "kunlun", "puti"],
                    rules: [
                      {
                        type: "array",
                        required: true,
                        message: "请选择家庭住址"
                      }
                    ]
                  })(
                    <Cascader
                      options={residences}
                      placeholder="请选择住址"
                    ></Cascader>
                  )}
                </Form.Item>
                <Form.Item label="联系电话" extra="最好输入真实电话号码">
                  {getFieldDecorator("phone", {
                    rules: [{ required: true, message: "请输入电话号码" }]
                  })(
                    <InputGroup compact>
                      <Select style={{ width: '20%' }}>
                        <Option value="+86">+86</Option>
                        <Option value="+87">+87</Option>
                      </Select>
                      <Input style={{ width: "80%" }} placeholder="请输入电话号码"/>
                    </InputGroup>
                  )}
                </Form.Item>
                <Form.Item label="评分" extra="这个项目如何">
                  {getFieldDecorator("rate", {
                    initialValue: 5
                  })(<Rate disabled />)}
                </Form.Item>
                <Form.Item label="switch">
                  {getFieldDecorator("switch", {
                    initialValue: true,
                    valuePropName: "checked"
                  })(<Switch />)}
                </Form.Item>
                <Form.Item label="slider">
                  {getFieldDecorator("slider", {
                    initialValue: 30
                  })(<Slider disabled={getFieldValue('switch')?false:true} />)}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  {getFieldDecorator("agreement", {
                    valuePropName: "checked"
                  })(
                    <Checkbox>
                      阅读并理解 <a href="https://github.com/hanxiaoluan/ReactApp">此协议</a>
                    </Checkbox>
                  )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" disabled={getFieldValue('agreement')?false:true}>注册</Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
const WrapperFormBase = Form.create({ name: "base_form" })(FormBaseView);
export default WrapperFormBase;
