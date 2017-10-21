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
    desc:
      'เรียนไปเพื่อเปิดโลกทัศน์ เปิดทางเลือก และสร้างโอกาสในการเลือกทางเดินสำหรับอนาคตให้มากขึ้น ฝึกกระบวนการคิด และ แก้ปัญหาครับ คิดกลับไปกลับมาได้ หรือ คิดแก้ปัญหา 1 ปัญหาได้ในหลายๆวิธี มองสิ่งที่ใช้เเก้ปัญหาเป็นตัวแปรแล้วเอามาแก้ปัญหาชีวิตจริงครับ',
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
    desc:
      'สังคมโลกมีการเปลี่ยนแปลงอย่างรวดเร็วตลอดเวลา กลุ่มสาระการเรียนรู้สังคมศึกษา ศาสนา และวัฒนธรรม ช่วยให้ผู้เรียนมีความรู้ ความเข้าใจ ว่ามนุษย์ดำรงชีวิตอย่างไร ทั้งในฐานะปัจเจกบุคคล และการอยู่ร่วมกันในสังคม การปรับตัวตามสภาพแวดล้อม การจัดการทรัพยากรที่มีอยู่อย่างจำกัด',
    image: 'socialcolor',
    color: '#f27435'
  }
]

export const jobs = [
  {
    name: 'นายกรัฐมนตรี',
    desc:
      'นายกรัฐมนตรี เป็นตำแหน่งผู้นำของรัฐบาล เป็นตำแหน่งสูงสุด โดยมีพระมหากษัตริย์หรือประธานาธิบดีเป็นประมุขแห่งรัฐ บางประเทศยังต้องเลือกประธานาธิบดีแล้วแต่งตั้งนายกรัฐมนตรีหรือบางประเทศอาจจะให้กษัตริย์เป็นผู้แต่งตั้งก็ได้',
    image: '/static/president.png'
  },
  {
    name: 'ตำรวจไทย',
    desc:
      'อาชีพตำรวจเป็นอาชีพที่เกี่ยวข้องกับวิถีชีวิตความเป็นอยู่ของคนในสังคม เพื่อให้บ้านเมืองเกิดความสงบเรียบร้อย ค่อยรักษาความปลอดภัยให้กับผู้คนในสังคม ',
    image: '/static/police.png'
  },
  {
    name: 'ทนายความ',
    desc:
      'ทนายความ ผู้ทำงานเกี่ยวกับกฎหมาย ให้คำปรึกษาและให้บริการทางกฎหมายอื่นๆ รวมถึงการปฏิบัติงานทั่วๆไปเกี่ยวกับกฎหมาย เช่น การจัดทำเอกสารเกี่ยวกับกฎหมาย การว่าความคดีอาญา และคดีแพ่ง ',
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
