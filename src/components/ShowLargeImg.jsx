import React from 'react'
import '../styles/style.css'
function ShowLargeImg(props) {
  return (
    <div className='large-img'>
      <img src={props.largeImgPath} alt={`Image`} className='img'/>
    </div>
  )
}

export default ShowLargeImg
