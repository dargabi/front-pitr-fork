interface ChampIconProps{
    name: string,
    size?: number,
}

export default function ChampIcon({name, size = 50, }: ChampIconProps){
    return(
        <img className="rounded" src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${name}.png`} alt={`${name}'s Icon`} height={size} width={size}/>
    )
}

// interface ChampIconProps {
//     name: string | null;
//     size?: number;
// }

// export default function ChampIcon({name, size = 50}: ChampIconProps){
//     const defaultSrc = '/path-to-default-image'; // replace with your actual default image path
//     const src = name ? `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${name}.png` : defaultSrc;
//     const alt = name ? `${name}'s Icon` : 'Default image';

//     return(
//         <img className="rounded" src={src} alt={alt} height={size} width={size}/>
//     )
// }