import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import BasicTable from './BasicTable'

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <BasicTable />
      </div>
    );
  }
}

export default Index;
