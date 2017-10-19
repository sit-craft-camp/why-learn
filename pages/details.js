import React, {Component} from 'react'
import styled, {keyframes} from 'styled-components'
import {Container, Row, Col} from 'reactstrap'
import Link from 'next/link'

import App from '../components/App'

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

<<<<<<< Updated upstream:pages/details.js
const Detail = () => (
  <div>
    <div>
      <h1>Thief</h1>
    </div>
    <div>
      <h3>Steal</h3>
    </div>
=======
const Detail =() => (
 <div> 
    <div>
    <h1>job</h1>
  </div>
  <div>
    <h3>alldetail</h3>
>>>>>>> Stashed changes:pages/job.js
  </div>
)

const Nav = () => (
  <div>
    <button>NEXT</button>
    <button>PREV</button>
  </div>
)

<<<<<<< Updated upstream:pages/details.js
const Subjects = ({url: {query: {id}}}) => (
  <Page>
    <Row>
      <Col>
        <Character src="http://via.placeholder.com/500x600" />
      </Col>
      <Col>
        <Detail />
      </Col>
    </Row>
    <Nav />
  </Page>
)

export default App(Subjects)
=======
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
>>>>>>> Stashed changes:pages/job.js
