import React from 'react';
import { ProjectList } from '../../Helpers/projectlist';
import ProjectItem from '../../components/projectitem/ProjectItem';
import { motion } from 'framer-motion'
import  './Project.css';


function Project() {
  return (
    <motion.div className='project'
      initial = {{opacity: 0}}
      animate = {{opacity: 1}}
      exit = {{opacity: 0}}
      transition = {{duration: 0.5}}>
      <h1 className='projectTitle'> projects </h1>
      <div className='projectList'>
      { ProjectList.map((project, key) => {
        return <ProjectItem key={key} 
        image={project.image} 
        name={project.name} info={project.info} 
        language={project.language.split(' ').map((para,index) => {return <span aria-hidden="true" key={index} className='language'>{para} </span>; })} 
        link={project.link} />
      })}
      </div>
    </motion.div>
  );
}

export default Project