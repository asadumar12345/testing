import React, { useState } from 'react'

export default function Example5() {
    let [active, setActive] = useState([false, false, false, false, false, false]);
    function toggle(index) {
        let data = [...active];
        data[index] = !data[index];
        setActive(data);
    }
   
    return (
        <div className='container d-flex gap-2 my-5' >
            {active.map((ele, index) => <div key={index} className={`p-4 ${ele ? 'bg-danger border text-light ' : 'bg-light border '} shadow rounded btn d-flex align-items-center`} onClick={() =>toggle(index) } style={{ cursor: 'pointer' }}>
                {ele ? 'Active' : 'InActive'}
            </div>)}

        </div>
    )
}
