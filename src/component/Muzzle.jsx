import React from 'react'
import FacePart from './core/FacePart'

export default class Muzzle extends React.Component {

  render() {
    const position = { minX: 0.4, minY: 0.5, maxX: 0.6, maxY: 0.8 }
    return (
      <FacePart
        position={position}
        {...this.props} />
    )
  }
}