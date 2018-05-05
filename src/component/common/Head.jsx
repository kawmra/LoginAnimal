import React from 'react'
import FacePart from '../core/FacePart'

export default class Head extends React.Component {

  render() {
    const position = { minX: 0.49, minY: 0.48, maxX: 0.51, maxY: 0.51 }
    return (
      <FacePart
        position={position}
        {...this.props} />
    )
  }
}