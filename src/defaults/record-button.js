import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 5;
  svg:hover circle {
    fill: #fb6d42;
  }
`

const RecWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonBorder = styled.div``

Button.defaultProps = {
  color: 'black',
  backgroundColor: 'white'
}

const RecordButton = ({ t, ...props }) => (
  <RecWrapper>
    <ButtonBorder>
      <Button {...props} title={`${t('PRESS')} ${t('REC')} ${t('WHEN READY')}`}>
        <svg
          width={40}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
        >
          <circle cx='256' cy='256' r='256' fill='rgba(227, 73, 28, 0.8)' />
        </svg>
      </Button>
    </ButtonBorder>
  </RecWrapper>
)

RecordButton.propTypes = {
  t: PropTypes.func
}

export default RecordButton
