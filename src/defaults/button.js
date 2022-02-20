import styled from 'styled-components'

const Button = styled.button`
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;

  :hover {
    background: #eee;
  }
`

export const ButtonRound = styled.button`
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 6px;
  outline: 0;
  padding: 5px 12px;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #000;
  }
`

Button.defaultProps = {
  color: 'black',
  backgroundColor: 'white'
}

export const ButtonTransparent = styled.button`
  background: transparent;
  height: 56px;
  width: 56px;
  border: none;
  outline: none;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  .playButtonSvg {
    margin-left: 5px;
  }
`

export default Button
