import Todo from "../Todo/Todo";

const Todos = ({inputInfo, onDelete}) => {
  return (
    <div style={{display:'flex', alignItems:'center',background:'lightblue', flexDirection:'column'}}>
      {inputInfo.map(i=><Todo key={i.id} onDelete={onDelete} elements={i} />)}
    </div>
  );
};

export default Todos;