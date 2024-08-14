import React, { useRef, useState } from 'react'
export default function Form() {
    const inputRef = useRef(null);
    const [s, setS] = useState(0);
    return (
        <>
            <div className="App">
                <input type="text" ref={inputRef} onChange={() => setS(s + 1)} />
                <p >value : {inputRef.current ? inputRef.current.value : ""}  </p>
            </div>
        </>
    )
}