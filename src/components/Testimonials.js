import React from 'react';
import {testimonials} from './data';
import {ImQuotesLeft} from 'react-icons/im';
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import Card from './Card';

function Testimonials() {

  const [index, setIndex] = React.useState(0);
  const {name, quote, job, avatar} = testimonials[index];
  
  const previousTestimonial = () => {
      setIndex(prev => prev - 1)

      if(index <= 0 ){
        setIndex(testimonials.length - 1);
      }
  }

  const nextTestimonial = () => {
    setIndex(prev => prev + 1);

    if(index >= testimonials.length - 1){
      setIndex(0);
    }
  }

  return (
    <div className='testimonials'>
      <div className='testimonials__header'>
        <span className='testimonials__header-icon'><ImQuotesLeft /></span>
        <h2 className='testimonials__header-title'>Testimonials</h2>
      </div>
      <div className='testimonials__quotes'>
        <Card className='testimonials__testimonial'>
          <img className='testimonials__testimonial-avatar' src={avatar} alt='avatar' />
          <p className='testimonials__testimonial-text'>{quote}</p>
          <h4 className='testimonials__testimonial-name'>{name}</h4>
          <h5 className='testimonials__testimonial-job'>{job}</h5>
        </Card>
      </div>
      <div className='testimonials__buttons'>
        <button className='testimonials__buttons-left' onClick={previousTestimonial}><IoIosArrowDropleftCircle /></button>
        <button className='testimonials__buttons-right'  onClick={nextTestimonial}><IoIosArrowDroprightCircle /></button>
      </div>
    </div>
  )
}

export default Testimonials
