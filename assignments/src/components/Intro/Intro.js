import React from 'react'
import Introchild from '../Introchild/Introchild'

const Intro = () => {
    const content1=[{
      'id':'1',
        'Title': 'The Nanomorphic Cell',
        'description':'Atomic-level limits of computing',
        'img':'https://fujiaddict.com/wp-content/uploads/2022/05/Nanomorph01-Full-Set.jpeg',
    },
    { 'id':'2',
      'Title': 'Bio-Nano Sensors',
      'description':'Nanoelectronics in Biosensing Applications',
      'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5AG5ly6P0iFRVdBbxsNhVLvjBAGFn4X3mFA&usqp=CAU',
    },{
      'id':'3',
    'Title': 'NANOPOLYMERS',
    'description':'NANOELECTRONIC POLYMERS',
    'img':'https://www.pharmaexcipients.com/wp-content/uploads/2021/07/Polymer-Nanomaterials.jpg',
},{
  'id':'4',
  'Title': 'ELECTROACTIVE NANOSTRUCTURED POLYMERS',
  'description':'',
  'img':'https://pubs.acs.org/cms/10.1021/acs.chemmater.5b04879/asset/images/large/cm-2015-04879m_0001.jpeg',
},{ 'id':'5',
  'Title': 'Flexible smart nanosensors',
  'img':'https://cdn11.bigcommerce.com/s-wepv6/images/stencil/1280w/uploaded_images/ip-2.jpg?t=1659446154',
  'description':'',
},{ 'id':'6',
  'Title': 'Surface and interface effects',
  'description':'Properties of Nanostructured ZnO',
  'img':'https://pub.mdpi-res.com/nanomaterials/nanomaterials-08-00268/article_deploy/html/images/nanomaterials-08-00268-ag-550.jpg?1570044885'
}  ]
  return ( <div>
    <div className='m-4'>
        <p>Nanotechnology has created wonders in electronics by reducing the size of transistors used in ICs. A memory chip with a projected density of 1 terabyte of memory per square inch is now under development. This increases the density of memory chips. Display screens on electronics devices are improved, reducing power consumption and weight and thickness of the screens. It has helped nanoelectronics to cross traditional scaling limits in standard CMOS technology. These nanoelectronic components are called ‘Beyond CMOS’ domain of development.</p>
    </div>
    <div>
      <h1 className='text-center text-3xl font-semibold underline'>Following are some of the trends in Nanoelectronics</h1>
    </div>
    <div className='m-10'>
<div className='grid grid-cols-3 grid-rows-auto'>
       { content1.map((content,index)=>(
          <Introchild data={content} key={index}/>
        ))}
    </div>
</div>
  </div>

  )
}

export default Intro