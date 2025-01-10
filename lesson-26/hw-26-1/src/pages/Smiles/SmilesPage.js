import {useEffect, useState} from "react";

import SmilesList from "./SmilesList.js";
import SmilesResults from "./SmilesResults.js";
import './SmilesPage.css'

export default function SmilesPage() {
    const [smiles, setSmiles] = useState([
        {id: 1, img: 'tongue.png', votes: 0},
        {id: 2, img: 'smile.png', votes: 0},
        {id: 3, img: 'moustache.png', votes: 0},
        {id: 4, img: 'star.png', votes: 0},
        {id: 5, img: 'in-love.png', votes: 0},
    ]);
    const [results, setResults] = useState(false);
    const [winners, setWinners] = useState([]);

    useEffect(() => {
        setSmiles(JSON.parse(localStorage.getItem('smilesElements')));
    }, []);

    useEffect(() => {
        const smilesSave = () => {
            localStorage.setItem("smilesElements", JSON.stringify(smiles));
        }

        smilesSave();
    }, [smiles]);

    const voteFor = (id) => {
        setSmiles(
            smiles.map(smile => {
                return smile.id === id ? {...smile, votes: smile.votes += 1} : smile;
            })
        )
    }

    const resultsClear = () => {
        setSmiles(
            smiles.map(smile => {
                return {...smile, votes: smile.votes = 0};
            })
        )

        setResults(false)
    }

    const winnerCheck = () => {
        const maxVotes = Math.max(...smiles.map(smile => smile.votes));
        const winners = smiles.filter(smile => smile.votes === maxVotes);

        setResults(true)
        setWinners(winners);
    }

    return (
        <div>
            <h1>
                Голосування за найкращий смайлик
            </h1>
            <SmilesList
                smiles={smiles}
                voteFor={voteFor}
            />

            <SmilesResults
                resultsClear={resultsClear}
                winnerCheck={winnerCheck}
                results={results}
                winners={winners}
            />
        </div>
    )
}