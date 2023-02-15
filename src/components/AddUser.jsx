import React, { useRef, useState } from 'react'
import ErrorModal from './modals/ErrorModal';

function AddUser(props) {

    const nameInputValue =useRef();
    const ageInputValue = useRef();
    const[error, setError] = useState();

    console.log(error)

    

    const onSubmitHandler = (event)=>{
        event.preventDefault();
        const enteredName =nameInputValue.current.value;
        const enteredAge =ageInputValue.current.value;
        if(enteredName.trim().length===0 || enteredAge.trim().length===0){
            setError(
                {
                    title:'Invalid Input',
                    message:'Input username and age must not be be ampty'
                }
            )
            return;
        }
        if(enteredAge<0){
            setError(
                {
                    title:'Age error',
                    message: 'Age input must not be be leser than 1'
                })
            return;
        }
        props.onSaveUser(enteredName, enteredAge);

        nameInputValue.current.value='';
        ageInputValue.current.value='';
    }
                    
    const onCancelHandler=()=>{
        setError(null)
    }        
                                                             
  return (
    <div>
        {error &&  <ErrorModal title={error.title} message={error.message} onConfirm={onCancelHandler} /> } 
        <form onSubmit={onSubmitHandler}>
          <div><label>input</label></div>
          <input ref={nameInputValue} type="text" />
          <div>
              <div><label>Age</label></div>
              <input ref={ageInputValue} type="number" />
          </div>
          <button>send</button>
        </form>
    </div>
  )
}

export default AddUser
