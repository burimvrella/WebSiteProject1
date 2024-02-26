import React from 'react'

function ProjectItem({image, name, info, language, link}) {
  return (
    <div className='projectItem'>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1>{name}</h1>
      <p className='info'>{info}</p>
      <p>{language}</p>
      <a className='gitlink' href={link}>github</a>
    </div>
  )
}

export default ProjectItem