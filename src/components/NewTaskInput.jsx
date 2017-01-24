import React from 'react';
import styled from 'styled-components';
import { Button, Input, Row, Col } from 'antd';

const NewTaskButtons = styled.div`padding: 10px 0px;`

class NewTaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.captureInputValue = this.captureInputValue.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  captureInputValue(e) {
    this.setState({ input: e.target.value });
  };

  handleClick() {
    this.props.saveTodo(this.state.input);
    this.props.hideNewTaskInput();
  };

  render() {
    return (
      <div>
        <Input placeholder="Write your new task here..." onChange={ this.captureInputValue }/>
        <NewTaskButtons>
          <Row>
            <Col span={6}><Button type="primary" onClick={ this.handleClick }>Add Task</Button></Col>
            <Col span={6}><Button type="dashed" onClick={ this.props.hideNewTaskInput }>Cancel</Button></Col>
          </Row>
        </NewTaskButtons>
      </div>
    )
  }
};

export default NewTaskInput;