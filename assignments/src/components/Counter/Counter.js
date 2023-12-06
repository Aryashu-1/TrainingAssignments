import React from 'react'
import { useState } from 'react'
import Cparent from '../Cparent/Cparent'
const Counter = () => {
/*let counter;
  [counter, setCounter]=useState(0);
   function incrrement(){
    setCounter(counter+1);
   }
   function decrrement(){
    setCounter(counter-1);
   }
  */
  return (
    <div className='flex m-4'>
      <div className='w-full m-10'>
        <p>In giga systems, the number of components in a system may reach gigascale orders when systems are designed using nanoscale components thereby increasing number of challenges like complexity in scaling up to gigascale. Scaling of electrical properties likes power dissipation, supply voltage, speed, and leakage currents by nanotechnology has directed electronic power designs in new architecture. Development of new components for electronic system design with a fusion of nanotechnology is revolutionary. To block UV radiation many sun screens use nano-sized particles of titanium dioxide and zinc oxide effectively</p>
      </div>
      <Cparent/>

    </div>
  )
}

export default Counter