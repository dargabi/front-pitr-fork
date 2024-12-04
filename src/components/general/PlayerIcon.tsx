import Avatar from "./Avatar";

interface PlayerIconProps {
    profileIconId: number;
    name?: string;
    size?: number;
}

export default function PlayerIcon({ profileIconId, name='Player', size = 50 }: PlayerIconProps){
    return(
        <Avatar image={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/${profileIconId}.png`} name={name} size={size}/>
    )
}