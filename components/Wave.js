import React from 'react'
import styled, {css, keyframes, injectGlobal} from 'styled-components'

const wave = keyframes`
  0% {
    transform: translateY(-10px);
    height: 11px;
  }

  100% {
    transform: translateY(-500px);
    height: 501px;
  }
`

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
`

const Line = styled.div`
  background: #32bdfb;
  width: 4px;
  height: 1px;
  float: left;
  animation: ${wave} 1s infinite ease-in-out alternate;
  z-index: 1;
  position: absolute;
  border-top: 3px solid white;

  &:hover {
    background: #01b1ff;
  }
`

const Wave = () => (
  <Wrapper>{[...Array(480)].map((x, i) => <Line key={i} />)}</Wrapper>
)

export default Wave
