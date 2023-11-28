import { isVisible } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";

function Button(props) {
    return (
            <button onClick={props.onClick}>
                {props.children}
            </button>
    )
}

function MenuBar({ isVisible }) {
    return (
        <div style={{visibility: isVisible ? "visible": "hidden",display: isVisible ? "flex": "none", flexDirection: "column", alignItems: "center"}}>
            <Button>
                Account
            </Button>
            <Button>
                Profile
            </Button>
            <Button>
                Support
            </Button>
        </div>
    ) 
}

export default function Menu() {
    const [isVisible, setIsVisible] = useState(false);

    function handleOnClick() {
        setIsVisible(!isVisible);
    }

    return (
        <div style={{display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
            <Button onClick={handleOnClick}>
                Menu
            </Button>
            <MenuBar isVisible={isVisible}/>
        </div>
    )
}