/* eslint-disable consistent-return */
import React, { Component } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Steps, message } from 'antd';
// import { steps } from '../../data';
import styles from './index.less';

export default class LongStep extends Component {
  // 设置组件props默认值
  static defaultProps = {
    showNumber: 5, // 此值过大容器显示不全会引起某些bug。因此需先确定容器能放下的最大步骤数。
    current: 0,
    stepData: [],
    handleStepChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      data: [],
      showCurrent: 0,
      middleNumber: 0,
    };
  }

  componentDidMount() {
    const { showNumber } = this.props;
    const showCurrent = Math.floor(showNumber / 2) + 1;

    this.setState({
      showCurrent,
      middleNumber: showCurrent,
    });
  }

  prevMove = () => {
    const { showCurrent, middleNumber } = this.state;
    if (showCurrent <= middleNumber) return message.info('已经到最前了哦');
    this.setState({
      showCurrent: showCurrent - 1,
    });
  };

  nextMove = () => {
    const { showCurrent, middleNumber } = this.state;
    const { stepData } = this.props;
    if (showCurrent >= stepData.length - middleNumber) return message.info('已经到最后了哦');
    this.setState({
      showCurrent: showCurrent + 1,
    });
  };

  handleStepChange = current => {
    const { handleStepChange } = this.props;
    handleStepChange(current);
  };

  display(num) {
    const { showCurrent, middleNumber } = this.state;
    const { stepData, showNumber } = this.props;

    if (stepData.length <= showNumber) {
      return { display: '' };
    }
    if (num >= showCurrent - middleNumber && num <= showCurrent + showNumber - middleNumber) {
      return { display: '' };
    }
    return { display: 'none' };
  }

  render() {
    const { stepData, showNumber, current } = this.props;

    return (
      <div className={styles.step}>
        {stepData.length > showNumber + 1 ? (
          <span className={styles.iconWrap} onClick={this.prevMove}>
            <LeftOutlined />
          </span>
        ) : (
          ''
        )}
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          <Steps
            current={current}
            labelPlacement="vertical"
            size="small"
            onChange={this.handleStepChange}
          >
            {stepData.map((item, index) => (
              <Steps.Step
                key={index}
                status={current === index ? 'process' : 'wait'}
                title={item.title || ''}
                description={item.stepName || ''}
                style={this.display(index)}
              >
              </Steps.Step>
            ))}
          </Steps>
        </div>
        {stepData.length > showNumber + 1 ? (
          <span className={styles.iconWrap} onClick={this.nextMove}>
            <RightOutlined />
          </span>
        ) : (
          ''
        )}
      </div>
    );
  }
}
