import React, { Component } from 'react';

// import {Chart, Geom, Axis, Tooltip, Legend, Coord} from 'bizcharts'
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';

import MockData from '../../data';

const data = [
  {
    month: 'Jan',
    city: 'Tokyo',
    temperature: 7,
  },
  {
    month: 'Jan',
    city: 'London',
    temperature: 3.9,
  },
  {
    month: 'Feb',
    city: 'Tokyo',
    temperature: 6.9,
  },
  {
    month: 'Feb',
    city: 'London',
    temperature: 4.2,
  },
  {
    month: 'Mar',
    city: 'Tokyo',
    temperature: 9.5,
  },
  {
    month: 'Mar',
    city: 'London',
    temperature: 5.7,
  },
  {
    month: 'Apr',
    city: 'Tokyo',
    temperature: 14.5,
  },
  {
    month: 'Apr',
    city: 'London',
    temperature: 8.5,
  },
  {
    month: 'May',
    city: 'Tokyo',
    temperature: 18.4,
  },
  {
    month: 'May',
    city: 'London',
    temperature: 11.9,
  },
  {
    month: 'Jun',
    city: 'Tokyo',
    temperature: 21.5,
  },
  {
    month: 'Jun',
    city: 'London',
    temperature: 15.2,
  },
  {
    month: 'Jul',
    city: 'Tokyo',
    temperature: 25.2,
  },
  {
    month: 'Jul',
    city: 'London',
    temperature: 17,
  },
  {
    month: 'Aug',
    city: 'Tokyo',
    temperature: 26.5,
  },
  {
    month: 'Aug',
    city: 'London',
    temperature: 16.6,
  },
  {
    month: 'Sep',
    city: 'Tokyo',
    temperature: 23.3,
  },
  {
    month: 'Sep',
    city: 'London',
    temperature: 14.2,
  },
  {
    month: 'Oct',
    city: 'Tokyo',
    temperature: 18.3,
  },
  {
    month: 'Oct',
    city: 'London',
    temperature: 10.3,
  },
  {
    month: 'Nov',
    city: 'Tokyo',
    temperature: 13.9,
  },
  {
    month: 'Nov',
    city: 'London',
    temperature: 6.6,
  },
  {
    month: 'Dec',
    city: 'Tokyo',
    temperature: 9.6,
  },
  {
    month: 'Dec',
    city: 'London',
    temperature: 4.8,
  },
];
const cols = {
  month: {
    range: [0, 1],
  },
};

const dataT = [];

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log(MockData);
    // eslint-disable-next-line array-callback-return
    MockData.chartData.map(item => {
      dataT.concat(
        {
          month: item.netDate,
          city: 'netValue',
          temperature: item.netValue,
        },
        {
          month: item.netDate,
          city: 'acumulateNetValue',
          temperature: item.acumulateNetValue,
        },
      );
    });

    // if(!window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    //   alert("PC端")
    // }
  }

  isMobile = () => {
    if (
      !window.navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
      )
    ) {
      return true; // 移动端
    }
    return false; // PC端
  };

  render() {
    return (
      <div>
        <h3>图表</h3>
        <div id="mountNode">
          <Chart height={400} width={800} data={data} scale={cols}>
            {/* //   <Legend /> */}
            <Axis name="month" />
            <Axis
              name="temperature"
              label={{
                formatter: val => `${val}°C`,
              }}
            />
            <Tooltip
              crosshairs={{
                type: 'y',
              }}
            />
            <Geom
              type="line"
              position="month*temperature"
              size={2}
              color="city"
              shape="smooth"
            />
            <Geom
              type="point"
              position="month*temperature"
              size={4}
              shape="circle"
              color="city"
              style={{
                stroke: '#fff',
                lineWidth: 1,
              }}
            />
          </Chart>
        </div>
      </div>
    );
  }
}

export default Index;
