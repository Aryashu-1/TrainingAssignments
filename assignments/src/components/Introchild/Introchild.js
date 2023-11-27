import React from 'react'

const Introchild = (props) => {
    return (
<div>
<div className="w-[300px] rounded overflow-hidden shadow-lg m-10">
         <div ><img className="w-full object-contain h-40 " src="https://m.media-amazon.com/images/I/514iPqlEyPL._AC_UF1000,1000_QL80_.jpg" alt="Your Image" /></div> 
          <div className="px-6 py-4 ">
            <div className="font-bold text-xl mb-2 ">{props.data.Title}</div>
            
            <p className="text-gray-700 truncate ">{props.data.description}</p>
            
            <a className='text-center underline decoration-black cursor-pointer'>Read More...</a>
          </div>
        </div>
</div>

      );
}

export default Introchild