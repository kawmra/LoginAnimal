import React from 'react'
import { render } from 'react-dom'
import rightArm from '../res/arm_right.png'
import leftArm from '../res/arm_left.png'
import styles from './css/index.css'
import Bear from './component/Bear'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      directionX: 0.5,
      directionY: 0.5,
      blinkfold: false,
    }
  }

  componentWillMount() {
    window.addEventListener('mousemove', (event) => {
      const directionX = event.pageX / window.innerWidth
      const directionY = event.pageY / window.innerHeight
      this.updateDirections(directionX, directionY)
    })
    window.addEventListener('touchmove', (event) => {
      const touch = event.touches[0]
      const directionX = touch.pageX / window.innerWidth
      const directionY = touch.pageY / window.innerHeight
      this.updateDirections(directionX, directionY)
    })
  }

  updateDirections(x, y) {
    this.setState({
      directionX: x,
      directionY: y,
    })
  }

  handleOnChange(e) {
    this.setState({
      directionX: e.target.value.length / 25.0,
      directionY: 0.8
    })
  }

  handleOnFocus(e) {
    this.handleOnChange(e)
  }

  handleOnBlur(e) {
    this.setState({
      directionX: 0.5,
      directionY: 0.5,
      blinkfold: false,
    })
  }

  handleOnPasswordChange(e) {
    if (e.target.value.length > 20) {
      this.setState({
        directionX: 0.9,
        directionY: 0.9,
      })
    } else {
      this.setState({
        directionX: 0.5,
        directionY: 0.5,
      })
    }
  }

  handleOnPasswordFocus(e) {
    this.setState({
      directionX: 0.5,
      directionY: 0.5,
      blinkfold: true,
    })
  }

  handleOnPasswordBlur(e) {
    this.setState({
      blinkfold: false,
    })
  }

  render() {
    const armTransformStyle = this.state.blinkfold ? 'unset' : 'translate(0, 150px)'

    return (
      <div className={styles.container}>

        <div className={styles.room}>

          <Bear
            directionX={this.state.directionX}
            directionY={this.state.directionY} />

          <img
            className={styles.arm}
            width={70.5}
            height={123}
            style={{ top: 95, left: 20, transform: armTransformStyle }}
            src={rightArm} />

          <img
            className={styles.arm}
            width={70.5}
            height={123}
            style={{ top: 95, right: 20, transform: armTransformStyle }}
            src={leftArm} />
        </div>

        <p>
          <input type="text"
            className={styles.field}
            onChange={this.handleOnChange.bind(this)}
            onFocus={this.handleOnFocus.bind(this)}
            onBlur={this.handleOnBlur.bind(this)} />
        </p>

        <p>
          <input type="password"
            className={styles.field}
            onChange={this.handleOnPasswordChange.bind(this)}
            onFocus={this.handleOnPasswordFocus.bind(this)}
            onBlur={this.handleOnPasswordBlur.bind(this)} />
        </p>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));