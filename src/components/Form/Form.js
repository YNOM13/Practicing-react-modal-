import React, {useState} from 'react';

const Form = ({onAdd}) => {
  const [title, setTitle] = useState('')
  function onSubmit(e) {
    e.preventDefault()
    if(title.trim()){
      setTitle('')
      onAdd(title)
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <h2>write your todos</h2>
      <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
    </form>
  );
};

export default Form;