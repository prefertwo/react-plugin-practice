import React, { Component } from 'react';

import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { Card, Typography, Alert } from 'antd';
import QRCode from 'qrcode.react'

import moment from 'moment'

import styles from './Welcome.less';




const CodePreview = ({ children }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const originDate = new Date().getTime();
    let date1 = new Date("2020-03-16").getTime();
    let date2 = new Date("2020-02-01").getTime();
    // let date2 = moment(1586422695351).format("YYYY-MM-DD")
    console.log('guozheng', date1, date2);
    // if(date2 >date1) {
    //   console.log('77');
    // } else {
    //   console.log('88');
    // }
    this.setState({
      originDate: originDate,
    })

    const objT = {
      a: 'tom',
      b: 12,
      c: 'jerry'
    }
    const {a, ...otherP} = objT;
    console.log(a);
    console.log(otherP);
  }

  render() {
    const {originDate} = this.state;
    const dateDemo = [
      {
        id: 1001,
        text: '时间戳',
        value: originDate
      }
    ]
    return (
      <PageHeaderWrapper>
        <Card>
          <Alert
            message="umi ui 现已发布，点击右下角 umi 图标即可使用"
            type="success"
            showIcon
            banner
            style={{
              margin: -12,
              marginBottom: 24,
            }}
          />
          <Typography.Text strong>
            <a target="_blank" rel="noopener noreferrer" href="https://pro.ant.design/docs/block">
              <FormattedMessage
                id="app.welcome.link.block-list"
                defaultMessage="基于 block 开发，快速构建标准页面"
              />
            </a>
          </Typography.Text>
          <CodePreview> npm run ui</CodePreview>
          <Typography.Text
            strong
            style={{
              marginBottom: 12,
            }}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pro.ant.design/docs/available-script#npm-run-fetchblocks"
            >
              <FormattedMessage id="app.welcome.link.fetch-blocks" defaultMessage="获取全部区块" />
            </a>
          </Typography.Text>
          <CodePreview> npm run fetch:blocks</CodePreview>
        </Card>

        {
          dateDemo.map(item => (
            <div className={styles.dateSection} key={item.id}>
              <div className={styles.dateKey}>{item.text}</div>
              <div className={styles.dateValue}>{item.value}</div>
            </div>
          ))
        }
        
        <QRCode style={{position: 'fixed', right: 10, top: 100}} value="https://www.baidu.com" size={300} fgColor="#ff00ff" />

      </PageHeaderWrapper>
    );
  }
}

export default Welcome;
