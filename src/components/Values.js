import React from 'react'
import {GiCutDiamond} from 'react-icons/gi';
import {programs, values} from './data';
import Card from './Card';

function Values() {

  const valuesCards = values.map((value) => {
    return(
      <Card className='values__cards-card' key={value.id}>
        <span className='values__cards-card--icon'>{value.icon}</span>
        <h4 className='values__cards-card--title'>{value.title}</h4>
        <p className='values__cards-card--text'>{value.description}</p>
      </Card>
    )
  })

  return (
    <div className='values'>
      <div className='values__logo'>
        <img className='values__logo-img' src='../images/values.jpg' alt='Values Poster' />
      </div>
      <div className='values__about'>
        <div className='values__about-head'>
          <span className='values__about-head--icon'><GiCutDiamond /></span>
          <h2 className='values__about-head--title'>Our Values</h2>
        </div>
        <p className='values__about-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium deleniti, beatae molestiae magni eaque tempora.</p>
        <div className='values__cards'>
          {valuesCards}
        </div>
      </div>
    </div>
  )
}

export default Values
