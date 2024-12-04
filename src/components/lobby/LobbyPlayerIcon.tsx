export default function LobbyPlayerIcon({state}:{ state: boolean}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="84" style={{ fill: state ? '#FF5931' : '#5B6663' }} viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg>
        )
}