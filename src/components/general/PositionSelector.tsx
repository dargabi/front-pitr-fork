"use client"
import { useState } from 'react';
import PositionSelectorItem from "./PositionSelectorItem"

export default function PositionSelector(){
    const [showItems, setShowItems] = useState(false);
    const [position, setPosition] = useState("");

    function handleMouseDown(){
        setShowItems(!showItems);
    }

    return(
        <div className="relative p-4">
            {showItems && (
                <div className="absolute flex" style={{top: -5}}>
                    <PositionSelectorItem position={position} setPosition={setPosition} showItems={showItems} setShowItems={setShowItems} positionPlaceholder={"top"} />
                    <PositionSelectorItem position={position} setPosition={setPosition} showItems={showItems} setShowItems={setShowItems} positionPlaceholder={"jungle"} />
                    <PositionSelectorItem position={position} setPosition={setPosition} showItems={showItems} setShowItems={setShowItems} positionPlaceholder={"mid"} />
                    <PositionSelectorItem position={position} setPosition={setPosition} showItems={showItems} setShowItems={setShowItems} positionPlaceholder={"bottom"} />
                    <PositionSelectorItem position={position} setPosition={setPosition} showItems={showItems} setShowItems={setShowItems} positionPlaceholder={"support"} />
                    <PositionSelectorItem position={position} setPosition={setPosition} showItems={showItems} setShowItems={setShowItems} positionPlaceholder={"polivalent"} />
                </div>
            )}
            <button onMouseDown={handleMouseDown}>
                {position === "" ? "Select position" : position}
            </button>
        </div>
    )
}