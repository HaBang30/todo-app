// ===============================    CLASS COMPONENT   =======================================


// import './App.css';

// import React, {Component} from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue: "",
//       task: [],
//       editIndex: null,
      
//     }
//   }

//   changeInputValue=(e)=> {
//     this.setState({inputValue: e.target.value})
//   }

//   addTask=()=> {
//     const {task, inputValue, editIndex} = this.state;
//     if(!editIndex && editIndex === null)  {
//       const updatedTask = [...task, {text: inputValue, completed: false}]
//       this.setState({
//         task: updatedTask,
//         inputValue: "",
//       })
//     } else {
//       this.setState((prevState) => {
//         const updatedTask = [...prevState.task];
//         updatedTask[editIndex].text = inputValue ;
//         return { task, editIndex: null, inputValue: "" };
//       });
//     }
    
//   }

//   changeCheckbox=(index)=> {
//     const {task} = this.state;
//     const updatedTask = [...task];
//     updatedTask[index].completed = !updatedTask[index].completed
//     this.setState({
//       task: updatedTask,
//     })


//   }

//   deleteTask=(index)=> {
//     const {task} = this.state;
//     const updatedTask = [...task]
//     updatedTask.splice(index, 1);
//     this.setState({
//       task: updatedTask,
//     })
//   }

//   editTask = (index) => {
//     const {task} = this.state
//     this.setState({
//       editIndex: index,
//       inputValue: task[index].text})
    
//   }


//   render() {
//     const {task, inputValue} = this.state
//     return (
//       <div className='container'>
//         <h1>Todo App</h1>
//         <div className='container-form'>
//           <input type="text" value={inputValue} onChange={this.changeInputValue} placeholder='Enter a new task' />
//           <button onClick={this.addTask}>Add</button>
//         </div>
//         <table className='container-content'>
//           {task.map((item, index) => 
//             <tr key={index}>
//               <td><input type="checkbox" checked={item.completed} onChange={()=> this.changeCheckbox(index)} /></td>
//               <td><span style={{textDecoration: item.completed? "line-through" : "none"}}>{item.text}</span></td>
//               <td><button onClick={()=>this.editTask(index)}>EditTask</button></td>
//               <td><button onClick={()=> this.deleteTask(index)}>Delete</button></td>
//             </tr>          
//           )}

//         </table>
//       </div>

//     )
//   }
// }
// export default App;


// ===================================== SPACE ==============================================================



// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: [],
//       newTask: '',
//       editingTaskId: null,
//       editedTaskText: '',
//     };
//   }

//   handleChange = (e) => {
//     this.setState({ newTask: e.target.value });
//   };

//   handleAddTask = () => {
//     const { tasks, newTask } = this.state;
//     if (newTask.trim() !== '') {
//       this.setState({
//         tasks: [...tasks, { id: Date.now(), text: newTask }],
//         newTask: '',
//       });
//     }
//   };

//   handleEditTask = (id) => {
//     this.setState({ editingTaskId: id, editedTaskText: '' });
//   };

//   handleSaveTask = (id) => {
//     const { tasks, editedTaskText } = this.state;
//     const updatedTasks = tasks.map((task) =>
//       task.id === id ? { ...task, text: editedTaskText || task.text } : task
//     );
//     this.setState({ tasks: updatedTasks, editingTaskId: null, editedTaskText: '' });
//   };

//   handleCancelEdit = () => {
//     this.setState({ editingTaskId: null, editedTaskText: '' });
//   };

//   handleDeleteTask = (id) => {
//     const { tasks } = this.state;
//     const updatedTasks = tasks.filter((task) => task.id !== id);
//     this.setState({ tasks: updatedTasks });
//   };

//   handleEditInputChange = (e) => {
//     this.setState({ editedTaskText: e.target.value });
//   };

//   render() {
//     const { tasks, newTask, editingTaskId, editedTaskText } = this.state;

