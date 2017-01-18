import React from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'antd';

const ButtonWrapper = styled.div`text-align: center;`

const AddButton = ({onAddTaskButtonClick}) => {
  return (
    <Row type="flex" justify="start">
      <Col span={4} offset={10}>
        <ButtonWrapper>
          <Button type="primary" size="large" onClick={onAddTaskButtonClick}>
            Add New Task
          </Button>
        </ButtonWrapper>
      </Col>
    </Row>
  )
};

export default AddButton;