import React from 'react'

const backdrop = ({show,click}) => {
  return (
    show &&
    <div className='backdrop' onClick={click}></div>
  )
}

export default backdrop