//     return (
//       <div>
//         <h1>Todo App</h1>
//         <div>
//           <input type="text" value={newTask} onChange={this.handleChange} />
//           <button onClick={this.handleAddTask}>Add Task</button>
//         </div>
//         <ul>
//           {tasks.map((task) => (
//             <li key={task.id}>
//               {editingTaskId === task.id ? (
//                 <div>
//                   <input
//                     type="text"
//                     value={editedTaskText}
//                     onChange={this.handleEditInputChange}
//                   />
//                   <button onClick={() => this.handleSaveTask(task.id)}>Save</button>
//                   <button onClick={this.handleCancelEdit}>Cancel</button>
//                 </div>
//               ) : (
//                 <div>
//                   {task.text}
//                   <button onClick={() => this.handleEditTask(task.id)}>Edit</button>
//                   <button onClick={() => this.handleDeleteTask(task.id)}>Delete</button>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default App;

// ================================================== SPACE ===========================================

// import './App.css'

// import React, {Component} from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue: "",
//       task: [],

//     }
//   }

//   handleChangeInputValue=(e)=> {
//     this.setState({
//       inputValue: e.target.value
//     })

//   }
//   addTask=()=> {
//     const {task, inputValue} = this.state
//     const updatedTask = [...task, {text: inputValue, completed: false}]
//     this.setState({
//       task:updatedTask,
//       inputValue:""
//     })
//   }

//   handleCheckbox =(index)=>{
//     const {task} = this.state
//     const updatedTask = [...task]
//     updatedTask[index].completed = !updatedTask[index].completed
//     this.setState({
//       task: updatedTask
//     })

//   }

//   deleteTask=(index)=> {
//     const {task} = this.state
//     const updatedTask = [...task]
//     updatedTask.splice(index,1)
//     this.setState({
//       task: updatedTask
//     })
    
//   }


//   render() {
//     const {inputValue, task} = this.state
//     return (
//       <div className='container'>
//         <h1>Todo App</h1> 
//         <div className='container-form'> 
//           <input type="text" value={inputValue} onChange={this.handleChangeInputValue} placeholder='Enter a new task...'/>
//           <button onClick={this.addTask}> Add</button>
//         </div>
//         <ul>
//           {task.map((item, index) => 
//             <li>
//               <input type="checkbox" checked={item.completed}  onChange={()=> this.handleCheckbox(index)} />
//               <span style={{textDecoration: item.completed? "line-through" : "none"}}>{item.text}</span>
//               <button onClick={() => this.deleteTask(index)}>Delete</button>
//             </li>
//           )}
//         </ul>

//       </div>

//     )
//   }
// }
// export default App;


// ======================================= SPACE ========================================================



// import React, { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: [],
//       newTask: "",
//       editIndex: null,
//       editedTask: ""
//     };
//   }

//   handleInputChange = (event) => {
//     this.setState({ newTask: event.target.value });
//   };

//   handleEditInputChange = (event) => {
//     this.setState({ editedTask: event.target.value });
//   };

//   addTask = () => {
//     if (this.state.newTask.trim() !== "") {
//       this.setState((prevState) => ({
//         tasks: [...prevState.tasks, prevState.newTask],
//         newTask: ""
//       }));
//     }
//   };

//   editTask = (index) => {
//     this.setState({ editIndex: index, editedTask: this.state.tasks[index] });
//   };

//   updateTask = () => {
//     const { editIndex, editedTask } = this.state;
//     if (editIndex !== null && editedTask.trim() !== "") {
//       this.setState((prevState) => {
//         const tasks = [...prevState.tasks];
//         tasks[editIndex] = editedTask;
//         return { tasks, editIndex: null, editedTask: "" };
//       });
//     }
//   };

//   deleteTask = (index) => {
//     this.setState((prevState) => ({
//       tasks: prevState.tasks.filter((task, i) => i !== index)
//     }));
//   };

//   render() {
//     const { tasks, newTask, editIndex, editedTask } = this.state;

//     return (
//       <div>
//         <h1>Todo App</h1>
//         <input
//           type="text"
//           value={newTask}
//           onChange={this.handleInputChange}
//           placeholder="Add new task"
//         />
//         <button onClick={this.addTask}>Add Task</button>
//         <ul>
//           {tasks.map((task, index) => (
//             <li key={index}>
//               {editIndex === index ? (
//                 <>
//                   <input
//                     type="text"
//                     value={editedTask}
//                     onChange={this.handleEditInputChange}
//                   />
//                   <button onClick={this.updateTask}>Update</button>
//                 </>
//               ) : (
//                 <>
//                   {task}
//                   <button onClick={() => this.editTask(index)}>Edit</button>
//                   <button onClick={() => this.deleteTask(index)}>Delete</button>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default App;


