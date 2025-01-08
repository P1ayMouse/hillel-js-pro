import React from "react";

class SmilesItem extends React.Component {
    render() {
        return (
            <span className={'smile'}>
                <img
                    src={require('../../assets/img/' + this.props.smile.img)}
                    alt={this.props.smile.img}
                    onClick={() => this.props.voteFor(this.props.smile.id)}
                />
                <span>
                    {this.props.smile.votes}
                </span>
            </span>
        )
    }
}

export default SmilesItem;