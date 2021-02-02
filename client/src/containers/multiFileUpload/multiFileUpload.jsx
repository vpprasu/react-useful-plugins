import React,{useState} from 'react'
import {Container,Row,Col,Form,ProgressBar,ListGroup,Button} from "react-bootstrap";
import axiosInstance from '../../axiosConfig';
export default function MultiFileUpload() {
    const [files, setFiles] = useState(null);
    const [fileInfo, setFileInfo] = useState([])
    const [progress, setProgress] = useState(0)
    const onChange = (e) => {
        setFiles(e.target.files);
    }
    const onSubmit = async (e) => {
        const updatedFiles = Array.from(files)
        let formData = new FormData();
        updatedFiles.map(file =>  formData.append('allFiles',file));
        try{
                const response = await axiosInstance.post("/upload/multi",formData,{
                    header : {
                        'Content-Type' : "multipart/form-data"
                    },
                    onUploadProgress : (e) => {
                        setProgress(parseInt(Math.round(e.loaded*100)/e.total))
                    }
                });
            setFileInfo(response.data)
        }
        catch(e){
            console.log(`********error**********`)
            console.log("Sorry, Something went wrong !!");
        }
        setInterval(() => {
            setProgress(0);
        }, 3000)
    }
    
    
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Form>
                        <Form.File 
                            id="multiFileUpload"
                            label="Upload Files"
                            multiple
                            onChange={onChange}
                            custom
                        />
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ProgressBar now={progress} className="my-3"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" onClick={onSubmit}>Submit</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup className="mt-3">
                        {fileInfo.map(eachFileInfo => {
                            if(eachFileInfo.result.message)
                                return <ListGroup.Item variant="danger">{eachFileInfo.result.message}</ListGroup.Item>
                            else
                                return <ListGroup.Item href={eachFileInfo.result.filePath} variant="success">{eachFileInfo.result.fileName}</ListGroup.Item>
                        })}
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        
    )
}
