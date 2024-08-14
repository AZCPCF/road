import { useState } from 'react'
import GeneratorFormCM from './GeneratorForm'
import CreateProducts from './CreateProducts'
const ShowProducts = () => {
    const [WhichBut, setWhichBut] = useState(0)
    const [whenClicked, setWhenClicked] = useState([])
    return (
        <>
            <GeneratorFormCM WhichBut={WhichBut} setWhichBut={setWhichBut} whenClicked={whenClicked} setWhenClicked={setWhenClicked} />
            {WhichBut === 1 ? <CreateProducts items={whenClicked} /> : null}
        </>
    )
}

export default ShowProducts