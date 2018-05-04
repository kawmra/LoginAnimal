import React from 'react'
import { render } from 'react-dom'
import Animal from './component/Animal'
import FacePart from './component/core/FacePart'
import Eye from './component/Eye'
import Ear from './component/Ear'
import Head from './component/Head'
import Muzzle from './component/Muzzle'
import Nose from './component/Nose'
import Mouth from './component/Mouth'
import rightArm from '../res/arm_right.png'
import leftArm from '../res/arm_left.png'
import body from '../res/body.png'

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
      console.log(`touch: [${touch.pageX}, ${touch.pageY}]`)
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
    console.log(e.target.value.length)
    this.setState({
      directionX: e.target.value.length / 50.0,
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
    console.log(e.target.value)
    if (e.target.value.length > 30) {
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
      <div style={{ backgroundColor: 'orange', padding: 32 }}>

        <div style={{ width: 150, height: 150, clipPath: 'circle()', padding: 32, backgroundColor: 'yellow', position: 'relative' }}>
          <Animal
            width={150}
            height={150}
            directionX={this.state.directionX}
            directionY={this.state.directionY}>

            <FacePart
              width={165}
              height={180}
              position={{ minX: 0.5, minY: 1.3, maxX: 0.5, maxY: 1.3 }}
              src={body} />

            <Ear
              width={44.5}
              height={44.5}
              type='right'
              src='res/ear.png' />

            <Ear
              width={44.5}
              height={44.5}
              type='left'
              src='res/ear.png' />

            <Head
              width={135}
              height={135}
              src='res/head.png' />

            <Eye
              width={11}
              height={11}
              type='right'
              src='res/eye.png' />

            <Eye
              width={11}
              height={11}
              type='left'
              src='res/eye.png' />

            <Muzzle
              width={76.5}
              height={60}
              src='res/nose_mouth_base.png' />

            <Nose
              width={13}
              height={10}
              src='res/nose.png' />

            <Mouth
              width={29}
              height={22.5}
              src='res/mouth.png' />
          </Animal>

          <img
            width={70.5}
            height={123}
            style={{ position: 'absolute', top: 95, left: 20, transition: '100ms', transform: armTransformStyle }}
            src={rightArm} />

          <img
            width={70.5}
            height={123}
            style={{ position: 'absolute', top: 95, right: 20, transition: '100ms', transform: armTransformStyle }}
            src={leftArm} />
        </div>

        <p>
          <input type="text"
            style={{ width: '100%', marginTop: 10 }}
            onChange={this.handleOnChange.bind(this)}
            onFocus={this.handleOnFocus.bind(this)}
            onBlur={this.handleOnBlur.bind(this)} />
        </p>

        <p>
          <input type="password"
            style={{ width: '100%', marginTop: 10 }}
            onChange={this.handleOnPasswordChange.bind(this)}
            onFocus={this.handleOnPasswordFocus.bind(this)}
            onBlur={this.handleOnPasswordBlur.bind(this)} />
        </p>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));