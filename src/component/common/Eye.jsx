import React from 'react'
import FacePart from '../core/FacePart'

export default class Eye extends React.Component {

    render() {
        const { type } = this.props
        let position
        if (type === 'right') {
            position = { minX: 0.2, minY: 0.3, maxX: 0.4, maxY: 0.6 }
        } else if (type === 'left') {
            position = { minX: 0.6, minY: 0.3, maxX: 0.8, maxY: 0.6 }
        } else {
            throw new Error("The 'type' attribute is undefined.")
        }
        return (
            <FacePart
                position={position}
                {...this.props} />
        )
    }
}