import React from 'react'
import {motion} from 'framer-motion'
// import ImageSlider from './ImageSlider'
const SliderContent = ({activeIndex,imageSlider}) => {
  return (
    <section>
      {imageSlider.map((slide,index)=>
        <div key={index} className={index === activeIndex ? "slides active" : "inactive"}>
            <img className='slide-image' src={slide.urls} alt=""/>
            <motion.h2
              initial={{y:50,opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{duration:1}}

             className='slide-title'>{slide.title}</motion.h2>
            <motion.h3 initial={{y:50,opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{duration:1}} className='slide-text'>{slide.description}</motion.h3>
      
      </div>)}
    </section>
  )
}

export default SliderContent
