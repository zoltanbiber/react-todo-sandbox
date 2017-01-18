import React from 'react';
import styled from 'styled-components';
import { Button, Input, Row, Col } from 'antd';

const NewTaskButtons = styled.div`padding: 10px 0px;`

const NewTaskInput = ({cancelNewTask}) => {
  console.log(cancelNewTask);
  return (
    <div>
      <Input placeholder="Write your new task here..."></Input>
      <NewTaskButtons>
        <Row>
          <Col span={6}><Button type="primary">Add Task</Button></Col> {/* on click take the value and add to app state objects*/}
          <Col span={6}><Button type="dashed" onClick={cancelNewTask}>Cancel</Button></Col>
        </Row>
      </NewTaskButtons>
    </div>
  )
};

export default NewTaskInput;