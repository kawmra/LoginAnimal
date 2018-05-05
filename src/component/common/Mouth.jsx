import React from 'react'
import FacePart from '../core/FacePart'

export default class Mouth extends React.Component {

  render() {
    const position = { minX: 0.375, minY: 0.55, maxX: 0.625, maxY: 0.875 }
    return (
      <FacePart
        position={position}
        {...this.props} />
    )
  }
}