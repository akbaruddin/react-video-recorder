import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  height: 56px;
  width: 56px;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  padding: 5px;

  :hover {
    background: rgba(255, 255, 255, 0.4);
  }
`

const Box = styled.div`
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: #d93025;
`

Button.defaultProps = {
  color: 'black',
  backgroundColor: 'white'
}

export default (props) => (
  <Button {...props}>
    <Box />
  </Button>
)
