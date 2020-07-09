import React, { Component } from 'react';
import { Card, Steps, message, Divider, Alert } from 'antd';
import LongStep from './LongStep';
// import LongStep from 'longstep'
import { steps } from '../../data';
import styles from './index.less';

export default class StepDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data2: [],
      current: 5,
      showCurrent: 2,
    };
  }

  componentDidMount() {
    // console.log('steps==', LongStep.sum(2,3));
    const data = steps(12);
    const data2 = steps(5);
    this.setState({
      data,
      data2,
    });
  }

  render() {
    const { data, data2, current } = this.state;

    return (
      <Card title="步骤条">
        <h3>步骤超出</h3>
        <LongStep stepData={data} />
        <Divider />

        <h3>步骤不超出</h3>
        <LongStep stepData={data2} />

        <Alert type="info" showIcon message={<a href="https://ant.design/components/steps-cn/" target="_blank">详细</a>} />
        
      </Card>
    );
  }
}
