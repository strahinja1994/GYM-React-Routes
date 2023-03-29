import React from 'react';
import HeaderPages from '../../components/HeaderPages';
import Card from '../../components/Card';
import {trainers} from '../../components/data';

function Trainers() {

  const allTrainers = trainers.map((trainer) => {
    return(
      <Card className='trainers__trainer' key={trainer.id}>
        <img className='trainers__trainer-image' src={trainer.image} alt='trainer' />
        <h2 className='trainers__trainer-name'>{trainer.name}</h2>
        <h3 className='trainers__trainer-job'>{trainer.job}</h3>
        <div className='trainers__trainer-socials'>
          <a className='trainers__trainer-socials--link' href={trainer.socials.map((social,index) => {return(<span key={index}>{social}</span>)})} target='_blank' > {trainer.icons.map((icon,index) => {return(<span className='trainers__trainer-socials--icon' key={index}>{icon}</span>)})}</a>
        </div>
      </Card>
    )
  })

  return (
    <div className='trainers'>
      <HeaderPages
        title='Our Trainers'
        image='../../images/header_bg_5.jpg'
        text='Facilis, iusto numquam unde laboriosam expedita qui exercitationem? Dicta vero accusantium est aut molestiae fugit doloremque suspicit quod.'
      />
      <div className='trainers__container'>
        {allTrainers}
      </div>
    </div>
  )
}

export default Trainers
