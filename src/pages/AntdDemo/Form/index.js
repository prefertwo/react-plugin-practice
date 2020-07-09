/* eslint-disable no-plusplus */
import React, { Component } from 'react';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Card, Input, Button } from 'antd';
import { router } from 'umi';

const RULES = [
  {required: true, message: 'ddd'}
];

const dataT = [
  {
    name: 'tom',
    workYears: '3',
    workExperience: 'tomtomt'
  },{
    name: 'tom2',
    workYears: '33',
    workExperience: 'tomtomt33'
  }
];

let CoreMemberNum = 1;

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    CoreMemberNum = dataT.length
  }

  goSection = item => {
    router.push(`./${item.href}`);
  };

  addMore = () => {
    const { form } = this.props;

    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(CoreMemberNum++ );
    form.setFieldsValue({
      keys: nextKeys,
    });
  }

  getInitKeys = () => {
    const { form } = this.props;
    
    let nextKeys = [];
    let name = [];
    let workYears = [];
    let workExperience = [];
    for(let i=0;i<dataT.length;i++) {
      nextKeys = nextKeys.concat(i)
      name = name.concat(dataT[i].name)
      workYears = workYears.concat(dataT[i].workYears)
      workExperience = workExperience.concat(dataT[i].workExperience)
    }

    form.setFieldsValue({
      keys: nextKeys,
      name,
      workYears,
      workExperience
    });
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {form} = this.props;
    form.validateFields((err, values) => {
      // eslint-disable-next-line no-console
      console.log(values)
    })

  }

  render() {
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;


    // 核心人员
    const initkeys = getFieldValue('keys');
    const initval = initkeys || this.getInitKeys();
    getFieldDecorator('keys', { initialValue: initval });
    const keys = getFieldValue('keys');
    const CoreMemberItem = keys.map((k, index) => (
      <Card key={k}>
        <Form.Item label="姓名">
          {getFieldDecorator(`name[${k}]`, {
            initialValue: dataT[index] && dataT[index].name,
            rules: RULES,
          })(<Input placeholder="请输入姓名" />)}
        </Form.Item>
        <Form.Item label="投研相关工作年限">
          {getFieldDecorator(`workYears[${k}]`, {
            initialValue: dataT[index] && dataT[index].workYears,
            rules: RULES,
          })(<Input placeholder="请输入相关工作年限" addonAfter="年" />)}
        </Form.Item>
        <Form.Item label="工作经历">
          {getFieldDecorator(`workExperience[${k}]`, {
            initialValue: dataT[index] && dataT[index].workExperience,
            rules: RULES,
          })(<Input placeholder="请输入相关工作经历" />)}
        </Form.Item>
      </Card>
    ));
    return (
      <Card>
        {/* {list.map(item => (
          <div style={{padding: '10px 20px', border: '1px solid #ccc', borderRadius: 4}} onClick={this.goSection.bind(this, item)}>{item.title}</div>
        ))} */}

        <Form onSubmit={this.handleSubmit} layout="inline">
          {CoreMemberItem}

          <Button onClick={this.addMore}>添加</Button>
          <Button htmlType="submit">提交</Button>
        </Form>
      </Card>
    );
  }
}

export default Form.create()(Index);
