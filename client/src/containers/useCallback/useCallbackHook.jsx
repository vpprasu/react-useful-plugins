import React,{useState, useCallback} from 'react'
import {Form, Button, Col} from 'react-bootstrap'
import ListMultiply from './listMultiply'
export default function UseMemoHook() {
    const [currentValue, setCurrentValue] = useState(1)
    const [theme, setTheme] = useState('')
    const handleMultiple = useCallback( () => {
        console.log('ok..........')
        let multipliedValues = [];
        for(let i= 1; i<= 1000000000; i++){}
        for(let i= 1; i<= 10; i++)
            multipliedValues.push(i*currentValue)
        return multipliedValues;
    },[currentValue]);
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
            {currentValue && <ListMultiply handleMultiple= {handleMultiple} theme={theme} currentValue= {currentValue} />}
        </Form>
    )
}
