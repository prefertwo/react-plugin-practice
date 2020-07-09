import React from 'react'
import {Button, Input} from 'antd'

export default class Account extends React.Component{
  state = {}

  getValue = (e) => {
    console.log(e);

  }

  render() {
    return (
      <div>
        <Input placeholder="请输入元字符" onChange={this.getValue} />

        <Button type="primary"  >加密</Button>
        <Button type="ghost" >解密</Button>
      </div>
    )
  }
}
