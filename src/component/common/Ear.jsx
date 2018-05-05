import React from 'react'
import FacePart from '../core/FacePart'

export default class Ear extends React.Component {

    render() {
        const { type } = this.props
        let position
        if (type === 'right') {
            position = { minX: 0.86, minY: 0.18, maxX: 0.84, maxY: 0.14 }
        } else if (type === 'left') {
            position = { minX: 0.16, minY: 0.18, maxX: 0.14, maxY: 0.14 }
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