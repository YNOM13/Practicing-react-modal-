import React from 'react';

const Todo = ({onDelete,elements:{title, id}}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-between', padding:'5px'}}>
      {title}
      <button onClick={()=>onDelete(id)}>&times;</button>
    </div>
  );
};

export default Todo;