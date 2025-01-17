import React from 'react'

const Gallery = () => {

  const Cards = [
    {
      id: 0,
      name: "Photo One",
      image: "https://goldfingersorologi.it/wp-content/uploads/2024/05/IMG_6867-copia.jpg"
    },
    {
      id: 1,
      name: "Photo Two",
      image: "https://goldfingersorologi.it/wp-content/uploads/2024/05/IMG_6867-copia.jpg"
    },
    {
      id: 2,
      name: "Photo Three",
      image: "https://goldfingersorologi.it/wp-content/uploads/2024/05/IMG_6867-copia.jpg"
    }
  ]

  return (
    <div className='Gallery min-h-screen grid justify-center items-center' id='Gallery'>
        <h1 className='font-extrabold text-4xl text-center'>Gallery</h1>
        <div className="gallery-container  p-4 border-black grid grid-cols-1 md:grid-cols-3 gap-4">
          {Cards.map((card) => (
            <div className="Card">
              <img src={card.image} alt={card.title} key={card.id}/>
              {card.name}
            </div>
          ))}
        </div>
    </div>
  )
}

export default Gallery; 