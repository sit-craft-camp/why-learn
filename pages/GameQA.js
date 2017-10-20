import React from 'react'
import styled from 'styled-components'


const Page = styled.div`

display: flex;
align-items: center;
justify-content:space-around;
flex-direction:column;
min-height:100vh;
background-color:#b3ecff;`


const Question = styled.h2``
const Input = styled.button``
const Button = styled.button``

const choices = ['1.ไก่กับไข่อันไหนเกิดก่อน','B','C','D']

const GameQA =() =>(
    <Page>
       <Question>คำถามโลกแตก</Question>
       {choices.map((choice, index) => (
           <Input key={index}>{choice}</Input>
       ))}
       
    </Page>
)

export default GameQA
