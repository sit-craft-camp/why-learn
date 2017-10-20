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

export const questions = [
  {
    question:
      'คุณจะเริ่มต้นแก้ปัญหาอย่างไร หากโรงเรียนของคุณเกิดอุทกภัยขึ้นอย่างไม่มีสาเหตุ ทุกคนในโรงเรียนเกิดความวุ่นวาย และยังมีนักเรียนบางคนติดอยู่ในห้องเรียนอีกด้วย',
    choices: [
      {
        text: 'หาต้นเหตุ',
        score: {
          president: 20,
          police: 0,
          lawyer: 0
        }
      },
      {
        text: 'สังเกตสภาพแวดล้อม',
        score: {
          president: 6,
          police: 24,
          lawyer: 3
        }
      },
      {
        text: 'ตั้งสติ',
        score: {
          president: 8,
          police: 26,
          lawyer: 2
        }
      }
    ]
  },
  {
    question:
      'หากคุณต้องการจะสร้างห้องสมุดชุมชน คุณคิดว่าควรคำนึงถึงใดเป็นสำคัญ',
    choices: [
      {
        text: 'ความโดดเด่น',
        score: {
          president: 27,
          police: 9,
          lawyer: 0
        }
      },
      {
        text: 'เป็นส่วนรวม',
        score: {
          president: 6,
          police: 12,
          lawyer: 12
        }
      },
      {
        text: 'เป็นระเบียบ',
        score: {
          president: 0,
          police: 18,
          lawyer: 18
        }
      }
    ]
  },
  {
    question:
      'ปัจจุบันคุณคิดว่า ปัจจัยในสังคมใดเป็นปัจจัยที่สำคัญมากที่สุดในการดำรงชีวิต',
    choices: [
      {
        text: 'บทบาทหน้าที่',
        score: {
          president: 12,
          police: 9,
          lawyer: 0
        }
      },
      {
        text: 'สิทธิเสรีภาพ',
        score: {
          president: 0,
          police: 9,
          lawyer: 9
        }
      },
      {
        text: 'กฎหมาย',
        score: {
          president: 0,
          police: 9,
          lawyer: 9
        }
      },
      {
        text: 'วัฒนธรรม',
        score: {
          president: 12,
          police: 0,
          lawyer: 9
        }
      }
    ]
  }
]
