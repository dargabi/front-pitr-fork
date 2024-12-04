interface RankingSelectProps {
    selection: string;
    setSelection: (show: string) => void;
}

export default function RankingSelect({ selection, setSelection }: RankingSelectProps){
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelection(event.target.value);
    };

    return(
        <select onChange={handleChange}>
            <option value="score">POINTS</option>
            {/* <option value="rank">RANK</option> */}
            <option value="wins">WINS</option>
            <option value="losses">LOSSES</option>
            <option value="kda">KDA</option>
        </select>
    )
}