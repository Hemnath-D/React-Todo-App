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
      tasks : [{"description": "something","completed": false}],
    }
  }

  handleAddTask() {
    const taskDescription = prompt("Enter your Task Description");
    const tasks = this.state.tasks.slice();
    tasks.push({"description": taskDescription, "completed": false});
    this.setState({
      tasks: tasks
    })
  }

  render() {
    return (
      <div className = "App">
        <center><h1>To-Do App</h1></center>
        {
          this.state.tasks.map(task => (
            <Task value = {task.description}/>
          ))
        }
        <AddTask onClick = {() => this.handleAddTask()}/>
      </div>
    );
  }
}
export default App;
