import React from "react";

function Conditional() {
    const obj = {
        isloggedin: false
    }
    return (
        obj.isloggedin ? (
            <div>Welcome Vishwas</div>
        ) : (<div>Welcome Guest</div>)
    )
}

export default Conditional;