import { useRef } from "react";
export default function Form() {
  const inputRef = useRef();
  return (
    <>
      <input
      style={{width:'300px',backgroundColor:'#e9e9ed'}}
        type="text"
        onInput={(e) => (inputRef.current.innerHTML = e.target.value)}
      />
      <p>
        value : <span ref={inputRef}>{inputRef?.current?.innerHTML}</span>
      </p>
    </>
  );
}
