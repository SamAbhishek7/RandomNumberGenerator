// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  RandomNumber = () => {
    this.setState({
      number: Math.floor(Math.random() * 100 + 1),
    })
  }

  render() {
    const {number} = this.state
    return (
      <div className="main-container">
        <div className="box-container">
          <h1 className="main-heading">Random Number</h1>
          <p className="main-para">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick={this.RandomNumber} className="generator">
            Generate
          </button>
          <p className="randomno">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
