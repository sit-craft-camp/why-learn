import React, {Component} from 'react'
import styled, {keyframes} from 'styled-components'
import axios from 'axios'
import {Container, Row, Col} from 'reactstrap'

import App from '../components/App'
import Slogan from '../components/Slogan'

export const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #8ac7de;
  min-height: 100vh;
`

const Logo = styled.img`
  width: 60%;
  max-width: 600px;
`

const ScrollDown = styled.svg`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;

  border: 2px solid #ffffff;
  border-radius: 50%;

  font-size: 1.8em;
  background: transparent;
  fill: #ffffff;
`

const Landing = () => (
  <Page>
    <Logo src="/static/logo.png"/>
    <Slogan />
    <ScrollDown viewBox='0 0 24 24'>
      <path d='M7.406 7.828l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z' />
    </ScrollDown>
  </Page>
)

export default App(Landing)
