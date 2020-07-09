import React, { Component } from 'react';
import { Table, Typography } from 'antd';

const {Text} = Typography;

import styles from './index.css';

function FormatterTableItem(val) {
  return val || '--';
}

class BasicTable extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    let columns = [
      {
        dataIndex: 'id',
        title: 'ID',
        render: (text, record, index) => {
          return text + 1
        }
      },
      {
        dataIndex: 'name',
        title: '姓名',
      },
      {
        dataIndex: 'phone',
        title: '手机',
        render: (val) => {
          return FormatterTableItem(val)
        }
      },
      {
        dataIndex: 'email',
        title: '邮箱',
        render: (val) => {
          return FormatterTableItem(val)
        }
      },
      {
        dataIndex: 'address',
        title: '地址',
      },
    ];
    let data = [];
    for (let i = 0; i < 16; i++) {
      data.push({
        id: i,
        name: `测试用户${i}`,
        address: `上海市之俊大厦${i + 1}层20${i > 9 ? i : i + '0'}`,
      });
    }

    this.setState({ data, columns });
  }

  tableSummaryFun = (currentData) => {
    console.log(currentData)
    return '总结'
  }

  render() {
    const { data, columns } = this.state;

    return (
      <div>
        <Table
          title={() => '基本表格'}
          dataSource={data}
          columns={columns}
          rowKey={row => row.id}
          bordered={true}
          size="default"
          rowClassName={(row, index) => (index % 2 == 0 ? styles.basic_row : '')}
        ></Table>
      </div>
    );
  }
}

export default BasicTable;
