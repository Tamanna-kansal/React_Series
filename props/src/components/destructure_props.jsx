import React from "react";
const Destructure = props => {
    const { name, heroName } = props;
    return (
        <>
            <h1>{name} , {heroName}</h1>
        </>
    )
}

export default Destructure;