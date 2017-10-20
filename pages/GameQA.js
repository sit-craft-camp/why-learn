import React from 'react'
import styled from 'styled-components'


const Page = styled.div`

display: flex;
align-items: center;
justify-content:space-around;
flex-direction:column;
min-height:100vh;`


const Question = styled.h2``
const Input = styled.button``
const Button = styled.button``


const GameQA =() =>(
    <Page>
       <Question>HelloText</Question>
       {[...Array(4)].map((_, index) => (
           <Input key={index}>Choice {index+1}</Input>
       ))}
       <Button>ตอบ</Button>
    </Page>
)

export default GameQA
