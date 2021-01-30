import React,{useState,useEffect} from 'react'
import {ListGroup} from 'react-bootstrap'
export default function ListMultiply({handleMultiple, theme, currentValue}) {
    const [multipleValues, setMultipleValues] = useState([])
    useEffect(() => {
        setMultipleValues(handleMultiple())
    }, [handleMultiple])
    return (
        <ListGroup>
        { multipleValues.map((value,key) => (
            <ListGroup.Item variant={theme}>{`${key+1} * ${currentValue} = ${value}`}</ListGroup.Item>
        ))}
        </ListGroup>
    )
}
