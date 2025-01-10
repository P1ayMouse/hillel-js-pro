import SmilesItem from "./SmilesItem.js";

export default function SmilesList({smiles, voteFor}) {
    return (
        <div className={'smiles-list'}>
            {smiles.map(smile => (
                <SmilesItem
                    key={smile.id}
                    smile={smile}
                    voteFor={voteFor}
                />
            ))}
        </div>
    )
}
