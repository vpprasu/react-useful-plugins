import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Table, ButtonGroup, Button} from "react-bootstrap";
import {listVazhippad} from "../../actions/vazhippad";
import axiosInstance from "../../axiosConfig";
export default function ListVazhippad() {
    const dispatch = useDispatch()
    const result = useSelector(state => state.vazhippadReducer.listVazhippad);
    useEffect(() => {
        dispatch(listVazhippad())
        return () => {
        }
    }, [])
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Reference No.</th>
                <th>Vazhippad Name</th>
                <th>Price</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {result.length ? result.map(obj => {
                    return (<tr>
                    <td>1</td>
                    <td>{obj.name}</td>
                    <td>{obj.price}</td>
                    <td>
                        <ButtonGroup aria-label="Basic example" size="sm">
                            <Button variant="secondary">Edit</Button>
                            <Button variant="secondary">Delete</Button>
                        </ButtonGroup>
                    </td>
                    </tr>)
                }): <tr><td colSpan={4}></td></tr>}
                
            </tbody>
        </Table>
    )
}
