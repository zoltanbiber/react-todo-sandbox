import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import TodoList from './components/TodoList';
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
      </div>
    );
  }
}

export default App;
