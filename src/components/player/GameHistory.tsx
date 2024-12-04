import GameHistoryStats from "./GameHistoryStats";

export default function GameHistory(){
    return(
        <article className="bg-secondary grow-1 overflow-y-scroll">
            <h3>GAME HISTORY</h3>
            <ul className="w-full flex flex-column gap-5">
                <GameHistoryStats />
                <GameHistoryStats />
            </ul>
        </article>
    )
}
