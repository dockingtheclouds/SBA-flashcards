import React from "react";

class Card extends React.Component {
    state = {
        showAnswer: false
    }

    handleCardFlip = () => {
        this.setState({showAnswer: !this.state.showAnswer})
    }

    render() {
        const {showAnswer} = this.state

        return (
            <div className="card" onClick={this.handleCardFlip}>
                {!showAnswer ? (
                    <div className={"card__content--front"}>
                        <span className="front">
                            {this.props.vocab}
                        </span>
                    </div>
                ) : (
                    <div className={"card__content--back"}>
                        <span className={"back"}>
                            {this.props.content}
                        </span>
                    </div>
                )}
            </div>
        );
    }
}

export default Card