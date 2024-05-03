"use client";

import { useState} from "react"

export default function example(props) {

    const [nameofvariable, setNameofVariable] = useState("hello");

    return (
        <>
            <input> onChange={(e) => setNameOfVariable<(e.target.value)}</input>
            <h1>{nameofvariable}</h1>
        </>
    );
};