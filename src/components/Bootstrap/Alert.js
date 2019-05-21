import React from 'react'
import Alert from 'react-bootstrap/Alert';

class AlertDismissibleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  renderAlert(){
      return (
        <Alert variant={this.props.variant}
        onClick={(e) => this.handleDismiss(e)} dismissible>
          <p>
            {this.props.text}
          </p>
        </Alert>
      )
  }
  handleDismiss(e){
      this.setState({ show: false });
      this.props.onClick(e)

  }
  componentDidUpdate() {
   // when parent updates the state, it will register here
       if (this.props.show !== this.state.show) {
             this.setState({
               show: this.props.show
             });
        }
    }

  render() {
      return this.state.show ?
      <React.Fragment>
        {this.renderAlert()}
      </React.Fragment> : null
  }
}

export default AlertDismissibleExample
