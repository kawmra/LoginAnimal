import React from 'react';
import { render } from 'react-dom';
import Face from './component/Face'
import Parts from './Parts'

class App extends React.Component {
  render() {
    const ear = new Parts('./res/ear.png', 90, 90)
    const head = new Parts('./res/head.png', 270, 270)
    const eye = new Parts('./res/eye.png', 22, 22)
    const noseMouthBase = new Parts('./res/nose_mouth_base.png', 153, 120)
    const nose = new Parts('./res/nose.png', 26, 20)
    const mouth = new Parts('./res/mouth.png', 58, 45)

    return (
      <div>
        <Face
        width="300"
        height="300"
        ear={ear}
        head={head}
        eye={eye}
        noseMouthBase={noseMouthBase}
        nose={nose}
        mouth={mouth} />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));