import React from 'react'
import Introchild from '../Introchild/Introchild'

const Intro = () => {
    const content1=[{
        'Title': 'NANOTECH',
        'description':'ushufyuvvfuywfyuyufqfvuqfufyqshufyuvvfuywfyuyufqfvuqfufyqshufyuvvfuywfyuyufqfvuqfufyqshufyuvvfuywfyuyufmdlmwefimifmifirfjiejguerjfujqegugueqrugqerugheurghuqeghurqehguqhguierqhguqehguqehguqehrguierhguierhgueqrhgurqhguqrehgurehguqehguqerhguqrhguqerhgueqrhguerhguqerhgueqrhguqerguqerhguqerhgiuqer'
    },
    {
      'Title': 'NANOTECH',
      'description':'ushufyuvvfuywfyuyufqfvuqfufyqshufyuvvfuywfyuyufqfvuqfufyqshufyuvvfuywfyuyufqfvuqfufyqshufyuvvfuywfyuyufmdlmwefimifmifirfjiejguerjfujqegugueqrugqerugheurghuqeghurqehguqhguierqhguqehguqehguqehrguierhguierhgueqrhgurqhguqrehgurehguqehguqerhguqrhguqerhgueqrhguerhguqerhgueqrhguqerguqerhguqerhgiuqer'
  },{
    'Title': 'NANOTECH',
    'description':'ushufyuvvfuywfyuyufqfvuqfufyqshufyuvvfuywfyuyufqfvuqfufyqshufyuvvfuywfyuyufqfvuqfufyqshufyuvvfuywfyuyufmdlmwefimifmifirfjiejguerjfujqegugueqrugqerugheurghuqeghurqehguqhguierqhguqehguqehguqehrguierhguierhgueqrhgurqhguqrehgurehguqehguqerhguqrhguqerhgueqrhguerhguqerhgueqrhguqerguqerhguqerhgiuqer'
},{
  'Title': 'NANOTECH',
  'description':'ushufyuvvfuywfyuyufqfvuqfufyqshufyuvvfuywfyuyufqfvuqfufyqshufyuvvfuywfyuyufqfvuqfufyqshufyuvvfuywfyuyufmdlmwefimifmifirfjiejguerjfujqegugueqrugqerugheurghuqeghurqehguqhguierqhguqehguqehguqehrguierhguierhgueqrhgurqhguqrehgurehguqehguqerhguqrhguqerhgueqrhguerhguqerhgueqrhguqerguqerhguqerhgiuqer'
},{
  'Title': 'NANOTECH',
  'description':'ushufyuvvfuywfyuyufqfvuqfufyqshufyuvvfuywfyuyufqfvuqfufyqshufyuvvfuywfyuyufqfvuqfufyqshufyuvvfuywfyuyufmdlmwefimifmifirfjiejguerjfujqegugueqrugqerugheurghuqeghurqehguqhguierqhguqehguqehguqehrguierhguierhgueqrhgurqhguqrehgurehguqehguqerhguqrhguqerhgueqrhguerhguqerhgueqrhguqerguqerhguqerhgiuqer'
},{
  'Title': 'NANOTECH',
  'description':'ushufyuvvfuywfyuyufqfvuqfufyqshufyuvvfuywfyuyufqfvuqfufyqshufyuvvfuywfyuyufqfvuqfufyqshufyuvvfuywfyuyufmdlmwefimifmifirfjiejguerjfujqegugueqrugqerugheurghuqeghurqehguqhguierqhguqehguqehguqehrguierhguierhgueqrhgurqhguqrehgurehguqehguqerhguqrhguqerhgueqrhguerhguqerhgueqrhguqerguqerhguqerhgiuqer'
}  ]
  return ( <div>
    <div className='m-4'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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