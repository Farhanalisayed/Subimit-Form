import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstError: '',
    lastError: '',
    isSuccess: false,
  }

  submitNewForm = () => {
    this.setState({
      isSuccess: false,
    })
  }

  onSubmission = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({
        firstName: '',
        lastName: '',
        isSuccess: true,
      })
    } else {
      this.setState({
        firstError: 'Required',
        lastError: 'Required',
      })
    }
  }

  onSecondChange = event => {
    if (event.target.value === '') {
      this.setState({lastError: 'Required'})
    } else {
      this.setState({
        lastName: event.target.value,
        lastError: '',
      })
    }
  }

  onFirstChange = event => {
    if (event.target.value === '') {
      this.setState({firstError: 'Required'})
    } else {
      this.setState({
        firstName: event.target.value,
        firstError: '',
      })
    }
  }

  renderSuccess = () => {
    return (
      <div className="card">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p className="success-msg">Submitted Successfully</p>
        <button type="button" className="btn" onClick={this.submitNewForm}>
          Submit Another Response
        </button>
      </div>
    )
  }

  renderForm = () => {
    const {firstName, lastName, firstError, lastError} = this.state
    return (
      <form className="form" onSubmit={this.onSubmission}>
        <label htmlFor="first" className="label">
          FIRST NAME
        </label>
        <input
          value={firstName}
          type="text"
          onBlur={this.onFirstChange}
          placeholder="First Name"
          id="first"
          className="bar"
        />
        <p className="erronious">{firstError}</p>

        <label htmlFor="last" className="label">
          LAST NAME
        </label>
        <input
          value={lastName}
          type="text"
          onBlur={this.onSecondChange}
          placeholder="Last Name"
          id="last"
          className="bar"
        />
        <p className="erronious">{lastError}</p>

        <button className="btn" type="button">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isSuccess} = this.state
    return (
      <div className="the-container">
        <h1 className="heading">Registration</h1>
        {isSuccess ? this.renderSuccess() : this.renderForm()}
      </div>
    )
  }
}
export default RegistrationForm
