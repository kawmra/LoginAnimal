import React from 'react'

class FacePart extends React.Component {

  constructor(props) {
    super(props)
  }

  /**
   * 親コンポーネントの幅・高さと水平・垂直方向の比率から、表示すべき top, left の値を計算して返します。
   * 
   * 方向の比率は 0 から 1 で指定し、 [0, 0] が左上、 [0.5, 0.5] が中央、 [1, 1] が右下を表します。
   * 
   * @param { number } directionX Horizontal direction. 0 means most left, 1 means most right.
   * @param { number } directionY Vertical direction. 0 means most top, 1 means most bottom.
   */
  getPositionRatio(directionX, directionY) {
    const { width, height } = this.props
    const { minX, minY, maxX, maxY } = this.props.position
    const ratioX = minX + (maxX - minX) * directionX
    const ratioY = minY + 0.1 + (maxY - minY) * directionY
    console.log(`ratio: [${ratioX}, ${ratioY}]`)
    return {
      top: `${ratioY * 100}%`,
      left: `${ratioX * 100}%`,
    }
  }

  render() {
    const { width, height, src } = this.props
    const position = this.getPositionRatio(this.props.directionX, this.props.directionY)
    const style = {
      position: 'absolute',
      marginTop: - height / 2,
      marginLeft: - width / 2,
      top: position.top,
      left: position.left,
    }
    return (
      <img src={src} width={width} height={height} style={style} />
    )
  }
}

// parentWidth, parentHeight, direction[x, y]
// 親からこれらの情報を受け取りたい。親では全ての子 FacePart に対して同じ処理をしないといけないので
// そこをどううまくやるか考える必要がある。子から親のそれらの props を能動的に見に行ければ良いが、
// 外部の状態に依存することになるので許されてなさそう。 FacePart の props に渡して、それを利用するしか無いか？
// もしくは updatePosition のようなメソッドを作成して親コンポーネント (Animal) から refs を使用して実行するか？

export default FacePart