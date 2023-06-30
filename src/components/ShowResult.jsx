import React from 'react'
import '../styles/style.css'
import {Link} from 'react-router-dom'
function ShowResult(props) {
  const showlargePhoto = (ind) =>{
    props.setInd(ind)
  }
  return (
    <div>
      {
        <div className="image-grid">
        {props.imgArr.map((image, index) => (
          <Link to='/large-image' >
            <img key={index} onClick={()=>showlargePhoto(index)}  src={image} alt={`Image ${index + 1}`} className="image" />
          </Link>
          ))}
      </div>
      }
    </div>
  )
}

export default ShowResult
