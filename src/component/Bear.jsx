import React from 'react'
import Animal from './common/Animal'
import FacePart from './core/FacePart'
import Eye from './common/Eye'
import Ear from './common/Ear'
import Head from './common/Head'
import Muzzle from './common/Muzzle'
import Nose from './common/Nose'
import Mouth from './common/Mouth'
import earImage from '../../res/ear.png'
import headImage from '../../res/head.png'
import eyeImage from '../../res/eye.png'
import muzzleImage from '../../res/muzzle.png'
import noseImage from '../../res/nose.png'
import mouthImage from '../../res/mouth.png'
import bodyImage from '../../res/body.png'

export default class Bear extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { directionX, directionY } = this.props
    return (
      <Animal
        width={150}
        height={150}
        directionX={directionX}
        directionY={directionY}>

        <FacePart
          width={165}
          height={180}
          position={{ minX: 0.5, minY: 1.3, maxX: 0.5, maxY: 1.3 }}
          src={bodyImage} />

        <Ear
          width={44.5}
          height={44.5}
          type='right'
          src={earImage} />

        <Ear
          width={44.5}
          height={44.5}
          type='left'
          src={earImage} />

        <Head
          width={135}
          height={135}
          src={headImage} />

        <Eye
          width={11}
          height={11}
          type='right'
          src={eyeImage} />

        <Eye
          width={11}
          height={11}
          type='left'
          src={eyeImage} />

        <Muzzle
          width={76.5}
          height={60}
          src={muzzleImage} />

        <Nose
          width={13}
          height={10}
          src={noseImage} />

        <Mouth
          width={29}
          height={22.5}
          src={mouthImage} />
      </Animal>
    )
  }
}