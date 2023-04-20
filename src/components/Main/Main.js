import React, {useEffect, useState} from 'react';
import "./Main.css"
import Modal from "../UI/popup/Modal";
import Form from "../Form/Form";
import Todos from "../Todos/Todos";
import Loader from "../UI/loading/Loader";
const Main = () => {
  const [active, setActive] = useState(false)
  const [loading, setLoading] = useState(true)
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(json => {
        setTodos(json)
        setLoading(false)
      })
  },[])
  function onAdd(title) {
    setTodos(prevState => {
      return[...prevState,{
        title,
        id: Date.now(),
      }]
    })
  }
  function onDelete(itemDelete){
    setTodos(prevState => prevState.filter(i=>i.id!==itemDelete))
  }

  return (
    <div>
      <button className="open-btn" onClick={()=>setActive(true)}>Open</button>
      <p>I love u to do some things like darling friends</p>
      <p>I love u to do some things like darling friends</p>

      {loading && <Loader/> }

      {todos.length?<Todos onDelete={onDelete} inputInfo={todos}/>: loading ? null : <p>No todos</p> }

      <Modal active={active} setActive={setActive}>
        <Form onAdd={onAdd}/>
      </Modal>

    </div>
  );
};

export default Main;