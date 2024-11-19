import React from 'react'

const Home = () => {
  return (
    <div className='Home w-screen h-screen grid grid-cols-2 justify-center items-center p-4' >
        <img className="hero-image w-[400px]" src="https://images.unsplash.com/photo-1487260211189-670c54da558d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHwxfHxtaW5pbWFsfGVufDB8fHx8MTcyNjczMzQzN3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="image" />
        <div className="hero-title text-4xl">
            <h1 className='font-bold'>Min Bento</h1>
            <p>This is Bento</p>
        </div>
    </div>
  )
}

export default Home; 