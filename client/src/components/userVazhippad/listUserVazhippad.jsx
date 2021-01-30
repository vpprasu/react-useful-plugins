import React,{useEffect} from 'react'
import {Table, ButtonGroup, Button} from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";
import {listUserVazhippad} from "../../actions/userVazhippad";
export default function ListUserVazhippad() {
    const result = useSelector(state => { return state.userVazhippadReducer.listUserVazhippad})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listUserVazhippad())
        return () => {
        }
    }, [])
    console.log(result);
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Reference No.</th>
                <th>Name</th>
                <th>Vazhippad</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {result.length ? result.map(obj => {
                    return(<tr>
                        <td>1</td>
                        <td>{obj.name}</td>
                        <td>{obj.vazhippad}</td>
                        <td>{obj.date}</td>
                        <td>
                            <ButtonGroup aria-label="Basic example" size="sm">
                                <Button variant="secondary">Edit</Button>
                                <Button variant="secondary">Delete</Button>
                            </ButtonGroup>
                        </td>
                        </tr>)
                }) : <tr><td colSpan={4}></td></tr>}
                
            </tbody>
        </Table>
    )
}
