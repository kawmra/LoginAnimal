import React from 'react'
import styles from '../css/animal.css'
import Parts from '../Parts'

class PartsPosition {

  constructor(minX, minY, maxX, maxY) {
    this.min = [minX, minY]
    this.max = [maxX, maxY]
  }

  x(ratio) {
    return this.min[0] + (this.max[0] - this.min[0]) * ratio
  }

  y(ratio) {
    return this.min[1] + (this.max[1] - this.min[1]) * ratio
  }
}

export default class Face extends React.Component {

  constructor(props) {
    super(props)
    this.leftEarPosition = new PartsPosition(0.15, 0.15, 0.15, 0.15)
    this.rightEarPosition = new PartsPosition(0.85, 0.15, 0.85, 0.15)
    this.headPosition = new PartsPosition(0.5, 0.5, 0.5, 0.5)
    this.leftEyePosition = new PartsPosition(0.3, 0.5, 0.3, 0.5)
    this.rightEyePosition = new PartsPosition(0.7, 0.5, 0.7, 0.5)
    this.noseMouthBasePosition = new PartsPosition(0.5, 0.7, 0.5, 0.7)
    this.nosePosition = new PartsPosition(0.5, 0.6, 0.5, 0.6)
    this.mouthPosition = new PartsPosition(0.5, 0.75, 0.5, 0.75)
  }

  /**
   * Return calculated position of the specified Parts.
   * 
   * @param {Number} width 
   * @param {Number} height 
   * @param {Number} ratio 
   * @param {Parts} parts 
   * @param {PartsPosition} partsPosition 
   */
  calcPosition(ratio, parts, partsPosition) {
    return {
      top: this.props.height * partsPosition.y(0.5) - (parts.height / 2),
      left: this.props.width * partsPosition.x(0.5) - (parts.width / 2)
    }
  }

  render() {
    console.log('render')
    const width = this.props.width
    const height = this.props.height
    const leftEarStyle = this.calcPosition(0.5, this.props.ear, this.leftEarPosition)
    const rightEarStyle = this.calcPosition(0.5, this.props.ear, this.rightEarPosition)
    const headStyle = this.calcPosition(0.5, this.props.head, this.headPosition)
    const leftEyeStyle = this.calcPosition(0.5, this.props.eye, this.leftEyePosition)
    const rightEyeStyle = this.calcPosition(0.5, this.props.eye, this.rightEyePosition)
    const noseMouthBaseStyle = this.calcPosition(0.5, this.props.noseMouthBase, this.noseMouthBasePosition)
    const noseStyle = this.calcPosition(0.5, this.props.nose, this.nosePosition)
    const mouthStyle = this.calcPosition(0.5, this.props.mouth, this.mouthPosition)
    return (
      <div className={`${styles.base}`} style={{ width: this.props.width, height: this.props.width }}>
        <img style={leftEarStyle} {...this.props.ear} />
        <img style={rightEarStyle} {...this.props.ear} />
        <img style={headStyle} {...this.props.head} />
        <img style={leftEyeStyle} {...this.props.eye} />
        <img style={rightEyeStyle} {...this.props.eye} />
        <img style={noseMouthBaseStyle} {...this.props.noseMouthBase} />
        <img style={noseStyle} {...this.props.nose} />
        <img style={mouthStyle} {...this.props.mouth} />
      </div>
    )
  }
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', (event) => {
      resolve(event.target)
    })
    image.src = src
  })
}

function createImage(src) {
  const img = new Image()
  img.src = src
  return img
}

function srcOrEmpty(image) {
  if (image === undefined || image === null) {
    return ""
  }
  return image.src
}
