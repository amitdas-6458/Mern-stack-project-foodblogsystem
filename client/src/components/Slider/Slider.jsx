import React, { useEffect, useState } from 'react'
import './Slider.css'
import SliderContent from './SliderContent'
import imageSlider from './ImageSlider'
import Arrow from './Arrow'
import Dots from './Dots'
import {motion} from 'framer-motion'


const len = imageSlider.length-1;


const Slider = (props) => {
    const[activeIndex,setActiveIndex]=useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setActiveIndex(activeIndex === len ? 0 : activeIndex +1)
        },3000);
        return ()=> clearInterval(interval);
    },[activeIndex])
  return (
    <div className='slider-container '>
      <SliderContent activeIndex={activeIndex} imageSlider={imageSlider}/>
      <Arrow prevSlide={()=>setActiveIndex(activeIndex < 1 ? len : activeIndex -1)}
      nextSlide={()=>setActiveIndex(activeIndex === len ? 0 : activeIndex +1)}/>
      
      <Dots activeIndex={activeIndex} imageSlider={imageSlider}
      onclick = {(activeIndex)=>setActiveIndex(activeIndex)}/>
    </div>
  )
}

export default Slider
