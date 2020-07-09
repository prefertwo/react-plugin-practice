import React, { Component } from 'react'


let swiper = window.Swiper

class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  componentDidMount() {
    if(this.swiper) {
      this.swiper.destroy()
    }
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div>
        swiper
      </div>
      
    )
  }
}

export default Index