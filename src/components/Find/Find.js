import React, {useEffect, useRef, useState} from 'react';

const Find = () => {
  const ALL_USERS = useRef([])
  const [users, setUsers] = useState([])
  const [input, setInput] = useState('')

  useEffect(()=>{
    async function fetchUsers(){
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      ALL_USERS.current = await res.json()
      setUsers(ALL_USERS.current)
    }

    fetchUsers()

  },[])

  useEffect(()=>{
    setUsers(
      ALL_USERS.current.filter(i=>i.name.toLowerCase().includes(input.toLowerCase()))
    )
  },[input])

  return (
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <ul>
        {users.map(i=><li key={i.id}>{i.name}</li>)}
      </ul>
    </div>
  );
};

export default Find;