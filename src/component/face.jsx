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
    this.leftEarPosition = new PartsPosition(0.16, 0.16, 0.14, 0.14)
    this.rightEarPosition = new PartsPosition(0.86, 0.16, 0.84, 0.14)
    this.headPosition = new PartsPosition(0.49, 0.49, 0.51, 0.51)
    this.leftEyePosition = new PartsPosition(0.2, 0.4, 0.4, 0.6)
    this.rightEyePosition = new PartsPosition(0.6, 0.4, 0.8, 0.6)
    this.noseMouthBasePosition = new PartsPosition(0.4, 0.6, 0.6, 0.8)
    this.nosePosition = new PartsPosition(0.375, 0.475, 0.625, 0.725)
    this.mouthPosition = new PartsPosition(0.375, 0.625, 0.625, 0.875)
  }

  /**
   * Return calculated position of the specified Parts.
   * 
   * @param {Number} ratioX
   * @param {Number} ratioY 
   * @param {Parts} parts 
   * @param {PartsPosition} partsPosition 
   */
  calcPosition(ratioX, ratioY, parts, partsPosition) {
    return {
      top: this.props.height * partsPosition.y(ratioY) - (parts.height / 2),
      left: this.props.width * partsPosition.x(ratioX) - (parts.width / 2)
    }
  }

  render() {
    console.log('render')
    const width = this.props.width
    const height = this.props.height
    const ratioX = this.props.ratioX
    const ratioY = this.props.ratioY
    const leftEarStyle = this.calcPosition(ratioX, ratioY, this.props.ear, this.leftEarPosition)
    const rightEarStyle = this.calcPosition(ratioX, ratioY, this.props.ear, this.rightEarPosition)
    const headStyle = this.calcPosition(ratioX, ratioY, this.props.head, this.headPosition)
    const leftEyeStyle = this.calcPosition(ratioX, ratioY, this.props.eye, this.leftEyePosition)
    const rightEyeStyle = this.calcPosition(ratioX, ratioY, this.props.eye, this.rightEyePosition)
    const noseMouthBaseStyle = this.calcPosition(ratioX, ratioY, this.props.noseMouthBase, this.noseMouthBasePosition)
    const noseStyle = this.calcPosition(ratioX, ratioY, this.props.nose, this.nosePosition)
    const mouthStyle = this.calcPosition(ratioX, ratioY, this.props.mouth, this.mouthPosition)
    return (
      <div className={`${styles.base}`} style={{ width: this.props.width, height: this.props.width }} {...this.props}>
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
