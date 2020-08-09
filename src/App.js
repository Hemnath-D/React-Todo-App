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
    const className = this.props.value.completed ? "complete" : "incomplete";
    const checkbox = (
      <div class = {className}>
        <input type = "checkbox" onChange = {() => this.props.onCheckClick(this.props.value)}/> {this.props.value.description}
        <button onClick = {() => this.props.onRemoveClick(this.props.value)}>X</button>
      </div>
    )
    return checkbox;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 1,
      tasks : [{"description": "something","completed": false, "id": 0}],
    }
  }

  handleAddTask() {
    const taskDescription = prompt("Enter your Task Description");
    const tasks = this.state.tasks.slice();
    tasks.push({"description": taskDescription, "completed": false, "id": this.currentId});
    this.setState({
      tasks: tasks,
      currentId: this.currentId + 1
    })
  }

  handleRemoveTask(task) {
    const tasks = this.state.tasks.slice();
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks,
      currentId: this.currentId
    })
  }

  handleCheckClick(task) {
    const tasks = this.state.tasks.slice();
    const index = tasks.indexOf(task);
    tasks[index].completed = !tasks[index].completed;
    this.setState({
      tasks: tasks,
      currentId: this.currentId
    })
  }

  render() {
    return (
      <div className = "App">
        <center><h1>To-Do App</h1></center>
        {
          this.state.tasks.map(task => (
            <Task value = {task} onRemoveClick = {() => this.handleRemoveTask(task)} onCheckClick = {() => this.handleCheckClick(task)}/>
          ))
        }
        <AddTask onClick = {() => this.handleAddTask()}/>
      </div>
    );
  }
}
export default App;
