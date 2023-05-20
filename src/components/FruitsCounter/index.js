// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mcount: 0, bcount: 0}

  onMango = () => {
    this.setState(prevState => ({mcount: prevState.mcount + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({bcount: prevState.bcount + 1}))
  }

  render() {
    const {mcount, bcount} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1>
            Bob ate {mcount} mangoes {bcount} bananas
          </h1>
          <div className="imgcard">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="image"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="image"
            />
          </div>
          <div>
            <button type="button" className="button1" onClick={this.onMango}>
              Eat mango
            </button>
            <button type="button" className="button" onClick={this.onBanana}>
              Eat banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
