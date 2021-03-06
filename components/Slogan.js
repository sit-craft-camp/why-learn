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

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(2em) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1.0);
  }
`

export const Tagline = styled.h1`
  display: flex;
  color: white;
  font-family: Roboto;
  font-weight: 300;
  font-size: 2.4em;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.18);

  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);

  > .Typist > .Cursor {
    display: inline-block;
  }

  > .Typist > .Cursor.Cursor--blinking {
    opacity: 1;
    animation: ${blinking} 1s linear infinite;
  }

  @media screen and (max-width: 680px){
    display: block;
    position: static;
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
