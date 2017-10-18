import React from 'react'
import {keyframes} from 'emotion'
import styled from 'react-emotion'
import axios from 'axios'
import Typist from 'react-typist'

export const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;
  min-height: 100vh;
`

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

export const Tagline = styled.h1`
  display: flex;
  color: #555;
  font-family: Helvetica Neue;
  font-weight: 300;
  font-size: 2.4em;

  > .Typist > .Cursor {
    display: inline-block;
  }

  > .Typist > .Cursor.Cursor--blinking {
    opacity: 1;
    animation: ${blinking} 1s linear infinite;
  }
`

export const Bold = styled.strong`
  margin-left: 0.3em;
  font-weight: 400;
`

export const getChar = index =>
  `/static/${subjects[index] ? subjects[index].image : subjects[0]}.png`

const CharacterImage = styled.img`
  width: 9.5em;
  height: 16.5em;
`

export const Character = ({index}) => <CharacterImage src={getChar(index)} />

export const subjects = [
  {
    name: 'Mathematics',
    image: 'swordsman'
  },
  {
    name: 'Computer',
    image: 'wizard'
  },
  {
    name: 'Science',
    image: 'swordsman'
  },
  {
    name: 'Programming',
    image: 'wizard'
  }
]

export const Title = ({index = 0}) => {
  const name = subjects[index] ? subjects[index].name : ''
  const len = name.length + 1

  return (
    <Typist key={name}>
      <Bold>{name}?</Bold>
      <Typist.Backspace count={len} delay={2000} />
    </Typist>
  )
}
