import React, {Component} from 'react'
import styled, {keyframes} from 'styled-components'
import {Container, Row, Col} from 'reactstrap'
import Link from 'next/link'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Character = styled.img`
height: 100%;
width: 50%;

`

const Detail =() => (
 <div> 
    <div>
    <h1>job</h1>
  </div>
  <div>
    <h3>alldetail</h3>
  </div>
</div>
)

const Nav = () => (
  <div>
    <button>NEXT</button>
    <button>PREV</button>
  </div>
)

export default class Job extends Component {
 state={

 }
  render() {
    return (
      <Page>
          <Row>
          <Col>
              <Character src='http://via.placeholder.com/500x600' />
              
          </Col>
          <Col>
              <Detail />
          </Col> 
          </Row>
    
          
          <Nav />
      </Page>
      )
  } 
}