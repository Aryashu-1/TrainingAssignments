import React from 'react'

const Searchbar = () => {
  return (
    <div className=' bg-gray-800 bg-[url("https://img.freepik.com/premium-photo/nanotechnology-microchip-chip-board-processor-futuristic-computing-technology-nano-electronics_896648-1327.jpg")] w-auto m-2 text-center'>
    <div >
        <input placeholder='Enter topic to Search...' type='text' className='bg-white bottom-6 mx-80 my-10 p-4 rounded-full text-red w-80'></input>

    </div >

    <div className='text-white p-20  text-center'>
        <p className='font-bold text-2xl'>NANOELECTRONICS </p>
        <p className='font-medium'>Nanoelectronics is a wing of nanotechnology that deals with the integration of purely electronic devices, electronic chips and circuits at miniaturised scale. Analogue/ RF circuits combine to make the digital systems. Domain of development has now reached ‘More than Moore’. A memory chip or a package of nanoelectronic components measured on the nanoscale dimensions for systems has the giga-scale complexity</p>
    </div>
    </div>
  )
}

export default Searchbar