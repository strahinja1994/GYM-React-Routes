import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__social'>
            <h3 className='footer__social-title'>GyM Name</h3>
            <p className='footer__social-text'>Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.</p>
            <div className='footer__social-icons'>
                <a className='footer__social-icons--link' href='https://www.facebook.com/' target='_blank' rel='noreferrer noopener'><FaFacebook /></a>
                <a className='footer__social-icons--link' href='https://www.linkedin.com/' target='_blank' rel='noreferrer noopener'><FaLinkedin /></a>
                <a className='footer__social-icons--link' href='https://www.twitter.com/' target='_blank' rel='noreferrer noopener'><AiOutlineTwitter /></a>
                <a className='footer__social-icons--link' href='https://www.instagram.com/' target='_blank' rel='noreferrer noopener'><AiFillInstagram /></a>
            </div>
        </div>
        <div className='footer__permalinks'>
          <h4 className='footer__permalinks-title'>Permalinks</h4>
          <Link className='footer__permalinks-permalink' to='/about'>About</Link>
          <Link className='footer__permalinks-permalink' to='/gallery'>Gallery</Link>
          <Link className='footer__permalinks-permalink' to='/plans'>Plans</Link>
          <Link className='footer__permalinks-permalink' to='/trainers'>Trainers</Link>
          <Link className='footer__permalinks-permalink' to='/contact'>Contact</Link>
        </div>
        <div className='footer__insights'>
          <h4 className='footer__insights-title'>Insights</h4>
          <a className='footer__insights-link' href='#'>Blog</a>
          <a className='footer__insights-link' href='#'>Case Studies</a>
          <a className='footer__insights-link' href='#'>Events</a>
          <a className='footer__insights-link' href='#'>Communities</a>
          <a className='footer__insights-link' href='faqs'>FAQs</a>
        </div>
        <div className='footer__contact'>
          <h4 className='footer__contact-title'>Get In Touch</h4>
          <Link className='footer__contact-link' to='/contact'>Contact Us</Link>
          <Link className='footer__contact-link' to='/'>Support</Link>
        </div>
    </footer>
  )
}

export default Footer
