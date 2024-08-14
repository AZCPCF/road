import React, { useState } from 'react'
import Form from './components/Form'
import Form2 from './components/Form2'
const App = () => {
    const [SelectComponent, setSelectComponent] = useState(0)
    const styles = {
        formMargin: '10% auto',
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        formBorderRadius: '8px',
        boxShadow: '0px 0px 25px 0px blue',
        bg: "blue",
        color: "white",
        fSize: "20px",
        border: '2px solid black',
        borderRadius: "4px",
        margin: "10px",
        paddingTop: "20px",
        height: '25px'
    }
    return (
        <>
            <button onClick={() => setSelectComponent(1)} disabled={SelectComponent === 1 ? true : false}>ex_1</button>
            <button onClick={() => setSelectComponent(2)} disabled={SelectComponent === 2 ? true : false}>ex_2</button>
            {SelectComponent === 1 ? <Form /> : SelectComponent === 2 ? <Form2 {...styles} /> : null}
        </>
    )
}

export default App