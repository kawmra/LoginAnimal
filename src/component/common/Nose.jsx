import React from 'react'
import FacePart from '../core/FacePart'

export default class Nose extends React.Component {

  render() {
    const position = { minX: 0.375, minY: 0.4, maxX: 0.625, maxY: 0.725 }
    return (
      <FacePart
        position={position}
        {...this.props} />
    )
  }
}