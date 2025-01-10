export default function SmilesResults({resultsClear, winnerCheck, results, winners}) {
    return (
        <div className={'results'}>
            <span>
                <button className={'votes-show'} onClick={winnerCheck}>
                    Відобразити результати
                </button>
                <button className={'votes-clear'} onClick={resultsClear}>
                    Очистити результати
                </button>
            </span>
            {results ?
                <div>
                    <h1>
                        Результати голосування:
                    </h1>
                    <h2>
                        {winners.length > 1 ? 'Переможці:' : 'Переможець:'}
                    </h2>
                    {winners.map(smile => (
                        <img
                            src={require('../../assets/img/' + smile.img)}
                            alt={smile.img}
                            key={smile.id}
                        />
                    ))}
                    <p>
                        Кількість голосів: {winners[0].votes}
                    </p>
                </div>
                : null}
        </div>
    )
}
