import React from 'react';
import { render } from 'react-dom';
import Animal from './component/Animal'
import Parts from './Parts'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ratioX: 0.5,
      ratioY: 0.5,
    }
  }

  componentWillMount() {
    window.addEventListener('mousemove', (event) => {
      const ratioX = event.pageX / window.innerWidth
      const ratioY = event.pageY / window.innerHeight
      this.updateRatios(ratioX, ratioY)
    })
    window.addEventListener('touchmove', (event) => {
      const touch = event.touches[0]
      const ratioX = touch.pageX / window.innerWidth
      const ratioY = touch.pageY / window.innerHeight
      console.log(`touch: [${touch.pageX}, ${touch.pageY}]`)
      this.updateRatios(ratioX, ratioY)
    })
  }

  updateRatios(x, y) {
    this.setState({
      ratioX: x,
      ratioY: y,
    })
  }

  handleOnChange(e) {
    console.log(e.target.value.length)
    this.setState({
      ratioX: e.target.value.length / 50.0,
      ratioY: 0.8
    })
  }

  handleOnFocus(e) {
    this.handleOnChange(e)
  }

  handleOnBlur(e) {
    this.setState({
      ratioX: 0.5,
      ratioY: 0.5,
    })
  }

  render() {
    const ear = new Parts('./res/ear.png', 90, 90)
    const head = new Parts('./res/head.png', 270, 270)
    const eye = new Parts('./res/eye.png', 22, 22)
    const noseMouthBase = new Parts('./res/nose_mouth_base.png', 153, 120)
    const nose = new Parts('./res/nose.png', 26, 20)
    const mouth = new Parts('./res/mouth.png', 58, 45)

    return (
      <div>
        <Animal
          width="300"
          height="300"
          ear={ear}
          head={head}
          eye={eye}
          noseMouthBase={noseMouthBase}
          nose={nose}
          mouth={mouth}
          ratioX={this.state.ratioX}
          ratioY={this.state.ratioY} />

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