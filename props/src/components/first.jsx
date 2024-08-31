import React from "react";
export const First = (props) => {
    return (
        <div>
            <h1>Hello {props.name},{props.heroName}</h1>
            {props.children}
        </div>
    )
}
