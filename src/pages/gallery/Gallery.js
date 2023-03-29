import React from 'react';
import HeaderPages from '../../components/HeaderPages';
import { gallery } from '../../components/data';

function Gallery() {

  const allImages = gallery.map((image,index) => {
    return(
      <img key={index} src={image.image} alt='gallery item' className='gallery__container-img' />
    )
  })

  return (
    <div className='gallery'>
      <HeaderPages
        title='Our Gallery'
        image='../../images/header_bg_3.jpg'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloribus, corporis sapiente eaque nobis animi enim quas laboriosam ut adipisci!'
      />
      <div className='gallery__container'>
        {allImages}
      </div>
    </div>
  )
}

export default Gallery
