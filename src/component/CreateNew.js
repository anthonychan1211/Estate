import React from 'react'
import CreateNewSite from './CreateNewSite'
import { useState, useEffect } from 'react'
import CreateNewPPM from './CreateNewPPM'

const CreateNew = () => {
  const [isChosen, setIsChosen] = useState('')
  function handleClick(e){
    e.currentTarget.classList.add('card-clicked') 
  }
  function handleRelease(e){
    e.currentTarget.classList.remove('card-clicked')
    e.currentTarget.classList.add('open');
    let tar = e.currentTarget.querySelector('p');
    setIsChosen(tar.innerText);
  }
  useEffect(() => {
    const close = (e) => {
      if(e.keyCode === 27){
        setIsChosen('')
      }
    }
    window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
},[])
  

  return (
    <div className='flex' >
      <div onMouseDown={handleClick} onMouseUp={handleRelease} className='card'>
        <img src="house.avif" alt="house"></img>
        <p>Create New Site</p>
      </div>
      <div  onMouseDown={handleClick} onMouseUp={handleRelease} className='card'>
        <img src="maintenance.jpg" alt="PPM"></img>
        <p>Create New PPM</p>
      </div>
      {isChosen=="Create New Site" && <CreateNewSite />}
      {isChosen=="Create New PPM" && <CreateNewPPM />}
      
    </div>
  )
}

export default CreateNew