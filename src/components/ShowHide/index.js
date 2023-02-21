import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  displayFirstName = () => {
    const {showFirstName} = this.state
    this.setState({showFirstName: !showFirstName})
  }

  displayLastName = () => {
    const {showLastName} = this.state
    this.setState({showLastName: !showLastName})
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="app-container">
        <div>
          <h1 className="heading">Show/Hide</h1>
          <div className="container">
            <div className="buttons-container">
              <button
                type="button"
                className="button"
                onClick={this.displayFirstName}
              >
                Show/Hide FirstName
              </button>
              {showFirstName ? (
                <div className="name">
                  <p className="text">Joe</p>
                </div>
              ) : null}
            </div>

            <div className="buttons-container">
              <button
                type="button"
                className="button"
                onClick={this.displayLastName}
              >
                Show/Hide LastName
              </button>
              {showLastName ? (
                <div className="name">
                  <p className="text">Jonas</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
