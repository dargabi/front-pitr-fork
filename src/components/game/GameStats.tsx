import Avatar from "../general/Avatar";
import ChampAvatar from "../general/ChampAvatar";
import ItemIcon from "@/components/general/ItemIcon"

type GameStatsProps = {
    className?: string;
};

export default function GameStats({ className }: GameStatsProps) {

    

    return(
        <div className={className}>
            <div className="flex align-center justify-between">
                <Avatar image={'https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/685.png'} name={'jutjuan'} size={25}/>
                <h4>jutjuan</h4>
                <ChampAvatar image="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Aatrox.png" name="Aatrox" level={10} size={25} />
                <div>
                    <div>3/0/11</div>
                    <div>
                        1.5:1 KDA
                    </div>
                </div>
            </div>
            <div className="hidden flex-column opacity-0 transition-all duration-200 ease-out">
                <div className="flex justify-between">
                    <div>
                        <div>Oro ganado: 12000</div>
                        <div>CS:2000</div>
                        <ul className="flex">
                            <li><ItemIcon name="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png" /></li>
                            <li><ItemIcon name="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png" /></li>
                            <li><ItemIcon name="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png" /></li>
                            <li><ItemIcon name="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png" /></li>
                            <li><ItemIcon name="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png" /></li>
                            <li><ItemIcon name="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png" /></li>
                            <li><ItemIcon name="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png" /></li>
                        </ul>
                    </div>
                    <div className="flex">
                        <div>
                            <div>FLASH</div>
                            <div>HEAL</div>
                        </div>
                        <div>
                            <div>RUNE1</div>
                            <div>RUNE2</div>
                        </div>
                    </div>
                </div>
                <div>
                    <meter value={70} max={100} />
                </div>
            </div>
        </div>    
    )
}