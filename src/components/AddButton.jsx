import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const ButtonWrapper = styled.div`text-align: center;`

const AddButton = ({onAddTaskButtonClick}) => {
  return (
    <Row type="flex" justify="start">
      <Col span={4} offset={10}>
        <ButtonWrapper>
          <button type="button" className="ant-btn ant-btn-primary ant-btn-lg" onClick={onAddTaskButtonClick}>
            Add New Task
          </button>
        </ButtonWrapper>
      </Col>
    </Row>
  )
};

export default AddButton;