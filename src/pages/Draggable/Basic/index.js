
import React from 'react'
import ReactDom from 'react-dom'
import Draggable from 'react-draggable'
import { Row, Col, Alert } from 'antd'

export default class DraggableComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startX: 0,
      deltaPosition: {
        x: 0,
        y: 0
      }
    }
  }

  eventLogger = (e, data) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  
  handleStart = (e) => {
    console.log('>>Start>', e)
  }
  handleDrag = (e) => {
    const {startX} = this.state;
    console.log('>>Drag >',  e.clientX - startX)

  }
  handleStop = (e) => {
    console.log('>>Stop >', e)
  }

  onMouseDown = (e) => {
    console.log('onMouseDown=', e.clientX)
    this.setState({
      startX: e.clientX
    })
  }

  showPosition = (e, ui) => {
    const {deltaPosition: {x, y}} = this.state;
    this.setState({
      deltaPosition: {
        x: x+ui.deltaX,
        y: y+ui.deltaY,
      }
    })
  }


  render() {
    const dataTop=[100, 150, 200, 300];
    const { deltaPosition } = this.state;
    const source = [
      {
        id: 0,
        title: 'GitHub',
        href: 'https://github.com/mzabriskie/react-draggable'
      },
      {
        id: 1,
        title: 'Demo',
        href: 'http://mzabriskie.github.io/react-draggable/example/'
      }
    ];
    const options = {
      onStart: this.handleStart,
      onDrag: this.handleDrag,
      onStop: this.handleStop,
      onMouseDown: this.onMouseDown
    }
    const style = {
      display: 'inline-block',
      padding: '10px',
      border: '1px solid #f0f'
    }
    return (
      <Row>
        <Col span={16} offset={4}>
          
          <Alert type="info" showIcon message={
            source.map(item=>(
              <a key={item.id} target="_blank" href={item.href} style={{marginRight: 40}}> {item.title} </a>
            ))
          }></Alert>
          <div style={{ position: 'relative', width: '100%', height: 600, border: '1px solid #ccc', background: `url(${require('../../../assets/logo.svg')})`}}>

            <Draggable {...options}
              handle=".handle"
            >
              <div className="handle" style={style}>我可以被任意拖拽</div>
            </Draggable>

            <Draggable {...options}
              handle=".handle"
              bounds="parent"
            >
              <div className="handle" style={style}>我可以在父元素内 被任意拖拽 <br/> 父元素需设置相对定位属性 </div>
            </Draggable>

            <Draggable {...options}
              handle=".handle"
              axis="x"
            >
              <div className="handle" style={style}>我只能在X轴拖拽</div>
            </Draggable>

            <Draggable {...options}
              handle=".handle"
              axis="y"
            >
              <div className="handle" style={style}>我只能在Y轴拖拽</div>
            </Draggable>

            <Draggable
              onStart={() => false}
            >
              <div className="handle" style={style}>我不想被拖拽</div>
            </Draggable>

            <Draggable
              onDrag={this.showPosition}
            >
              <div className="handle" style={style}>
                <div>I track my deltas</div>
                <div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div>
              </div>
            </Draggable>

            <Draggable {...options}
              handle="em"
            >
              <div style={style}>
                <em style={{border: '1px solid #f00'}}>只能拖拽这里</em>
                <div>handle可以使用标签名</div>
              </div>
            </Draggable>

            <Draggable {...options}
              cancel="em"
            >
              <div style={style}>
                <em style={{border: '1px solid #f00'}}>除了这里都可以</em>
                <div>cancel可以决定那里拖拽无效</div>
              </div>
            </Draggable>

            <Draggable {...options}
              grid={[20, 30]}
            >
              <div style={style}>
                移动步长为20，30
              </div>
            </Draggable>

            <Draggable {...options}
              bounds={{top: -100, right: 100, bottom: 100, left: -100}}
            >
              <div style={style}>
                只能在方圆200内移动
              </div>
            </Draggable>

            
            
            
          </div>

          
          {/* <div style={{ position: 'relative', width: '100%', height: 600, border: '1px solid #ccc', background: `url(${require('../../../assets/logo.svg')})`}}>
            {
              dataTop.map((item, index) => (
                <div key={index} style={{width: 580, height: 40, position: 'absolute', top: item, left: 10, border: '1px solid #ccc'}}>
                  <Draggable
                    axis="x"
                    bounds="parent"
                    handle=".handle"
                    defaultPosition={{x:0,y:0}}
                    disabled={false}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}
                    onMouseDown={this.onMouseDown}
                  >
                    <div className="handle" style={{width: 30, height: 30, border: '1px solid #ff0000'}}  >拖拽</div>
                  </Draggable>
                </div>
              ))
            }
          </div> */}

        </Col>
      </Row>
      
    )
  }
  
}
