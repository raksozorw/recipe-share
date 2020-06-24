import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router';
import streams from '../../apis/streams'
import { uploadPhoto } from '../../actions'
import history from '../../history';




export default function PhotoUpload(props) {

    const [file, setFile] = useState();
    // const [fileName, setFileName] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState();

    let { id } = useParams()
    

    const dispatch = useDispatch()



    // const test = 3
  



    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files[0].size > 6097152) {
            alert("Please choose a file smaller than 6MB.")
           window.location.reload()
}
        setFile(e.target.files[0])
        // e.target.files[0].name && setFileName(e.target.files[0].name)
        

    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file)

        try {
            const res = await streams.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }

            });
            const { newFileName, filePath } = res.data;
            setUploadedFile({ newFileName, filePath })
            dispatch(uploadPhoto(res.data.fileName))
            console.log(res.data)
            
            
            

        } catch (err) {
            if (err.response.status === 500) {
                console.log(err.response)
            } else {
                console.log(err.response.data.msg)
            }
        }
    }
    


    const photoLogic = () => {
        if (props.photo) {
            return <div className="existing-image container-fluid">
                
                <img className="the-image" src={require(`../../../public/uploads/${props.photo}`)} alt="your upload"></img>
                <button className="btn btn-dark image-button" onClick={() => {
                    history.push(`/streams/editphoto/${id}`)
                    window.location.reload()
                }}>Change Photo?</button>
            </div>
        } else if (uploadedFile) {
            return <img style={{ width: '50%' }} src={uploadedFile.filePath} alt="your upload"></img>
        } else {
            return <div>
                  <h4>Upload a photo:</h4>
        
       
        <form className="photo-form">
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <input type="file" className="file-input" accept="image/*" label="Choose a file." id="" onChange={handleChange}></input>
                    </div>
                
                    {
                        file && <div className="">
                        <button type="submit" onClick={handleSubmit} className="btn btn-outline-dark" id="">Upload</button>
                        </div>
                    }
                    <div>
                    
                    </div>
                </div>
            </form>
            </div>
    }
}

    return (
        <div>
          
            <div className="">
                {photoLogic()}

                </div>
        </div>
    );
}
