import React, { Component } from 'react';
// import
import { HotTable } from '@handsontable/react';
import 'handsontable/dist/handsontable.full.css';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const data = [
      ['', 'ford', 'volvo', 'toyat', 'honda'],
      ['2016', 12, 11, 13, 15],
      ['2017', 12, 11, 13, 15],
      ['2018', 12, 11, 13, 15],
      ['2019', 12, 11, 13, 15],
    ];
    return (
      <div id="hot-app">
        <HotTable
          data={data}
          colHeaders
          rowHeaders
          width="600"
          height="300"
        ></HotTable>
      </div>
    );
  }
}

export default Index;
