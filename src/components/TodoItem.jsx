import React from 'react';
import styled from 'styled-components';
import { Row, Col, Checkbox } from 'antd';

const TodoItemWrapper = styled.div`
  background-color: dodgerblue;
  color: white;
  margin-bottom: 5px;
  font-size: 2em;
  padding: 0.5em;
`;

const StrikethroughText = styled.p`text-decoration: line-through;`

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: false };
    this.toggleDoneStatus = this.toggleDoneStatus.bind(this);
  }

  toggleDoneStatus(e) {
    this.setState({ done: e.target.checked });
  };

  render() {
    return (
      <TodoItemWrapper>
        <Row>
          <Col span={22}>{this.state.done ? <StrikethroughText>{this.props.itemContent}</StrikethroughText> : this.props.itemContent}</Col>
          <Col span={2}><Checkbox onChange={this.toggleDoneStatus}/></Col>
        </Row>
      </TodoItemWrapper>
    )
  }
};

export default TodoItem;