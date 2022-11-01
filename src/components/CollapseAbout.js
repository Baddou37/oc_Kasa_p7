import React, { useState, useRef, useEffect } from "react";

export default function Collapse({props}) {
    const ChevronDown = <i className="fa-solid fa-chevron-down"></i>;
    const ChevronUp = <i className="fa-solid fa-chevron-up"> </i>;
    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const toggleState = () => {
        setToggle(!toggle);
    };

    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, []);

    return (
        <div className="collapse">
            <div onClick={toggleState} className="collapse_visible">
                <h3>{props.title}</h3>
                <div className="collapse_icon"> 
                    {toggle ? ChevronUp : ChevronDown}
                </div>
            </div>

            <div
                ref={refHeight}
                className={
                    toggle ? "collapse_toggle animated" : "collapse_toggle"
                }
                style={{ height: toggle ? `${heightEl}` : "0px" }}
            >
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    );
}
