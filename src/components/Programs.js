import React from 'react'
import {FaCrown} from 'react-icons/fa'
import Card from './Card';
import {programs} from './data';
import {Link} from 'react-router-dom';
import {RiArrowRightSFill} from 'react-icons/ri';

function Programs() {

  const programTypes = programs.map((program) => {
    return(
      <Card className='programs__wrapper-card' key={program.id}>
        <span className='programs__wrapper-card--icon'>{program.icon}</span>
        <h4 className='programs__wrapper-card--title'>{program.title}</h4>
        <p className='programs__wrapper-card--text'>{program.info}</p>
        <Link to={program.path} className='programs__wrapper-card--link'>Learn More <RiArrowRightSFill /></Link>
      </Card>
    )
  })

  return (
    <div className='programs'>
      <div className='programs__head'>
        <span className='programs__head-icon'><FaCrown /></span>
        <h2 className='programs__head-title'>Our Programs</h2>
      </div>
      <div className='programs__wrapper'>
        {programTypes}
      </div>
    </div>
  )
}

export default Programs