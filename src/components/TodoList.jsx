import React from 'react';
import { Row, Col } from 'antd';
import TodoItem from './TodoItem';
import AddButton from './AddButton';
import NewTaskInput from './NewTaskInput';


class TodoListContainer extends React.Component {
  // hideNewTaskInput() { this.setState({isInProgress: false}); }

  saveNewTask(content) {
    var highestId = this.state.todoItems[this.state.todoItems.length - 1].id;
    this.setState({ todoItems: this.state.todoItems.concat([{id: highestId + 1, content: content}])});
  }

  render() {
    return <TodoList  items={this.props.items} saveNewTask={this.saveNewTask}
                      showNewTaskInput={this.props.showNewTaskInput} isInProgress={this.props.isInProgress}
                      hideNewTaskInput={this.props.hideNewTaskInput}
           />;
  }
}

const TodoList = ({ items, isInProgress, showNewTaskInput, hideNewTaskInput }) => {
  return (
    <Row>
      <Col span={8} offset={8}>
        { items.map(item => <TodoItem key={item.id} itemContent={item.content}/>) }
        { isInProgress ? <NewTaskInput hideNewTaskInput={hideNewTaskInput}/> : null }
        <AddButton onAddTaskButtonClick={showNewTaskInput}>Add New Task</AddButton>
      </Col>
    </Row>
  )
};

export default TodoListContainer;