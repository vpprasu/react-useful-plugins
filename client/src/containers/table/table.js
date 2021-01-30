import React from 'react'
import {Table, ButtonGroup, Button} from "react-bootstrap";
export default function table() {
    const TableContainer = (props) => {
        return (<Table>{props.children}</Table>)
    }
    const TableHead = (props) => {
        const {sort, page, header, handleSearch, setSort} = props;
        return (<thead>
            <tr>
                {header.map(columnInfo => {
                    return <td key={columnInfo.id}>
                       <a onClick={() => setSort({ fieldName : columnInfo.id, orderBy : columnInfo.id == sort.fieldName ? !sort.orderBy : 0 })}> {columnInfo.title} </a>
                    </td>
                })}
            </tr>
        </thead>)
    }
    const TableBody = (props) => {
        return (<tbody>{props.children}</tbody>)
    }
    const TablePagination = (props) => {
        const { page, totalPages, totalResults, setPage} = props;
        let output = [];
        for(let i = page-4; i<=page; i++){
            if(i > 0)
            output.push(
                <Button variant="light" onClick={() => setPage(i)} active={page == i}>{i}</Button>
            )
        }
        for(let i = page+1; i<page+4; i++){
            if(i < totalPages)
            output.push(
                <Button variant="light" onClick={() => setPage(i)}  active={page == i}>{i}</Button>
            )
        }
        return (
            <tfoot>
                <tr>
                <ButtonGroup className="mr-2" aria-label="First group">
                    <Button variant="light" onClick={() => setPage(1)} >&#60;&#60;</Button>
                    {output}
                    <Button variant="light" onClick={() => setPage(totalPages)} >&#62;&#62;</Button>
                </ButtonGroup>
                </tr>
            </tfoot>
        )
    }
    return {
        TableContainer,
        TableHead,
        TableBody,
        TablePagination
    }

}
