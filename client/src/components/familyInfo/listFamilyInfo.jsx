import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {listFamilyInfo} from "../../actions/familyInfo"
import {Table, ButtonGroup, Button} from "react-bootstrap";
export default function ListFamilyInfo() {
    const dispatch = useDispatch();
    const result = useSelector(state => state.familyInfoReducer.listFamilyInfo)
    useEffect(() => {
        dispatch(listFamilyInfo())
        return () => {
            
        }
    }, [])
    return (
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th>Reference No.</th>
            <th>Name</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {result.length ? result.map(obj => {
                    return(<tr>
                        <td>1</td>
                        <td>{obj.name}</td>
                        <td>{obj.address}</td>
                        <td>
                            <ButtonGroup aria-label="Basic example" size="sm">
                                <Button variant="secondary">Edit</Button>
                                <Button variant="secondary">Delete</Button>
                            </ButtonGroup>
                        </td>
                        </tr>)
                }) : <tr><td colSpan={3}></td></tr>}
           
        </tbody>
    </Table>
    )
}
