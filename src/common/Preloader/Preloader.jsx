import React from 'react'
import preloader from './image/Preloader.png'

let style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
}

const Preloader = () => {
  return (
    <div style={style}>
        <img src={preloader} alt="preloader" style={{width: '5%', height: '5%'}}/>
    </div>
  )
}

export default Preloader