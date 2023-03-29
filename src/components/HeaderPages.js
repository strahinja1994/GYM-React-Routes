import React from 'react'

function HeaderPages({title,image,text}) {

  const backgroundStyle = {
    backgroundImage:`url(${image})`
  }

  return (
    <header className='pageheader'>
      <div className='pageheader__container'>
        <div className='pageheader__background' style={backgroundStyle}>
        </div>
        <div className='pageheader__content'>
          <h1 className='pageheader__content-title'>{title}</h1>
          <p className='pageheader__content-text'>{text}</p>
        </div>
      </div>
    </header>
  )
}

export default HeaderPages
