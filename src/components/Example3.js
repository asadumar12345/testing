import { event } from 'jquery';
import React , { useRef , useState} from 'react';

export default function Example3() {
    const [name , setName] = useState('asad umar'); 
    const elementRef = useRef('');
    function handleClick(){
        setName('');
        elementRef.current.style.color = 'green';
        elementRef.current.focus();
    }
    
    return (
        <div className='mt-3'>
            <h3>use ref hook</h3>
            <div className="mb-3 container">
                <label  className="form-label">Example textarea</label>
                <input ref={elementRef} type="text" value={name} onChange = {(e)=>setName(setName(e.target.value))} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <button className='btn btn-secondary' onClick={handleClick}>Reset</button>
        </div>
    )
}
