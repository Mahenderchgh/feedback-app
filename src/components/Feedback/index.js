// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isSelected: false}

  onClickEmoji = () => this.setState({isSelected: true})

  renderGetQuestionCard = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emojis-container">
            {emojis.map(eachEmoji => (
              <li key={eachEmoji.id}>
                <button
                  type="button"
                  className="emoji-button"
                  onClick={this.onClickEmoji}
                >
                  <img
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                    className="emoji"
                  />
                  <br />
                  <span className="emoji-name">{eachEmoji.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThankyouCard = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thankyou-text">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isSelected} = this.state

    return (
      <div className="app-container">
        <div className="feedback-card">
          {isSelected
            ? this.renderThankyouCard()
            : this.renderGetQuestionCard()}
        </div>
      </div>
    )
  }
}

export default Feedback
