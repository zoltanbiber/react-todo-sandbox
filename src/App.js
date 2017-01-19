import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import TodoList from './components/TodoList';
import './App.css';
import 'antd/dist/antd.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.saveNewTask = this.saveNewTask.bind(this);
    this.state = { todoItems: [{id: 1, content: "First todo item."},
                               {id: 2, content: "Second todo item."}]};
  }

  saveNewTask(content) {
    var highestId = this.state.todoItems[this.state.todoItems.length - 1].id;
    this.setState({ todoItems: this.state.todoItems.concat([{id: highestId + 1, content: content}])});
  }

  render() {
    return (
      <div>
        <AppHeader>TODO LIST</AppHeader>
        <TodoList items={this.state.todoItems} saveNewTask={this.saveNewTask}/>
      </div>
    );
  }
}

export default App;
