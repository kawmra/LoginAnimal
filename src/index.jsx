import React from 'react';
import { render } from 'react-dom';
import Animal from './component/Animal'
import FacePart from './component/core/FacePart'
import Eye from './component/Eye'
import Ear from './component/Ear'
import Head from './component/Head'
import Muzzle from './component/Muzzle'
import Nose from './component/Nose'
import Mouth from './component/Mouth'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      directionX: 0.5,
      directionY: 0.5,
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
    })
  }

  render() {

    return (
      <div style={{ backgroundColor: 'orange', padding: 32 }}>

        <Animal
          width={300}
          height={300}
          directionX={this.state.directionX}
          directionY={this.state.directionY}>

          <Ear
            width={89}
            height={89}
            type='right'
            src='res/ear.png' />

          <Ear
            width={89}
            height={89}
            type='left'
            src='res/ear.png' />

          <Head
            width={270}
            height={270}
            src='res/head.png' />

          <Eye
            width={22}
            height={22}
            type='right'
            src='res/eye.png' />

          <Eye
            width={22}
            height={22}
            type='left'
            src='res/eye.png' />

          <Muzzle
            width={153}
            height={120}
            src='res/nose_mouth_base.png' />

          <Nose
            width={26}
            height={20}
            src='res/nose.png' />

          <Mouth
            width={58}
            height={45}
            src='res/mouth.png' />
        </Animal>

        <input type="text"
          style={{ width: 300, marginTop: 10 }}
          onChange={this.handleOnChange.bind(this)}
          onFocus={this.handleOnFocus.bind(this)}
          onBlur={this.handleOnBlur.bind(this)} />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));