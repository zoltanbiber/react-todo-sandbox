import React from 'react';
import styled from 'styled-components';
import { Button, Input, Row, Col } from 'antd';

const NewTaskButtons = styled.div`padding: 10px 0px;`

const NewTaskInput = ({itemContent}) => {
  return (
    <div>
      <Input placeholder="Write your new task here..."></Input>
      <NewTaskButtons>
        <Row>
          <Col span={6}><Button type="primary">Add Task</Button></Col>
          <Col span={6}><Button type="dashed">Cancel</Button></Col>
        </Row>
      </NewTaskButtons>
    </div>
  )
};

export default NewTaskInput;