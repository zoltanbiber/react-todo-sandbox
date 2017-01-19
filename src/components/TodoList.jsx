import React from 'react';
import { Row, Col } from 'antd';
import TodoItem from './TodoItem';
import AddButton from './AddButton';
import NewTaskInput from './NewTaskInput';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.showNewTaskInput = this.showNewTaskInput.bind(this);
    this.hideNewTaskInput = this.hideNewTaskInput.bind(this);
    this.state = { isInProgress: false };
  }

  showNewTaskInput() { this.setState({isInProgress: true}); }
  hideNewTaskInput() { this.setState({isInProgress: false}); }

  render() {
    return (
      <Row>
        <Col span={8} offset={8}>
          { this.props.items.map(item => <TodoItem key={item.id} itemContent={item.content}/>) }
          { this.state.isInProgress ? <NewTaskInput hideNewTaskInput={this.hideNewTaskInput} saveNewTask={this.props.saveNewTask}/> : null }
          <AddButton onAddTaskButtonClick={this.showNewTaskInput}>Add New Task</AddButton>
        </Col>
      </Row>
    );
  }
}

export default TodoList;