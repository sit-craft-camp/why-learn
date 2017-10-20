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

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident accusantium, expedita, deleniti sed, odit modi vitae nemo eius quae iste hic numquam quibusdam! Nobis, molestias, neque aliquam hic vel eveniet!'

export const subjects = [
  {
    name: 'Art and Design',
    desc: lorem,
    image: 'artcolor',
    color: '#2fac3d'
  },
  {
    name: 'Mathematics',
    desc: lorem,
    image: 'math',
    color: '#ef2475'
  },
  {
    name: 'Science',
    desc: lorem,
    image: 'scicolor',
    color: '#f1c40f'
  },
  {
    name: 'Social Studies',
    desc: lorem,
    image: 'socialcolor',
    color: '#f27435'
  }
]

export const jobs = [
  {
    name: 'นายกรัฐมนตรี',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eveniet, laborum ab',
    image: '/static/president.png'
  },
  {
    name: 'ตำรวจไทย',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eveniet, laborum ab',
    image: '/static/police.png'
  },
  {
    name: 'ทนายความ',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eveniet, laborum ab',
    image: '/static/lawgirl.png'
  }
]
