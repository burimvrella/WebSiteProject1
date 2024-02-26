import React from 'react';
import {Link} from 'react-router-dom';
//import Background from './/assets/background.png';
import './Home.css'
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.div className='home'
      initial = {{opacity: 0}}
      animate = {{opacity: 1}}
      exit = {{opacity: 0}}
      transition = {{duration: 0.5}}
     /*style={{backgroundImage: `url(${Background})`}}*/>
      <div className='headerContainer'>
        <h1>hallo</h1>
        <h3>my name is</h3>
        <p>burim vrella</p>
        <h3>i am a</h3>
        <h2>web developer and python programmer</h2>
        <Link to='contact'>
          <button>for hire</button>
        </Link>
      </div>
    </motion.div>
  )
}

export default Home