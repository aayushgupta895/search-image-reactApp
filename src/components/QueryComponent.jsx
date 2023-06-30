import React, {useContext} from 'react'
import '../styles/style.css'
import { useState } from 'react';
import { MyContext } from '../hooks/ContextProvider';
function QueryComponent(props) {
  const { setQuery } = useContext(MyContext)
  const [str, setStr] = useState('')
  function onInputChange(value){
    setStr(value.trim().replaceAll(/\s+/g, '+')); 
  }

  const runComponent = (event)=>{
    event.preventDefault();
    console.log('hi' )
    console.log(str)
    setQuery(str)
  }
  return (
    <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"></link>
        <form className="form-inline"
            onSubmit={runComponent}
        >
            <input 
              className="form-control mr-sm-2 w-50 " 
              type="search" 
              placeholder="Search" 
              aria-label="Search"
              onChange={e=>onInputChange(e.target.value)}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
  )
}

export default QueryComponent
