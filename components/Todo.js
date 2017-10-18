import React, {Component} from 'react'

export default class Todo extends Component {
  state = {
    text: '',
    todos: ['Hello', 'World']
  }

  add = () => {
    this.setState({
      todos: [...this.state.todos, this.state.text]
    })
  }

  set = event => this.setState({text: event.target.value});

  render = () => (
    <div>
      <input value={this.state.text} onChange={this.set} />
      <button onClick={this.add}>ADD</button>
      {this.state.todos.map(todo => <div>{todo}</div>)}
    </div>
  )
}
