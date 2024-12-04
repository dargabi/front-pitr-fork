import ChampIcon from "../general/ChampIcon";

interface PlayerChampsProps {
    mostPlayedChampions: string[];
}

export default function PlayerChamps({ mostPlayedChampions }: PlayerChampsProps){
    if (mostPlayedChampions.length === 0) {
        return <p>No data</p>;
    }
    return(
        <div className="flex justify-between">
            {mostPlayedChampions.map((champ, index) => (
                <ChampIcon key={index} name={champ} size={30}/>
            ))}
        </div>
    )
}