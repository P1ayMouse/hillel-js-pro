import React from "react";

import SmilesList from "./SmilesList.js";
import SmilesResults from "./SmilesResults.js";
import './SmilesPage.css'

class SmilesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            smiles: [
                {id: 1, img: 'tongue.png', votes: 0},
                {id: 2, img: 'smile.png', votes: 0},
                {id: 3, img: 'moustache.png', votes: 0},
                {id: 4, img: 'star.png', votes: 0},
                {id: 5, img: 'in-love.png', votes: 0},
            ],
            results: false,
            winners: []
        }

        this.state.smiles = JSON.parse(localStorage.getItem('smilesElements')) || this.state.smiles;
    }

    smilesSave = () => {
        localStorage.setItem("smilesElements", JSON.stringify(this.state.smiles));
    }

    componentDidMount() {
        this.smilesSave();
    }

    componentDidUpdate() {
        this.smilesSave();
    }

    voteFor = (id) => {
        this.setState({
            smiles: this.state.smiles.map(smile => {
                    return smile.id === id ? {...smile, votes: smile.votes += 1} : smile
                })
        })
    }

    resultsClear = () => {
        this.setState({
            smiles : this.state.smiles.map(smile => {
                return {...smile, votes: smile.votes = 0};
            }),
            results : false
        })
    }

    winnerCheck = () => {
        const maxVotes = Math.max(...this.state.smiles.map(smile => smile.votes));
        const winners = this.state.smiles.filter(smile => smile.votes === maxVotes);

        this.setState({
            results : true,
            winners: winners
        })
    }

    render() {
        return (
            <div>
                <h1>
                    Голосування за найкращий смайлик
                </h1>
                <SmilesList
                    smiles={this.state.smiles}
                    voteFor={this.voteFor}
                />

                <SmilesResults
                    resultsClear={this.resultsClear}
                    winnerCheck={this.winnerCheck}
                    results={this.state.results}
                    winners={this.state.winners}
                />
            </div>
        )
    }
}

export default SmilesPage;