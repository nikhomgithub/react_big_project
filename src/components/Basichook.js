import React from 'react';

function TodoForm(props){
  const [text,setText]=React.useState('');
  const [title,setTitle]=React.useState('');

  const handleSubmit=e=>{
    e.preventDefault();
    if(!text)return;
    props.addTodo(text,title);
    setText('');
    setTitle('');
  }

  return (
    <form onSubmit={e=>handleSubmit(e)}>
      <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
      <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
      <input type="submit"></input>
    </form>
  )
}

export default function Basichook() {
  
  const [todos, setTodos] = React.useState([
    {
      title:'Title 1',
      text:'First',
      done:false
    },
    {
      title:'Title 2',
      text:'Second',
      done:false
    },
    { 
      title:'Title 3',
      text:'Third',
      done:true
    }
  ]);
  
  const addTodo=(text,title)=>{
    const newTodos=[...todos,{text,title}]
    setTodos(newTodos);
  }
  
  const delTodo=(index)=>{
    const newTodos=[...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  const handleChangeText=(index,event)=>{
    const newTodos=[...todos]
    newTodos[index].text=event.target.value
    setTodos(newTodos)
  }

  const handleChangeTitle=(index,event)=>{
    const newTodos=[...todos]
    newTodos[index].title=event.target.value
    setTodos(newTodos)
  }

  const checkState=(e)=>{
    console.log(todos)
  }
  
  //style={{textDecoration:todo.done?'line-through':''}}
  return (
    <React.Fragment>
      <button onClick={e=>checkState(e)}>Check</button>
      {todos.map((todo,index)=>(
        <div key={index}> 
          <input type="text" value={todo.text} onChange={e=>handleChangeText(index,e)}></input>
          <input type="text" value={todo.title} onChange={e=>handleChangeTitle(index,e)}></input>
          <button onClick={e=>delTodo(index)}>x</button>
        </div>
        
       ))}
       <TodoForm addTodo={addTodo}/>
    </React.Fragment>
     
  );
}