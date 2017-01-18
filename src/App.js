import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import TodoList from './components/TodoList';
import AddButton from './components/AddButton';
import './App.css';
import 'antd/dist/antd.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todoItems: [{id: 1, content: "First todo item."},
                               {id: 2, content: "Second todo item."}]};
  }

  render() {
    return (
      <div>
        <AppHeader>TODO LIST</AppHeader>
        <TodoList items={this.state.todoItems}/>
        <AddButton onAddTaskButtonClick="f">Add New Task</AddButton> {/* on click set the is-in-progress state of the TodoList component to true*/}
      </div>
    );
  }
}

export default App;
