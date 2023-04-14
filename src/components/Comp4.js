import React , {useContext} from 'react';
import {Name , Gender} from '../App';

export default function Comp4() {
    const name = useContext(Name);
    const gender = useContext(Gender);
  return (
    <div>
        <h3>use Context hook</h3>
      <h4 className='text-danger'>My name is {name} and my gender is {gender}</h4>
    </div>
  )
}
