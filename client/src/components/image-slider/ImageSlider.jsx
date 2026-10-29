import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

import './ImageSlider.css'
import SliderData from './SliderData'
import {useSelector} from "react-redux";

function ImageSlider({ slides }) {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const products = useSelector(state => state.productData.products)
    //console.log(products)

    const userId = useSelector(state => state.userLoggedInData.userInfo.id)
    const userProducts = products.filter(product => product.user_info._id === userId)

    console.log(userProducts)

    /**
     * Next image comes up when clicking the right arrow icon
     */
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    /**
     * Previous image comes up when clicking the left arrow icon
     */
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    /**
     * If theres no images return nothing
     */
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

  return (
    <section className="image-slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
        {SliderData.map((slide, index) => {
            return (
                <div key={index} className={index === current ? 'slide active' : 'slide'}>
                    {index === current && (<img className="image-image" src={slide.image} alt="Image data" />)}
                </div>
            )
        })}
    </section>
  )
}

export default ImageSlider
