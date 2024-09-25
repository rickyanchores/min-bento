import React from 'react'

const Gallery = () => {
  return (
    <div className='Gallery min-h-screen grid justify-center items-center'>
        <h1 className='font-extrabold text-4xl text-center'>Gallery</h1>
        <div className="gallery-container  p-4 border-black grid grid-cols-1 md:grid-cols-3 gap-4">
          <img className='bg-slate-900 p-4 text-white' src="" alt="image one" />
          <img className='bg-slate-900 p-4 text-white' src="" alt="image two" />
          <img className='bg-slate-900 p-4 text-white' src="" alt="image three" />
        </div>
    </div>
  )
}

export default Gallery; 