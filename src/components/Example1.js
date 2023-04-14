import React, { useState }  from 'react';

export default function Example1() {
  const [count , setCount] = useState(0);
  function decriment(){
     setCount(count-1);
   }
   function increment(){
    setCount(count+1);
  }
  return (
    <>
    <h3 className='text-center'>use state hook</h3>
    <div className='mt-3 d-flex justify-content-center'>
      
       <button className='btn btn-outline-primary mx-2' onClick={decriment}>-</button>
       <p>{count}</p>
       <button className='btn btn-outline-primary mx-2' onClick={increment}>+</button>
    </div></>
  )
}
