import React from 'react'
import styled from 'styled-components'

const Bgcolor = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color:#333;
`

const Box = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  color:#333;
  font-size:60px;
  background:white;
  height:90px;
  padding:1.5em;
`

const GameEntry = ()=> (
  <div>
    <Bgcolor>
      <Box>WELCOME</Box>
    </Bgcolor>
  </div>
)

export default GameEntry