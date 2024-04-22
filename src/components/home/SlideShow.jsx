import React from 'react'
// import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import { Fade, Zoom } from 'react-slideshow-image'
import front1 from "../../assets/jonasleeo6eltkwz5biunsplash-1-1@2x.png";
import front2 from "../../assets/jonasleeo6eltkwz5biunsplash-1-2@2x.png";
import front3 from "../../assets/jonasleeo6eltkwz5biunsplash-1-4@2x.png";
import front4 from "../../assets/jonasleeo6eltkwz5biunsplash-1-6@2x.png";
import "./slideshow.css"

const slideImages = [
    {
      url: front1,
    },
    {
      url: front2,
    },
    {
      url: front3,
    },
    {
      url: front4,
    },
  ];

const divSlide = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}

const SlideShow = () => {
  return (
    <div className='slide-container'>
        <Fade>
            {
                slideImages.map((image, index) => (
                    <div key={index}>
                        <div style={{...divSlide, backgroundImage:`url(${image.url})`}}>
                        </div>
                    </div>
                ))
            }
        </Fade>
    </div>
  )
}

export default SlideShow