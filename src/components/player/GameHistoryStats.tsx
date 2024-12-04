import ChampAvatar from "../general/ChampAvatar";
import ItemIcon from "../general/ItemIcon";

export default function GameHistoryStats() {
    return(
        // si es li debera recibir una key
        <li className={"flex w-full justify-between align-center"}>
            <div>
                <div>Defeat</div>
                <div>25:13</div>
            </div>
            <ChampAvatar image={"https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Aatrox.png"} level={10} name={'Aatrox'}/>
            <div>
                <div className="flex">
                    <div>0/0/0</div>
                    <div>3.5:1 KDA</div>
                    <div>200 CS</div>
                </div>
                <div className="flex">
                    <ItemIcon name="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png"/>
                    <ItemIcon name="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png"/>
                    <ItemIcon name="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png"/>
                    <ItemIcon name="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png"/>
                    <ItemIcon name="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png"/>
                    <ItemIcon name="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png"/>
                    <ItemIcon/>
                </div>
            </div>
            <div>Tournament name</div>
            <div>MVP</div>
        </li>
    )
}