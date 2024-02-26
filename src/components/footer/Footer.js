import React from 'react'
import Instagram from '@mui/icons-material/Instagram'
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
       <Instagram /> <GitHub /> <LinkedIn />
      </div>
      <p> &copy; 2023 Burim Vrella</p>
    </div>
  )
}

export default Footer