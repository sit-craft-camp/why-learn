import React, {Component} from 'react'
import styled, {keyframes} from 'styled-components'
import Typist from 'react-typist'

import {subjects} from './Landing'

const blinking = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Tagline = styled.h1`
  display: flex;
  color: white;
  font-family: Roboto;
  font-weight: 300;
  font-size: 2.4em;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.18);

  > .Typist > .Cursor {
    display: inline-block;
  }

  > .Typist > .Cursor.Cursor--blinking {
    opacity: 1;
    animation: ${blinking} 1s linear infinite;
  }
`

const Bold = styled.strong`
  margin-left: 0.3em;
  font-weight: 400;
`

const Title = ({index = 0}) => {
  const name = subjects[index] ? subjects[index].name : ''
  const len = name.length + 1

  return (
    <Typist key={name}>
      <Bold>{name}?</Bold>
      <Typist.Backspace count={len} delay={2000} />
    </Typist>
  )
}

export default class Slogan extends Component {
  state = {
    chara: 0
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const {chara} = this.state

      this.setState({chara: chara < subjects.length - 1 ? chara + 1 : 0})
    }, 4000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render = () => (
    <Tagline>
      Why do we learn
      <Title index={this.state.chara} />
    </Tagline>
  )
}
