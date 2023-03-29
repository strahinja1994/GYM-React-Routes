import React from 'react';
import HeaderPages from '../../components/HeaderPages';
import {MdEmail} from 'react-icons/md';
import {BsMessenger, BsSkype} from 'react-icons/bs';


function Contact() {
  return (
    <div className='contact'>
      <HeaderPages
        title='Get In Touch'
        image='../../images/header_bg_2.jpg'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloribus, corporis sapiente eaque nobis animi enim quas laboriosam ut adipisci!'
      />
      <div className='contact__links'>
        <a className='contact__links-link' href='mailto:dametimens@gmail.com' target='_blank' rel='noreferrer noopener'><MdEmail /></a>
        <a className='contact__links-link' href='' target='_blank' rel='noreferrer noopener'><BsMessenger /></a>
        <a className='contact__links-link' href='' target='_blank' rel='noreferrer noopener'><BsSkype /></a>
      </div>
    </div>
  )
}

export default Contact
