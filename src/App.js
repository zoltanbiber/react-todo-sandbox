import React from 'react';
import { connect } from 'react-redux';
import AppHeader from './components/AppHeader';
import TodoListContainer from './components/TodoList';
import { showNewTaskInput, hideNewTaskInput } from './actions';
import './App.css';
import 'antd/dist/antd.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.showNewTaskInput = this.showNewTaskInput.bind(this);
    this.hideNewTaskInput = this.hideNewTaskInput.bind(this);
    // this.saveNewTask = this.saveNewTask.bind(this);
  }

  showNewTaskInput() {
    this.props.dispatch(showNewTaskInput());
  }

  hideNewTaskInput() {
    this.props.dispatch(hideNewTaskInput())
  }

  render() {
    const { items, isInProgress, todoContent, todoDone, strikethrough } = this.props;
    return (
      <div>
        <AppHeader>TODO LIST</AppHeader>
        <TodoListContainer  items={items} isInProgress={isInProgress}
                            todoContent={todoContent} todoDone={todoDone}
                            strikethrough={strikethrough} showNewTaskInput={this.showNewTaskInput}
                            hideNewTaskInput={this.hideNewTaskInput}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.todoItems,
    isInProgress: state.isInProgress,
    todoContent: state.input,
    todoDone: state.done,
    strikethrough: state.strikethrough
  }
}

export default connect(mapStateToProps)(App);
