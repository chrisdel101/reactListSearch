import React, { Component } from "react"
import Student from "./Student"
import Input from "./Input"
import Fuse from "fuse.js"
import cloneDeep from "lodash/cloneDeep"
import isEqual from "lodash/isEqual"
import Alert from "./Bootstrap/Alert"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: {},
      tagsKeys: {},
      alertShow: false,
      studentsObj: {},
      studentsObjCopy: {},
      studentsObjCopywTags: {},
      text: ""
    }
    this.handleKeyup = this.handleKeyup.bind(this)
    this.handleTags = this.handleTags.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  //  e has two inputs - e.event and e.id
  handleClick(e) {
    if (!e.event && e.target) {
      if (e.target.type === "button" && e.target.classList.contains("close")) {
        this.setState({
          alertShow: false
        })
      }
      // remove tag
    } else if (e.event && e.event.target.classList.contains("fa-times")) {
      this.removeTag(e.event, e.id)
      // remove student
    }
    if (e.event && e.event.target.classList.contains("fa-trash")) {
      this.removeStudent(e.id)
    }
  }
  handleKeyup(e) {
    let that = this
    let value = e.target.value
    // handle a cleared name search bar
    if (e.target.value === "" && e.target.classList.contains("search-name")) {
      resetNameSearch()
      this.setState({
        alertShow: false
      })
      return
      //handle a cleared tag search bar
    } else if (
      e.target.value === "" &&
      e.target.classList.contains("search-tag")
    ) {
      this.toggleAlertShow(Object.keys(this.state.studentsObjCopy), "tag")
      // handle if not tags exists and if tags exist
      if (Object.keys(this.state.studentsObjCopywTags).length) {
        this.setState({
          studentsObj: this.state.studentsObjCopywTags
        })
      } else if (Object.keys(this.state.studentsObjCopy).length) {
        this.setState({
          studentsObj: this.state.studentsObjCopy
        })
      } else {
        console.error("An error in the reseting of the tag search occured.")
      }
    }
    // search names, toggle alert on failure
    if (e.target.name === "search-name") {
      resetNameSearch()
      let result = this.fuseDebounce(
        value,
        Object.values(that.state.studentsObj),
        "lastName",
        "firstName"
      )
      this.toggleAlertShow(result, "name")
      that.setState({
        studentsArr: result
      })
      // search tags - use tags keys to get all matching students
    } else if (e.target.name === "search-tag") {
      // all tags with that key
      let searchResults = this.state.tagsKeys[value]
      // if search results return do this
      if (searchResults) {
        // loop over all tags - keys are the id - get relevant students
        let result = Object.keys(searchResults).map(id => {
          return this.state.studentsObjCopy[id]
        })
        this.toggleAlertShow(result, "tag")
        // addTags back to filtered students for display
        this.addTags(this.arrToObj(result), this.state.tags, "rebuild")
        // display only students with the proper tag
        this.setState({
          studentsObj: this.arrToObj(result)
        })

        // if no search results do this - clear out obj show blank screen
      } else if (e.target.value && !searchResults) {
        this.toggleAlertShow([], "tag")
        this.setState({ studentsObj: {} })
      }
    }
    // remove unrealted search results in name field
    function resetNameSearch() {
      that.setState({
        studentsObj: that.arrToObj(that.state.studentsArrCopy),
        studentsArr: that.state.studentsArrCopy
      })
    }
  }
  // removes students from list and display - NOT FULLY WORKING
  removeStudent(id) {
    let students = cloneDeep(this.state.studentsObj)
    delete students[id]
    let studentsArrCopy = [...this.state.studentsArr]
    studentsArrCopy.splice(id, 1)
    this.setState({
      studentsObj: students,
      studentsObjCopy: students,
      studentsArr: studentsArrCopy,
      studentsArrCopy: studentsArrCopy
    })
  }
  // set text for seach alert msgs
  setAlertText(type) {
    if (type === "tag") {
      return "There are no students with those tags."
    } else if (type === "name") {
      return "There are no students matching that name."
    }
  }
  // toggle state in child comp
  toggleAlertShow(arr, type) {
    if (!arr.length) {
      this.setState({
        alertShow: true,
        text: this.setAlertText(type)
      })
    } else if (arr.length) {
      this.setState({
        alertShow: false,
        text: this.setAlertText(type)
      })
    }
  }
  // search and debounce
  fuseDebounce(searchVal, arr) {
    let keys
    if (arguments[2] && arguments[3]) {
      keys = [arguments[2], arguments[3]]
    } else if (!arguments[3]) {
      keys = [arguments[2]]
    }
    var options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: keys
    }
    if (!searchVal) return
    var fuse = new Fuse(arr, options) // "list" is the item array
    var result = fuse.search(searchVal)
    return result
  }
  componentDidMount() {
    let that = this
    fetch("https://www.hatchways.io/api/assessment/students")
      .then(res => res.json())
      .then(res => {
        this.setState({
          studentsArr: res.students,
          studentsArrCopy: res.students.slice()
        })
        setTimeout(function() {
          that.setState({
            studentsObj: that.arrToObj(that.state.studentsArr),
            studentsObjCopy: cloneDeep(that.arrToObj(that.state.studentsArr))
          })
        }, 100)
      })
  }
  // convert arr to obj for storage
  arrToObj(arr) {
    let obj = {}
    arr.map(item => {
      return (obj[item.id] = item)
    })
    return obj
  }
  // gather tags from child
  handleTags(e) {
    // copy student obj
    let that = this

    // copy tags object
    let tagsObjCopy = cloneDeep(this.state.tags)
    // make tags obj
    if (!tagsObjCopy[e.studentId]) {
      tagsObjCopy[e.studentId] = {
        [e.tag.text]: e.tag.text
      }
    } else if (tagsObjCopy[e.studentId]) {
      tagsObjCopy[e.studentId][e.tag.text] = e.tag.text
    }

    setTimeout(function() {
      that.addTags(that.state.studentsObjCopy, tagsObjCopy, "build")
    }, 50)

    // make tagskeys obj
    let tagsKeysObjCopy = cloneDeep(this.state.tagsKeys)
    // // if no key and no id mathching id inside key
    if (!tagsKeysObjCopy[e.tag.text]) {
      tagsKeysObjCopy[e.tag.text] = {
        [e.studentId]: e.tag.text
      }
      // else if that tag, but not that id
    } else if (
      tagsKeysObjCopy[e.tag.text] &&
      !tagsKeysObjCopy[e.tag.text][e.studentId]
    ) {
      tagsKeysObjCopy[e.tag.text][e.studentId] = e.tag.text
      // don't allow duplicate tags
    } else if (tagsKeysObjCopy[e.tag.text][e.studentId]) {
      console.error("Cannot add identical tags to one object.")
    }
    this.setState({
      tagsKeys: tagsKeysObjCopy,
      tags: tagsObjCopy
    })
  }
  removeTag(e, id) {
    let tagText = e.target.parentElement.parentElement.innerText
    // clone tags objs
    let tagsObjCopy = cloneDeep(this.state.tags)
    let studentsObjCopy = cloneDeep(this.state.studentsObj)
    let student = studentsObjCopy[id]
    // delete from studentsObj and tags obj
    delete student.tags[tagText]
    delete tagsObjCopy[id][tagText]

    this.setState({
      studentsObj: studentsObjCopy,
      tags: tagsObjCopy
    })
  }
  // re-build students obj with proper tags included - build from tags obj
  addTags(studentsObj, tagsObj, type) {
    // settimeouts handle timing errors in displaying data
    let that = this
    // if tag is blank, set to previous obj and return
    if (!Object.keys(tagsObj).length) {
      setTimeout(function() {
        that.setState({
          studentsObj: studentsObj
        })
      })
      return
    }

    let studentsObjCopy = cloneDeep(studentsObj)
    // rebuild students with tags after tag search bar emptied
    Object.keys(tagsObj).forEach(tag => {
      if (!studentsObjCopy[tag]) return
      if (!studentsObjCopy[tag]["tags"]) {
        studentsObjCopy[tag]["tags"] = tagsObj[tag]
      } else if (studentsObjCopy[tag]["tags"]) {
        studentsObjCopy[tag]["tags"][tag] = tag
      }
    })
    // reset objWtags only on orignal build
    setTimeout(function() {
      if (type === "build") {
        that.setState({
          studentsObj: studentsObjCopy,
          studentsObjCopywTags: studentsObjCopy
        })
      } else if (type === "rebuild") {
        that.setState({
          studentsObj: studentsObjCopy
        })
      }
    })
  }
  // detect changes - use arr in search to get correct order, else obj
  renderSource() {
    // TODO NOTE:  //this would be removed in a future iteration of this app
    const arrs = isEqual(this.state.studentsArr, this.state.studentsArrCopy)
    if (!arrs) {
      return this.state.studentsArr
    } else {
      return Object.values(this.state.studentsObj)
    }
  }
  renderStudent(state) {
    if (!state.studentsObj) return
    return this.renderSource().map((student, i) => {
      return (
        <Student
          onKeyUp={this.handleTags}
          firstName={student.firstName}
          lastName={student.lastName}
          pic={student.pic}
          city={student.city}
          company={student.company}
          email={student.email}
          grades={student.grades}
          id={student.id}
          skill={student.skill}
          key={i}
          tags={student.tags ? student.tags : null}
          onClick={this.handleClick}
        />
      )
    })
  }

  render() {
    return (
      <div className="list-container">
        <div className="List">
          <Input
            onKeyUp={this.handleKeyup}
            instance="search-name"
            placeholder="Search by name"
          />
          <Input
            onKeyUp={this.handleKeyup}
            instance="search-tag"
            placeholder="Search by tag"
          />
          <div className="students-container">
            {this.renderStudent(this.state)}
          </div>
        </div>
        <Alert
          variant="secondary"
          text={this.state.text}
          show={this.state.alertShow}
          onClick={this.handleClick}
        />
      </div>
    )
  }
}

export default App
