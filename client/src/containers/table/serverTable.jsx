import React, {useState, useEffect} from 'react'
import useTable from "./table";
import serverData from "./serverData.json";
import TableSearch from "./search"
export default function ServerTable() {
    const [page, setPage] = useState(4)
    const [perPage, setPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(0)
    const [totalResults, setTotalReults] = useState(0)
    const [result, setResult] = useState([]);
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState({
        fieldName : 'first_name',
        orderBy : false
    })
    const header = [
        {
            id : "first_name",
            title : "First Name"
        },
        {
            id : "last_name",
            title : "Last Name"
        },
        {
            id : "email",
            title : "Email"
        },
        {
            id : "gender",
            title : "Gender"
        }
    ]
    const {TableContainer, TableHead, TableBody, TablePagination} = useTable({header, result});
    const getResults = async (arg = false) => {
        console.log(`entered....`)
        console.log(filter)
        console.log(sort)
        console.log(page)
        if(arg) {
            if(arg.type == "sort"){
                await setSort({
                    fieldName : arg.sort.fieldName,
                    orderBy : arg.sort.orderBy
                })
                
            }
            else if(arg.type == "pagination"){
                await setPage(arg.page)
            }
        }
        let copyResult = [...serverData];
        setResult(copyResult.slice(parseInt(page)*parseInt(perPage)-parseInt(perPage), parseInt(page)*parseInt(perPage)))
        setTotalReults(1000);
        setTotalPages(1000/perPage);
    }
    useEffect(() => {
        getResults()
        return () => {
            
        }
    }, [filter,sort,page])
    return (
        <>
        <TableSearch filter={filter} setFilter={setFilter}></TableSearch>
        <hr/>
        <TableContainer>
            <TableHead header={header} sort= {sort} setSort={setSort}></TableHead>
            <TableBody>
                {
                    result.length ? result.map(obj => {
                        return (
                            <tr>
                                <td>{obj.first_name}</td>
                                <td>{obj.last_name}</td>
                                <td>{obj.email}</td>
                                <td>{obj.gender}</td>
                            </tr>
                        )
                    }) : null
                }
            </TableBody>
            <TablePagination page={page} totalResults={totalResults} totalPages={totalPages} setPage={setPage}></TablePagination>
        </TableContainer>
        </>
    )
}
