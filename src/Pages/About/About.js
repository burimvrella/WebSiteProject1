import React from 'react'
import './About.css'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div 
    initial = {{opacity: 0}}
    animate = {{opacity: 1}}
    exit = {{opacity: 0}}
    transition = {{duration: 0.5}}
    className='about'>
      <div className='container'> 
      <h1>about me</h1>
      <h2>
      hi there! i'm a web and python developer with a passion for creating solutions that make a real impact. i have a bsc degree in informatik and several years of experience in the field, and i'm always looking for new challenges and opportunities to learn and grow.<br /> <br />

      my expertise covers a wide range of technologies and tools, including html, css, javascript, python, react, and more. i have a deep understanding of web development best practices, and i'm always up-to-date with the latest advancements in the industry.<br /> <br />

      i believe in delivering high-quality work and providing an exceptional level of customer satisfaction. whether i'm working on a simple website or a complex web application, i'm dedicated to ensuring that my clients receive a solution that exceeds their expectations.<br /> <br />

      if you're looking for a skilled and experienced web and python developer, i would love to hear from you. let's work together to bring your vision to life!
      </h2>
      </div>
  </motion.div>
  )
}

export default About