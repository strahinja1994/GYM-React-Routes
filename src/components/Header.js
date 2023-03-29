import React from 'react'

function Header() {
  return (
      <div className='home__head'>
        <div className='home__head-about'>
          <h3 className='home__head-about--tag'>#100DaysOfWorkout</h3>
          <h1 className='home__head-about--title'>join the legends of the fitness world</h1>
          <p className='home__head-about--text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste exercitationem recusandae sunt? Nostrum dolorum veritatis cupiditate maxime consequuntur, accusantium similique consectetur cumque voluptates, ab et!</p>
          <button className='home__head-about--btn'>Get Started</button>
        </div>
        <div className='home__poster'>
          <div className='home__poster-circle'></div>
          <img src='../images/main_header.png' className='home__poster-img' alt='man in training' />
        </div>
      </div>
  )
}

export default Header
