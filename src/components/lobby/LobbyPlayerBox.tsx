export default function LobbyPlayerBox({state, orientation}:{ state: boolean, orientation: string}){
    return (
        <div className={`bg-secondary text-primary-100 h-full flex align-center ${state ? 'w-full' : 'w-0per'} ${orientation === "right" ? '' : 'flex-row-reverse'}`}>
            player name
        </div>
    );
}