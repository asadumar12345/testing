import React , {useState} from 'react';

export default function Example4() {
    const [inputFields, setInputFields] = useState([{ name: '', age: '' }]);
    function handleFormChange(index, event) {
        let data = [...inputFields]; 
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
     }
     function addFields(){
        let newfield = { name: '', age: '' }
        setInputFields([...inputFields, newfield])
    }
    function remove(index){
      let newInputFields = [...inputFields] ;
      newInputFields.splice(index,1) ;
      setInputFields(newInputFields);
    }
    function submit(e){
        e.preventDefault();
    }
    function submited(){
        return(JSON.stringify(inputFields));
    }
  return (
    <div className='my-3'>
      <h3>example 4 works</h3>
      <form onSubmit={submit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index} className='d-flex container gap-2 my-1'>
              <input
              className="form-control"
                name='name'
                placeholder='Name'
                value={input.name}
                onChange={event => handleFormChange(index, event)}
              />
              <input
                name='age'
                className="form-control"
                placeholder='Age'
                value={input.age}
                onChange={event => handleFormChange(index, event)}
              />
              <button className='btn btn-info' onClick={()=>remove(index)}>Remove</button>
            </div>
          )
        })}
        <div className='container'>
        <button className='btn btn-danger mx-3' onClick={submit}>Submit</button><button className='btn btn-primary' onClick={addFields}>Add</button>
        <p>{submited()}</p>
        </div>
      </form>
      
    </div>
  )
}
