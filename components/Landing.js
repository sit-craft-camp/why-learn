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

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident accusantium, expedita, deleniti sed, odit modi vitae nemo eius quae iste hic numquam quibusdam! Nobis, molestias, neque aliquam hic vel eveniet!'

export const subjects = [
  {
    name: 'Mathematics',
    desc: lorem,
    image: 'art',
    color: '#f27435'
  },
  {
    name: 'Computer',
    desc: lorem,
    image: 'social',
    color: '#2fac3d'
  },
  {
    name: 'Science',
    desc: lorem,
    image: 'art',
    color: '#ef2475'
  }
]
