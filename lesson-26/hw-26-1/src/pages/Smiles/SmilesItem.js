export default function SmilesItem({smile, voteFor}) {
    return (
        <span className={'smile'}>
            <img
                src={require('../../assets/img/' + smile.img)}
                alt={smile.img}
                onClick={() => voteFor(smile.id)}
            />
            <span>
                {smile.votes}
            </span>
        </span>
    )
}
