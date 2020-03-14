import React, { Component } from 'react';
import { Card, Steps, Icon, message } from 'antd';
// import { steps } from '../../data';
import styles from './index.less';

export default class LongStep extends Component {
  // 设置组件props默认值
  static defaultProps = {
    showNumber: 5, // 此值过大容器显示不全会引起某些bug。因此需先确定容器能放下的最大步骤数。
    current: 0,
    stepData: [],
    handleStepChange: () => {}
  }
  
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showCurrent: 0,
      middleNumber: 0,
    };
  }

  componentDidMount() {
    const { showNumber } = this.props;
    let showCurrent = Math.floor(showNumber / 2) + 1;
    
    this.setState({
      showCurrent,
      middleNumber: showCurrent,
    });
  }

  display(num) {
    const { data, showCurrent, middleNumber } = this.state;
    const { stepData, showNumber } = this.props;

    if (stepData.length <= showNumber) {
      return { display: '' };
    } else {
      if (num >= showCurrent - middleNumber && num <= showCurrent + showNumber - middleNumber) {
        return { display: '' };
      } else {
        return { display: 'none' };
      }
    }
  }

  prevMove = () => {
    const { showCurrent, middleNumber } = this.state;
    if (showCurrent <= middleNumber) return message.info('已经到最前了哦');
    this.setState({
      showCurrent: showCurrent - 1,
    });
  };

  nextMove = () => {
    const { showCurrent, middleNumber, data } = this.state;
    const { stepData } = this.props;
    if (showCurrent >= stepData.length - middleNumber) return message.info('已经到最后了哦');
    this.setState({
      showCurrent: showCurrent + 1,
    });
  };

  handleStepChange = current => {
    this.props.handleStepChange(current);
  };

  render() {
    const { data } = this.state;
    const { stepData, showNumber, current } = this.props;

    return (
      <div className={styles.step}>
        {stepData.length > showNumber + 1 ? (
          <span className={styles.iconWrap} onClick={this.prevMove}>
            <Icon type="left" />
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
                status={current == index ? 'process' : 'wait'}
                title={item.title || ''}
                description={item.stepName || ''}
                style={this.display(index)}
              ></Steps.Step>
            ))}
          </Steps>
        </div>
        {stepData.length > showNumber + 1 ? (
          <span className={styles.iconWrap} onClick={this.nextMove}>
            <Icon type="right" />
          </span>
        ) : (
          ''
        )}
      </div>
    );
  }
}
