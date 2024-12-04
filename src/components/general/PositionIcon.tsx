interface PositionIconProps {
    position: string | null;
    size?: number;
}

export default function PositionIcon({position, size = 50}: PositionIconProps){
    const defaultSrc = '/ranked-positions/Position_Grandmaster-Top.png';
    const src = position ? `/ranked-positions/Position_Grandmaster-${position}.png` : defaultSrc;
    const alt = position ? `${position} image` : 'Default image';

    return(
        <img src={src} alt={alt} height={size} width={size}/>
    )
}