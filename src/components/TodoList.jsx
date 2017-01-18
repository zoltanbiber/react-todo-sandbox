import React from 'react';
import { Row, Col } from 'antd';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isInProgress: false };
  }

  render() {
    return (
      <Row>
        <Col span={8} offset={8}>
          {this.props.items.map(item => <TodoItem key={item.id} itemContent={item.content}></TodoItem>)}
        </Col>
      </Row>
    );
  }
}

export default TodoList;