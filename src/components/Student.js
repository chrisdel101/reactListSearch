import React, { Component } from "react"
import Input from "./Input"
import Tag from "./Tag"
import Icon from "./Icon"
import ReactTooltip from "react-tooltip"

import _ from "lodash"

class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
      closed: true,
      showTest: false,
      tags: []
    }
    this.handleKeyup = _.debounce(this.handleKeyup.bind(this), 1000)
    this.handleClick = this.handleClick.bind(this)
  }
  // https://stackoverflow.com/a/51750950/5972531
  getAverage(props) {
    const average =
      props.grades.reduce((prev, curr) => parseInt(prev) + parseInt(curr)) /
      props.grades.length
    return average
  }
  // reset search bar after searching
  handleKeyup(e, id) {
    let val = e.target.value
    // kill if just white space
    if (!val.replace(/\s/g, "").length || val === "") {
      // https://stackoverflow.com/a/10262019/5972531
      return
    }
    let newTag = { text: val }
    this.props.onKeyUp({ event: e, tag: newTag, studentId: id })
  }
  // open close test scores
  handleClick(e, id) {
    if (
      e.target.classList.contains("fa-plus") ||
      e.target.classList.contains("fa-minus")
    ) {
      this.setState({
        showTest: !this.state.showTest,
        closed: !this.state.closed
      })
    } else if (e.target.classList.contains("fa-trash")) {
      this.props.onClick({ event: e, id: id })
    } else {
      this.props.onClick({ event: e, id: id })
    }
  }
  renderTags(id) {
    if (!this.props.tags) return
    let objs = Object.keys(this.props.tags)
    return (
      <div className="tag-container">
        {objs.map((obj, i) => {
          return (
            <Tag
              key={i}
              instance="addtag"
              text={obj}
              onClick={event => this.handleClick(event, id)}
            />
          )
        })}
      </div>
    )
  }

  renderDrawerIcons(id) {
    if (this.state.closed) {
      return (
        <React.Fragment>
          <Icon
            type="plus"
            tooltip="Open"
            onClick={event => this.handleClick(event, id)}
          />
          <Icon
            type="trash"
            tooltip="Delete"
            onClick={event => this.handleClick(event, id)}
          />
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <Icon
            type="minus"
            tooltip="Close"
            onClick={event => this.handleClick(event, id)}
          />
          <Icon
            type="trash"
            tooltip="Delete"
            onClick={event => this.handleClick(event, id)}
          />
        </React.Fragment>
      )
    }
  }
  renderMarkup() {
    return (
      <div className="Student">
        <div className="student-info-container">
          <div className="img-container">
            <img
              className="student-pic"
              src={this.props.pic}
              alt={`${this.props.firstName} ${this.props.lastName}`}
            />
          </div>
          <div className="info-container">
            <h1 className="student-name">
              {this.props.firstName.toUpperCase()}{" "}
              {this.props.lastName.toUpperCase()}
            </h1>
            <ul className="student-info">
              <li>Email: {this.props.email}</li>
              <li>Company: {this.props.company}</li>
              <li>Skill: {this.props.skill}</li>
              <li>Average: {`${this.getAverage(this.props)}%`}</li>
            </ul>
            {this.renderDrawerIcons(this.props.id)}
          </div>
        </div>
        <div
          className={`test-info-container ${
            !this.state.showTest ? "hide" : "show"
          }`}
        >
          <div className="test-container">
            <ul className="test-info">
              {this.props.grades.map((grade, i) => {
                return (
                  <li key={i}>
                    Test {i + 1}:&nbsp;&nbsp;&nbsp;&nbsp;{grade}%
                  </li>
                )
              })}
              {this.renderTags(this.props.id)}
              <Input
                instance="addtag"
                placeholder="Add a tag"
                onKeyUp={event => {
                  event.persist()
                  this.handleKeyup(event, this.props.id)
                }}
              />
            </ul>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <React.Fragment>
        <ReactTooltip />
        {this.renderMarkup()}
      </React.Fragment>
    )
  }
}

export default Student
