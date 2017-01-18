import React from 'react';
import { Row, Col } from 'antd';
import TodoItem from './TodoItem';
import AddButton from './AddButton';
import NewTaskInput from './NewTaskInput';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.showNewTaskInput = this.showNewTaskInput.bind(this);
    this.state = { isInProgress: false };
  }

  showNewTaskInput() {
    this.setState({isInProgress: true});
  }

  render() {
    return (
      <Row>
        <Col span={8} offset={8}>
          { this.props.items.map(item => <TodoItem key={item.id} itemContent={item.content}></TodoItem>) }
          { this.state.isInProgress ? <NewTaskInput /> : null }
          <AddButton onAddTaskButtonClick={this.showNewTaskInput}>Add New Task</AddButton>
        </Col>
      </Row>
    );
  }
}

export default TodoList;