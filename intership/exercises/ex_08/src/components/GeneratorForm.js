import { Button, Form, Span} from './StyledCM'
import products from './productsGenerator'
const GeneratorForm = (props) => {
    const {whenClicked,WhichBut,setWhenClicked,setWhichBut} = props
    return (
        <Form>

        <Span>
            {WhichBut === 2 ? 'Click Generate to Generate 20 random products' :
                WhichBut === 1 ?
                'Click Clear to delete products' :
                'Click Generate to Generate 20 random products and Click Clear to delete products'}
        </Span>
        <Button onClick={() => {
            setWhenClicked([...whenClicked, ...products()])
            setWhichBut(1)
        }}>Generate</Button>
        <Button onClick={() => {
            setWhenClicked([])
            setWhichBut(2)
        }} disabled={WhichBut === 0 ? true : WhichBut === 2 ? true : false}>Clear</Button>
        </Form>
        )
}
export default GeneratorForm