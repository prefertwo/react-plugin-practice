import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { router } from 'umi';
import styles from './index.less';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  handleRouter = item => {
    router.push(`/antd/${item.router}`);
  };

  render() {
    const data = [
      {
        id: 0,
        name: '可动态增加表单',
        router: 'dynamicform',
      },
      {
        id: 1,
        name: '表格',
        router: 'table',
      },
      {
        id: 2,
        name: '步骤条',
        router: 'step',
      },
    ];
    return (
      <PageHeaderWrapper>
        <div className={styles.wrap}>
          {data.map(item => (
            <div key={item.id} className={styles.section} onClick={() => this.handleRouter(item)}>
              {item.name}
            </div>
          ))}
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default Home;
