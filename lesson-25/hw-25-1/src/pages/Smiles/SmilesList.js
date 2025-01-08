import React from "react";

import SmilesItem from "./SmilesItem.js";

class SmilesList extends React.Component {
    render() {
        return (
            <div className={'smiles-list'}>
                {this.props.smiles.map(smile => (
                    <SmilesItem
                        key={smile.id}
                        smile={smile}
                        voteFor={this.props.voteFor}
                    />
                ))}
            </div>
        )
    }
}

export default SmilesList;