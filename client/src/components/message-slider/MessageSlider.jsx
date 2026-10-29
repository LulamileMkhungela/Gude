import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

import './MessageSlider.css'
import MessageSliderData from './MessageSliderData'

function MessageSlider({ MsgSlides }) {
    const [currentImage, setCurrentImage] = useState(0)
    const length = MsgSlides.length

    /**
     * Next image comes up when clicking the right arrow icon
     */
    const nextImageSlide = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
    }

    /**
     * Previous image comes up when clicking the left arrow icon
     */
    const prevImageSlide = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
    }

    /**
     * If theres no images return nothing
     */
    if (!Array.isArray(MsgSlides) || MsgSlides.length <= 0) {
        return null
    }

  return (
    <section className="message-image-slider">
        <FaArrowAltCircleLeft className="image-left-arrow" onClick={prevImageSlide} />
        <FaArrowAltCircleRight className="image-right-arrow" onClick={nextImageSlide}/>
        {MessageSliderData.map((slide, index) => {
            return (
                <div key={index} className={index === currentImage ? 'slide active' : 'slide'}>
                    {index === currentImage && (<img className="image-image" src={slide.image} alt="Image data" />)}
                </div>
            )
        })}
    </section>
  )
}

export default MessageSlider
