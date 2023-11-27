import React from 'react'

const Searchbar = () => {
  return (
    <div className=' bg-gray-800 bg-[url("https://img.freepik.com/premium-photo/nanotechnology-microchip-chip-board-processor-futuristic-computing-technology-nano-electronics_896648-1327.jpg")] w-auto m-2 text-center'>
    <div >
        <input placeholder='Enter topic to Search' type='text' className='bg-white bottom-6 mx-80 my-10 p-4 rounded-full text-red w-80'></input>

    </div >

    <div className='text-white p-20  text-center'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    </div>
  )
}

export default Searchbar