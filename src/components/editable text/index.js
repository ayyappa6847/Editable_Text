import {Component} from 'react'
import './index.css'

class Editable extends Component {
  state = {
    onAddition: true,
    text: '',
  }

  onChangeInput = event => {
    this.setState({text: event.target.value})
  }

  onAdd = () => {
    this.setState(prevState => ({onAddition: !prevState.onAddition}))
  }

  renderInput = () => {
    const {text} = this.state
    return (
      <div className="inputBox">
        <input type="text" onChange={this.onChangeInput} value={text} />
        <button type="button" className="button" onClick={this.onAdd}>
          Save
        </button>
      </div>
    )
  }

  changeAddition = () => {
    this.setState(prevState => ({onAddition: !prevState.onAddition}))
  }

  renderOutput = () => {
    const {text} = this.state
    return (
      <div className="text-container">
        <p className="text">{text}</p>
        <button type="button" onClick={this.changeAddition}>
          EDIT
        </button>
      </div>
    )
  }

  render() {
    const {onAddition} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-box">
            {onAddition ? this.renderInput() : this.renderOutput()}
          </div>
        </div>
      </div>
    )
  }
}

export default Editable
