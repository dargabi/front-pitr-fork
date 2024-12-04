interface ItemIconProps {
    name?: string;
    size?: number;

}


export default function ItemIcon({name, size = 25}: ItemIconProps){
    return(
        <>
            {name ? (
            <img className="rounded" src={name} alt={`${name}'s Icon`} style={{ width: size, height: size }}/>
            ) : (
            <div className="rounded bg-secondary-50" style={{ width: size, height: size }}></div>
            )}
        </>
    )
}