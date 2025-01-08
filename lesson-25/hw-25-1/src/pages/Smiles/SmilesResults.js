import React from "react";

class SmilesResults extends React.Component {
    render() {
        return (
            <div className={'results'}>
                <span>
                    <button className={'votes-show'} onClick={this.props.winnerCheck}>
                        Відобразити результати
                    </button>
                    <button className={'votes-clear'} onClick={this.props.resultsClear}>
                        Очистити результати
                    </button>
                </span>
                {this.props.results ?
                    <div>
                        <h1>
                            Результати голосування:
                        </h1>
                        <h2>
                            {this.props.winners.length > 1 ? 'Переможці:' : 'Переможець:'}
                        </h2>

                        {this.props.winners.map(smile => (
                            <img
                                src={require('../../assets/img/' + smile.img)}
                                alt={smile.img}
                            />
                        ))}
                        <p>
                            Кількість голосів: {this.props.winners[0].votes}
                        </p>
                    </div>
                    : null}
            </div>

        )
    }
}

export default SmilesResults;