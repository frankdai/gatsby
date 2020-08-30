import React from 'react'
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const ImagesRotate = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
    this.goToNext = () => {
      let target = this.state.currentIndex + 1
      if (target < this.props.images.length) {
        this.setState({
          currentIndex: target
        })
      } else {
        this.setState({
          currentIndex: 0
        })
      }
    }
    this.goToPrev = () => {
      let target = this.state.currentIndex - 1
      if (this.state.currentIndex === 0) {
        this.setState({
          currentIndex: this.props.images.length - 1
        })
      } else {
        this.setState({
          currentIndex: target
        })
      }
    }
  }
  render() {
    let currentImage = this.props.images[this.state.currentIndex]
    return (
      <div className="image-rotate">
        <button className="button" onClick={this.goToPrev.bind(this)}>{'<-Prev'}</button>
        <div className="image-center">
          <PreviewCompatibleImage
            imageInfo={{
              style: {maxWidth: '400px'},
              image: currentImage,
              alt: `image`,
            }}
          />
        </div>
        <button className="button" onClick={this.goToNext.bind(this)}>{'Next->'}</button>
      </div>
    )
  }
}

export default ImagesRotate
