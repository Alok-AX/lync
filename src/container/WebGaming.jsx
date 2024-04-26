import React from 'react'
import WebGamingheading from '../components/WebGamingheading/WebGamingheading'
import Complexities from '../components/Complexities/Complexities'

const WebGaming = () => {
  return (
     <section className='webgaming_section'>
        <div className='container'>
            <WebGamingheading/>
            <Complexities/>
        </div>
     </section>
  )
}

export default WebGaming