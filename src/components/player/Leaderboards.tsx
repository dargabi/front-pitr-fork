import Leaderboard from "./Leaderboard";

export default function Leaderboards(){
    return(
        <section className="bg-secondary">
            <h3>LEADERBOARDS</h3>
            <div>
                <div className="flex text-center">
                    <p className="w-1-5 text-left">Tournament Name</p>
                    <p className="w-1-5">%WR</p>
                    <p className="w-1-5">W</p>
                    <p className="w-1-5">L</p>
                    <p className="w-1-5 text-right">RANK</p>
                </div>
                <ul>
                    <Leaderboard />
                </ul>                
            </div>

        </section>
    )
}