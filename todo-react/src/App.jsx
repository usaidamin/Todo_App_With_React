import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNavbar from './components/MyNavbar';
import MyButton from './components/MyButton';

function App() {
  
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodoValue, setEditTodoValue] = useState("");

  const addTodo = () => {

    if(!todoValue){
      return
    }
    const todoObj = {
      value: todoValue,
      isEdit: false,
    };
    todos.push(todoObj);
    setTodos([...todos]);
    setTodoValue("");
  };

  const deleteAllTodo = () => {
    setTodos([]);
  };

  const editTodo = (index) => {
    todos.forEach((todo) => {
      todo.isEdit = false;
    });

    todos[index].isEdit = true;
    setTodos([...todos]);
    setEditTodoValue(todos[index].value);
  };

  const deleteTodo = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const saveTodoValue = (index) => {
    todos[index].value = editTodoValue;
    todos[index].isEdit = false;
    setTodos([...todos]);
  };


  return (
    <>
    <MyNavbar />

    <div className='myContainer mt-5 flex-wrap'>
      <div className='myInput mb-3'>
      <input type="text" placeholder='Enter Todo Value' className='input' value={todoValue}
      onChange={(e) => {
              setTodoValue(e.target.value);
            }}/>
    </div>
    <div className='mb-3'>
      <MyButton primary = "primary" title="ADD TODO" clickTrigger={addTodo} />
      <MyButton primary = "danger" title="DELETE ALL" clickTrigger={deleteAllTodo} />
    </div>
    </div>

    <div className="mx-auto mt-5 list">
        <ul>
          {todos &&
            todos?.map((todo, index) => {
              console.log("todo", todo);
              return todo.isEdit ? (
                <div className="saveInput mx-auto mt-2" key={index}>
                  <input
                    type="text"
                    className="editValue"
                    onChange={(e) => setEditTodoValue(e.target.value)}
                    value={editTodoValue}
                  />
                  <MyButton
                    title="Save"
                    clickTrigger={() => saveTodoValue(index)}
                    placeholder="Enter Edit Value"
                  />
                </div>
              ) : (
                <li
                  key={index}
                  className="listing mt-2"
                >
                  <div>
                  {todo.value}
                  </div>
                  <div>
                    <MyButton title="EDIT" clickTrigger={() => editTodo(index)} />
                    <MyButton
                      title="Delete"
                      clickTrigger={() => deleteTodo(index)}
                      primary="danger"
                    />
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  )
}

export default App