// ===========================================    SPACE ============================================

import './App.css';

import React, {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      task: [],
    }
  }

  handleChangeInputValue= (event) => {
    this.setState({inputValue: event.target.value})
  }


  addTask = () => {
    const {task, inputValue} = this.state;
    const updatedTask = [...task, {text: inputValue, completed: false}]
    this.setState({
      task: updatedTask,
      inputValue: "",
    })
    console.log(task)
  }

  handleChangeCheckbox = (index) => {
    const {task} = this.state;
    const updatedTask = [...task]
    updatedTask[index].completed = !updatedTask[index].completed
    this.setState({
      task: updatedTask,

    })


  }

  deleteTask = (index) => {
    const {task} = this.state;
    const updatedTask = [...task]
    updatedTask.filter((i) => i !== index)
    this.setState ({
      task: updatedTask,
    })

  }



  render() {
    const {inputValue, task} = this.state
    return (
      <div className='container'>
        <h1>Todo App</h1>
        <div className='container-form '>
          <input type="text" value={inputValue} onChange={this.handleChangeInputValue} placeholder='Enter a new task...' />
          <button onClick={this.addTask}>Add</button>
        </div>
        <ul>
          {task.map((item, index) => 
            <li key={index}>
              <input type="checkbox" value={item.completed} onChange={()=>this.handleChangeCheckbox(index)} />
              <span style={{textDecoration: item.completed ? "line-through" : "none"}}>{item.text}</span>
              <button onClick={() => this.deleteTask(index)}>Delete</button>
            </li>
          )}
        </ul>
      </div>
    )
  }
}
export default App;














// ====================================================    REACT HOOK  ===================================
// import React, {useState} from "react";

// function App () {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleChaneInputValue=(e)=> {
//     setInputValue(e.target.value)
//   }

//   const handleAddTask =()=> {
//     if(inputValue.trim() !=="") {
//       const updatedTodos = [...todos, {text: inputValue, completed: false}]
//       setTodos(updatedTodos)
//       setInputValue('')
//     }
//   }

//   const handleChangeCheckbox =(index)=> {
//     const updatedTodos = [...todos]
//     updatedTodos[index].completed =! updatedTodos[index].completed
//     setTodos(updatedTodos)
    
//   }

//   const handleDeteteTask = (index)=> {
//     // const updatedTodos = todos.filter((_, i) => i !== index);
//     const updatedTodos = [...todos];
//     updatedTodos.splice(index,1)
//     setTodos(updatedTodos)
//   }



//   return (
//     <div className="container">
//       <h1>Todo App</h1>
//       <div className="container-form">
//         <input type="text" value={inputValue} onChange={handleChaneInputValue}  placeholder="Enter a new task..."/>
//         <button onClick={handleAddTask}> Add</button>
//       </div>
//       <ul>
//         {todos.map((todo, index) => 
//           <li key={index}>
//             <input type="checkbox" checked={todo.completed} onChange={()=>handleChangeCheckbox(index)}/>
//             <span style={{textDecoration: todo.completed? "line-through" : "none"}}>{todo.text}</span>
//             <button onClick={()=> handleDeteteTask(index)}>Delete</button>
//           </li>
        
//         )}

//       </ul>

//     </div>

//   )
// }
// export default App;


// ==================================================== SPACE ================================================

// import React, { useState } from 'react';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleAddTodo = () => {
//     if (inputValue.trim() !== '') {
//       setTodos([...todos, { text: inputValue, completed: false }]);
//       setInputValue('');
//     }
//   };

//   const handleCheckboxChange = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].completed = !updatedTodos[index].completed;
//     setTodos(updatedTodos);
//   };

//   const handleDeleteTodo = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Enter a todo..."
//       />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => handleCheckboxChange(index)}
//             />
//             <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//               {todo.text}
//             </span>
//             <button onClick={() => handleDeleteTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// ===================================== SPACE =========================================================

