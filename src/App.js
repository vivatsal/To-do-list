import React, { useState } from "react";
import "./App.css";
import Task from "./Task";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleAdd = () => {
    if (text !== "") {
      const item = [...items, text];
      setItems(item);
      setText("");
    }
    else{
      alert('Must enter a task')
    }
  };
  const deleteTask = (id) =>{
    const oldItems = [...items]
    const newItems = oldItems.filter((element , i ) => {
      return(i !== id)
    })
    setItems(newItems);
  }
  
  return (
    <div className="container">
      <div className="App">
        <h1>Todo's List</h1>
        <div className="input-task">
          <input
            type="text"
            placeholder="Enter task"
            value={text}
            onChange={handleChange}
          />
          <button className="btn btn-warning" onClick={handleAdd}>Add Todo</button>
        </div>
        <div>
          {items.map((value, i) => {
            return <Task key={i} id = {i} value={value} sendData={deleteTask}/>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
