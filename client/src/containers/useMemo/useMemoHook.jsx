import React,{useState, useMemo} from 'react'
import {Form, ListGroup, Button, Col} from 'react-bootstrap'
export default function UseMemoHook() {
    const [currentValue, setCurrentValue] = useState(1)
    // const [multipleValues, setMultipleValues] = useState([])
    const [theme, setTheme] = useState('')
    const multipleValues = useMemo(() => handleMultiple(currentValue),[currentValue]);
    function handleMultiple(value) {
        console.log('ok..........')
        let multipliedValues = [];
        for(let i= 1; i<= 1000000000; i++){}
        for(let i= 1; i<= 10; i++)
            multipliedValues.push(i*value)
        //setMultipleValues([...multipliedValues])
        
        return multipliedValues;
    }
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridMultiplyAmt">
                    <Form.Label>Enter Multiply Amount</Form.Label>
                    <Form.Control type="text" onChange={(e) => setCurrentValue(e.target.value) } value={currentValue} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridMultiplyAmtBy10" className="mt-4">
                    <Button variant="outline-primary" onClick={(e) => setCurrentValue(10)} className="mr-2">Multiply By 10</Button>
                    <Button variant="outline-success" onClick={(e) => setTheme('primary')} className="mr-2">Primary Theme</Button>
                    <Button variant="outline-dark" onClick={(e) => setTheme('')}>Default Theme</Button>
                </Form.Group>
            </Form.Row>
            <hr/>
            <ListGroup>
                {currentValue && multipleValues.map((value,key) => (
                    <ListGroup.Item variant={theme}>{`${key+1} * ${currentValue} = ${value}`}</ListGroup.Item>
                ))}
            </ListGroup>
        </Form>
    )
}
