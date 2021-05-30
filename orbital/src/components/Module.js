import React from 'react'

const Module = ({ module }) => {
  return (
    <div>
        <p>{module.moduleCode}</p>
        <p>{module.title}</p>
        <p>{module.description}</p>
    </div>
  )
}

export default Module