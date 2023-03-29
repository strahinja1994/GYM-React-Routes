import React from 'react'
import HeaderPages from '../../components/HeaderPages';

function About() {
  return (
    <div className='about'>
      <HeaderPages 
        title='About us'
        image='../../images/header_bg_1.jpg'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloribus, corporis sapiente eaque nobis animi enim quas laboriosam ut adipisci!'
      />
      <div className='about__story'>
        <div className='about__story-background'>
        </div>
        <div className='about__story-info'>
          <h2 className='about__story-info--title'>Our Story</h2>
          <p className='about__story-info--text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quia rerum repellendus sit, iure nesciunt debitis. Ducimus ex, sequi repellendus magnam id illum aspernatur obcaecati, nemo ullam magni amet, eveniet saepe hic eos totam inventore sit libero beatae dolore nobis ratione porro tempora? Debitis nam recusandae laboriosam esse. Reiciendis, perspiciatis!</p>
          <p className='about__story-info--text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis animi at fugiat quasi magnam neque veniam deserunt numquam, et necessitatibus distinctio, illum sapiente sunt eveniet ducimus eos quae dicta!</p>
        </div>
      </div>
      <div className='about__story'>
      
        <div className='about__story-info'>
          <h2 className='about__story-info--title'>Our Vision</h2>
          <p className='about__story-info--text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quia rerum repellendus sit, iure nesciunt debitis. Ducimus ex, sequi repellendus magnam id illum aspernatur obcaecati, nemo ullam magni amet, eveniet saepe hic eos totam inventore sit libero beatae dolore nobis ratione porro tempora? Debitis nam recusandae laboriosam esse. Reiciendis, perspiciatis!</p>
          <p className='about__story-info--text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis animi at fugiat quasi magnam neque veniam deserunt numquam, et necessitatibus distinctio, illum sapiente sunt eveniet ducimus eos quae dicta!</p>
        </div>
        <div className='about__story-background about__story-background-2'>
        </div>
      </div>
      <div className='about__story'>
        <div className='about__story-background about__story-background-3'>
        </div>
        <div className='about__story-info'>
          <h2 className='about__story-info--title'>Our Mission</h2>
          <p className='about__story-info--text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quia rerum repellendus sit, iure nesciunt debitis. Ducimus ex, sequi repellendus magnam id illum aspernatur obcaecati, nemo ullam magni amet, eveniet saepe hic eos totam inventore sit libero beatae dolore nobis ratione porro tempora? Debitis nam recusandae laboriosam esse. Reiciendis, perspiciatis!</p>
          <p className='about__story-info--text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis animi at fugiat quasi magnam neque veniam deserunt numquam, et necessitatibus distinctio, illum sapiente sunt eveniet ducimus eos quae dicta!</p>
        </div>
      </div>
    </div>
  )
}

export default About
