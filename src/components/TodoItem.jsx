import React from 'react';
import styled from 'styled-components';
import { Row } from 'antd';

const TodoItemWrapper = styled.div`
  background-color: dodgerblue;
  color: white;
  margin-bottom: 5px;
  font-size: 2em;
  padding: 0.5em;
`;

const TodoItem = ({itemContent}) => {
  return (
    <Row>
      <TodoItemWrapper>{itemContent}</TodoItemWrapper>
    </Row>
  )
};

export default TodoItem;