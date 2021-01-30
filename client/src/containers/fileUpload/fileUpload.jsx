import React,{useState} from 'react'
import { Form, Button, Alert,ProgressBar } from 'react-bootstrap'
import axiosInstance from '../../axiosConfig'
export default function FileUpload() {
    const [file, setfile] = useState("");
    const [fileName, setfileName] = useState("Choose File Name...")
    const [progress, setprogress] = useState(0);
    const [msg, setmsg] = useState("")
    const [msgFlag, setmsgFlag] = useState("")
    const onChange = (e) => {
        setfile(e.target.files[0]);
        setfileName(e.target.files[0].name)
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('file',file)
        try{
            const res = await axiosInstance.post('upload', formData, {
                header : {
                    'Content-Type' : "multipart/form-data"
                },
                onUploadProgress : progressEvent => {
                    setprogress(parseInt(Math.round(progressEvent.loaded * 100)/ progressEvent.total))
                }
            });
            setmsg("File uploaded successfully")
            setmsgFlag("success");
            setTimeout(() => {
                setprogress(0)
            }, 10000);
        }
        catch(e){
            setTimeout(() => {
                setprogress(0)
            }, 10000);
            setmsg(e.response.data.msg)
            setmsgFlag("danger")
        }
        
    }
    return (
        <>
            {msg && <Alert variant={msgFlag}>
                {msg}
            </Alert>}
            
            <Form onSubmit={(e) => onSubmit(e)} className="mt-5">
                <Form.File 
                    id="custom-file"
                    label={fileName}
                    custom
                    onChange = {(e) => onChange(e)}
                    className="mb-5"
                />
                <ProgressBar animated now={progress} />
                <Button type="submit" variant="primary" className="mt-5">Submit</Button>
            </Form>
        </>
    )
}
