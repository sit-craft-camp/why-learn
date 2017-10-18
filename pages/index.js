import React, {Component} from 'react'
import {keyframes} from 'emotion'
import styled from 'react-emotion'
import axios from 'axios'
import Typist from 'react-typist'
import {Container, Row, Col} from 'reactstrap'

import App from '../components/App'
import Card from '../components/Card'

import Todo from '../components/Todo'
import Login from '../components/Login'

// prettier-ignore
import {Page, Tagline, Bold, Character, Title, getChar, subjects} from '../components/Landing'

const Logo = styled.h1`
  font-family: Helvetica Neue;
  font-size: 4.6em;
  font-weight: 300;
  color: #555;
`

const Fold = ({index}) => (
  <Page>
    <Logo>WHY LEARN</Logo>
    <Tagline>
      Why do we learn
      <Title />
    </Tagline>
    <div />
  </Page>
)

const Landing = () => (
  <Container>

  </Container>
)

export default App(Landing)
