import React, { useEffect, useState } from 'react';
import './ScannerUploadForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImage, faCheck } from '@fortawesome/free-solid-svg-icons'

function ScannerUploadForm(props) {
    const [file, setFile] = useState(undefined);
    const [newSelection, setNewSelection] = useState(false);
    const [error, setError] = useState(undefined);
    const [data, setData] = useState(undefined);


    useEffect(() => {
        if (data !== undefined) {
            props.getData(data); 
            console.log(data)
        }
    }, [data])
    

    const selectFile = (e) => {
        console.log("in select file");
        setFile(undefined);
        setError(undefined);
        const validImage = validateImage(e.target.files[0]);
        if (validImage) {
            setFile(e.target.files[0]);
        } else {
            setError('Invalid File');
        }
    }

    const validateImage = (file) => {
        const allowedTypes = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];
        if (allowedTypes.includes(file.type)) {
            return true;
        } else {
            return false;
        }
    }

    const submit = async () => {
        const formData = new FormData();
        formData.append('file', file);
        console.log(file.type.split('/')[1]);
        formData.append('type', file.type.split('/')[1]);
            const response = await fetch(`http://127.0.0.1:8080/scanner`, {
                method: 'POST',
                body: formData
            });
            if (response.status === 200) {
                const dataObject = await response.json();
                setData(dataObject);
            } else {
                const dataObject = await response.json();
                setError(dataObject.message)
            }
    }



    return (
        <div className='container-scanner'>
            <div className='wrapper-scanner'>
                <div className='scanner-heading'>
                    Custom File Upload
                </div>
                <div className='image-select-section'>
                    {/* image */}
                    <div className={`imgUpload ${file!==undefined? 'animate-on-file-select-out': 'animate-on-file-select-in'}`}><FontAwesomeIcon icon={faFileImage}  /></div>
                    <div className={`imgUpload  ${file!==undefined? 'animate-tick': 'animate-tick-out'}`}><FontAwesomeIcon icon={faCheck}  /></div>
                    {/* name of image */}
                    <div className={`filename ${file!==undefined? '': 'invisible'}`}>{file!==undefined? file.name: 'ghost letters'}</div>
                    <div className='invalid-file-error'>{error!==undefined? `* ${error}`: 'Only pics allowed! (jpg, jpeg, gif, png)'}</div>
                    {/* choose file btn */}
                    <div className='image-input'>
                        <label htmlFor="image-input" className='btn-select'>Select file</label>
                        <input id='image-input' type="file" style={{display: 'none'}} onChange={(e) => selectFile(e)} />
                    </div>
                </div>
                <div className='submit-btn' onClick={submit}>
                    Submit
                </div>
            </div>
        </div>
    )
}

export default ScannerUploadForm