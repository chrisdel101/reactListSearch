import React, { Component } from "react"
import { DebounceInput } from "react-debounce-input"

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      active: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleFocus(event){
      this.setState({active: true})
  }
  handleBlur(event){
      this.setState({active: false})
  }
  renderInput() {
    if (this.props.instance !== "addtag") {
      return (
        <div className={`Input ${this.props.instance}-outer`}>
          <input
            name={this.props.instance}
            className={`${this.props.instance} ${this.state.active ? 'active' : ''}`}
            type="text"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            onKeyUp={this.props.onKeyUp}
            placeholder={this.props.placeholder}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        </div>
      )
    } else if (this.props.instance === "addtag") {
      return (
        <div className={`Input ${this.props.instance}-outer`}>
          <DebounceInput
            onKeyUp={this.props.onKeyUp}
            placeholder={this.props.placeholder}
            name={this.props.instance}
            className={this.props.instance}
            minLength={2}
            debounceTimeout={700}
            onChange={event => this.setState({ value: event.target.value })}
          />
        </div>
      )
    }
  }

  render() {
    return <React.Fragment>{this.renderInput()}</React.Fragment>
  }
}

export default Input
