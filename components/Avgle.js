import React, {Component} from 'react'
import styled from 'react-emotion'
import axios from 'axios'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BlurImage = styled.img`filter: blur(100px);`

const Title = styled.h1`
  margin: 1em 0;
  color: #555;
  font-weight: 300;
  text-align: center;
`

export default class Avgle extends Component {
  state = {
    page: 0,
    categories: []
  }

  async componentWillMount() {
    const {data} = await axios.get('https://api.avgle.com/v1/videos/0')

    this.setState({categories: data.response.videos})
  }

  render = () => (
    <Root>
      {this.state.categories.map((item, index) => (
        <div key={index}>
          <Title>{item.title}</Title>

          <BlurImage src={item.preview_url} />
        </div>
      ))}
    </Root>
  )
}
