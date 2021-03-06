import React from 'react';
import { connect } from 'react-redux';
import AppHeader from './components/AppHeader';
import TodoList from './components/TodoList';
import { Link } from 'react-router';
import { Button, Icon } from 'antd';
import { showNewTaskInput, hideNewTaskInput, saveTodo } from './actions';
import './App.css';
import 'antd/dist/antd.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.showNewTaskInput = this.showNewTaskInput.bind(this);
    this.hideNewTaskInput = this.hideNewTaskInput.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
  }

  showNewTaskInput() {
    this.props.dispatch(showNewTaskInput());
  }

  hideNewTaskInput() {
    this.props.dispatch(hideNewTaskInput());
  }

  saveTodo(text) {
    var id = this.props.items[this.props.items.length - 1].id + 1;
    var todo = [{id: id, content: text}];
    this.props.dispatch(saveTodo(todo));
  }

  render() {
    const { items, isInProgress } = this.props;
    return (
      <div>
        <Link to={`/about`}>
          <Button>About The Author <Icon type="right" /></Button>
        </Link>
        <AppHeader>TODO LIST</AppHeader>
        <TodoList items={items} isInProgress={isInProgress}
                  showNewTaskInput={this.showNewTaskInput}
                  hideNewTaskInput={this.hideNewTaskInput}
                  saveTodo={this.saveTodo}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.todoItems,
    isInProgress: state.isInProgress,
  }
}

export default connect(mapStateToProps)(App);
