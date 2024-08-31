import React from "react";
import { useState } from "react";
export const Message = () => {
    const [message, setmessage] = useState("Welcome");

    const msghandler = () => {
        setmessage("Thanks for Submitting");
    }
    return (
        <>
            <p>{message}</p>
            <button onClick={msghandler}>Click here</button>
        </>
    )
}