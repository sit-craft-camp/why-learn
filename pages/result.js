import React from 'react'
import styled, {keyframes} from 'styled-components'
import Particle from 'react-particles-js'
import Ink from 'react-ink'
import Router from 'next/router'

import App from '../components/App'
import Button from '../components/Button'
import Jobs from '../components/Jobs'
import {jobs} from '../components/Landing'
import {Page, Card, particle, fadeIn} from '../components/Layout'

const Heading = styled.h1`
  margin: 0;
  font-size: 2.2em;
  line-height: 0.7em;
  font-weight: 300;
  font-family: Prompt, Roboto, Helvetica Neue, sans-serif;
  letter-spacing: 0.07em;
  color: #777;
`

const Desc = styled.div`
  margin: 0;
  font-size: 1.1em;
  line-height: 0.7em;
  font-weight: 300;
  font-family: Prompt, Roboto, Helvetica Neue, sans-serif;
  letter-spacing: 0.07em;
  color: #777;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);

  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  padding: 0em 3em;
`

const SLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 2.4em;
  margin-bottom: 1.8em;
  text-align: center;
`

const chosenJobs = jobs.filter(
  x => ['ทนายความ', 'นายกรัฐมนตรี'].indexOf(x.name) > -1
)

console.info(chosenJobs)

const desc = `คุณเป็นคนที่น่าตื่นเต้น แต่อารมณ์แปรปรวน เป็นผู้นำโดยธรรมชาติ
  ตัดสินใจเร็วแต่มันไม่ถูกเสมอไป เขาเห็นว่าคุณเป็นกล้าหาญและ ท้าทาย
  เป็นคนที่พร้อมที่จะทดลองอะไรก็ได้ เป็นคนที่กล้าเสี่ยงคว้าเอา โอกาส
  และสนุกกับการผจญภัย ผู้คนมักรู้สึกสนุกที่ได้อยู่กับคุณ
  เพราะความน่าตื่นเต้นที่คุณสื่อออกมา
`

const result = () => (
  <Page>
    <Particle {...particle} />
    <Container>
      <Card>
        <Heading>อาชีพที่คุณอาจสนใจ</Heading>
      </Card>
      <Jobs
        C={SLayout}
        data={chosenJobs}
        id
        why="ผลลัพธ์จากคำถามทายนิสัย"
        desc={desc}
        image="/static/socialcolor.png"
      />
      <Button onClick={() => Router.push('/game')}>
        <Ink />
        เลือกทำอาชีพนี้
      </Button>
    </Container>
  </Page>
)

export default App(result)
