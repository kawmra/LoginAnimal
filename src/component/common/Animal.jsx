import React from 'react'
import FacePart from '../core/FacePart'

export default class Animal extends React.Component {

  render() {
    const attrs = {
      directionX: this.props.directionX,
      directionY: this.props.directionY,
    }
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, attrs)
    })
    const { width, height } = this.props
    return (
      <div style={{ position: 'relative', width, height }}>
        {children}
      </div>
    )
  }
}