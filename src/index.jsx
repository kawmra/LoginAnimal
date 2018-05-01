import React from 'react';
import { render } from 'react-dom';
import Face from './component/Animal'
import Parts from './Parts'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ratioX: 0.5,
      ratioY: 0.5,
    }
  }

  handleOnChange(e) {
    console.log(e.target.value.length)
    this.setState({
      ratioX: e.target.value.length / 50.0,
      ratioY: 0.9
    })
  }

  handleOnFocus(e) {
    this.setState({
      ratioY: 0.9
    })
  }

  handleOnBlur(e) {
    this.setState({
      ratioY: 0.5
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
      <div onMouseMove={(event) => {
        // const ratioX = event.clientX / 300.0
        const ratioY = event.clientY / 300.0
        this.setState({
          // ratioX: ratioX,
          ratioY: ratioY,
        })
      }}>
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