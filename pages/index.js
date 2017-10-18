import React, {Component} from 'react'
import styled, {keyframes} from 'styled-components'
import axios from 'axios'
import {Container, Row, Col} from 'reactstrap'

import App from '../components/App'
import Slogan from '../components/Slogan'

// prettier-ignore
import {Page} from '../components/Landing'

const Logo = styled.h1`
  font-family: Roboto;
  font-size: 4.6em;
  font-weight: 300;
  color: #555;
`

const Fold = ({index}) => (
  <Page>
    <Logo>WHY LEARN</Logo>
    <Slogan />
    <div />
  </Page>
)

const Landing = () => (
  <Container>
    <Fold />
  </Container>
)

export default App(Landing)
