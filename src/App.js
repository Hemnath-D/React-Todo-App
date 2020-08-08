import React from 'react';
import './App.css';

class AddTask extends React.Component {
  render() {
    return (
      <button onClick = {() => this.props.onClick()}>Add Task</button>
    );
  }
}

class Task extends React.Component {
  render() {
    const checkbox = (
      <div>
        <input type = "checkbox"/> {this.props.value}
        <button>X</button>
      </div>
    )
    return checkbox;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList : ["something", "nothing"],
      taskStatus: [false]
    }
  }

  handleAddTask() {
    const taskDescription = prompt("Enter your Task Description");
    const taskList = this.state.taskList.slice();
    const taskStatus = this.state.taskStatus.slice();
    taskList.push(taskDescription);
    taskStatus.push(false);
    this.setState({
      taskList: taskList,
      taskStatus: taskStatus
    })
  }

  render() {
    return (
      <div className = "App">
        <center><h1>To-Do App</h1></center>
        {
          this.state.taskList.map(task => (
            <Task value = {task}/>
          ))
        }
        <AddTask onClick = {() => this.handleAddTask()}/>
      </div>
    );
  }
}
export default App;
