interface PositionSelectorProps {
    position: string;
    setPosition: (show: string) => void;
    showItems: boolean;
    setShowItems: (show: boolean) => void;
    positionPlaceholder: string;
}

export default function PositionSelectorItem(props: PositionSelectorProps){
    function handleMouseUp(){
        props.setShowItems(!props.showItems);
        props.setPosition(props.positionPlaceholder);
    }
    return(
        <button className="px-2" onMouseUp={handleMouseUp}>
            {props.positionPlaceholder}
        </button>
    )
}