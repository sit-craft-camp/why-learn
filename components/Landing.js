import React from 'react'
import styled, {keyframes} from 'styled-components'
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

const CharacterImage = styled.img`
  width: 9.5em;
  height: 16.5em;
`

export const Character = ({index}) => <CharacterImage src={getChar(index)} />

export const subjects = [
  {
    name: 'Mathematics',
    image: 'art',
    color: '#f27435'
  },
  {
    name: 'Computer',
    image: 'social',
    color: '#2fac3d'
  },
  {
    name: 'Science',
    image: 'art',
    color: '#ef2475'
  }
]
