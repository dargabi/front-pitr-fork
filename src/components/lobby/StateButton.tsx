
//deberia estar en types.ts
export default function StateButton({lobbyState, setLobbyState}: {lobbyState: number, setLobbyState: (state: number) => void}) {
    const handleClick = () => {
        if (lobbyState === 0) {
            setLobbyState(1);
        } else if (lobbyState === 1) {
            setLobbyState(0);
        }
    };

    if (lobbyState === 2) {
        return null;
    }

    return(
        <button onClick={handleClick} className="bg-accent-100 text-5xl">
            {lobbyState === 0 ? 'Play' : 'Cancel'}
        </button>
    )
}