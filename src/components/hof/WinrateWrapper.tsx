import Winrate from "../player/Winrate";

export default function WinrateWrapper({...props}: {wins: number, losses: number, winrate: number}){
    return(
        <div className="w-1-4">
            <Winrate wins={props.wins} losses={props.losses} winrate={props.winrate}/>
        </div>        
    )
}