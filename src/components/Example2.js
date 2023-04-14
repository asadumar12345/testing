import React, {useState , useEffect} from 'react';

export default function Example2() {
  const [val , setVal] = useState('left');
  useEffect(()=>{
    // alert('use effect work');
  },[val])
  function valSet(value){
  setVal(value);
  }
  return (
    <div className='my-3'>
      <h3 className='text-center'>use Effect hook</h3>
      <div className="btn-group " role="group" aria-label="Basic outlined example">
          <button type="button " className="btn btn-outline-primary" onClick={()=>valSet('Left')}>Left</button>
          <button type="button" className="btn btn-outline-primary" onClick={()=>valSet('Middle')}>Middle</button>
          <button type="button" className="btn btn-outline-primary" onClick={()=>valSet('Right')}>Right</button>
    </div>
    <h3 className='text-center'>{val}</h3>
    </div>
  )
}
