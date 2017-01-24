import React from 'react';
import { Row, Col } from 'antd';
import TodoItem from './TodoItem';
import AddButton from './AddButton';
import NewTaskInput from './NewTaskInput';


class TodoListContainer extends React.Component {
  render() {
    return <TodoList  items={this.props.items} saveNewTask={this.saveNewTask}
                      showNewTaskInput={this.props.showNewTaskInput} isInProgress={this.props.isInProgress}
                      hideNewTaskInput={this.props.hideNewTaskInput} saveTodo={this.props.saveTodo}
           />;
  }
}

const TodoList = ({ items, isInProgress, showNewTaskInput, hideNewTaskInput, saveTodo }) => {
  return (
    <Row>
      <Col span={8} offset={8}>
        { items.map(item => <TodoItem key={item.id} itemContent={item.content}/>) }
        { isInProgress ? <NewTaskInput hideNewTaskInput={hideNewTaskInput} saveTodo={saveTodo}/> : null }
        <AddButton onAddTaskButtonClick={showNewTaskInput}>Add New Task</AddButton>
      </Col>
    </Row>
  )
};

export default TodoListContainer;