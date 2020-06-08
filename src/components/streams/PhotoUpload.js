import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import streams from '../../apis/streams'
import { uploadPhoto } from '../../actions'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function PhotoUpload() {

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState('Choose File')
    const [uploadedFile, setUploadedFile] = useState()

    const dispatch = useDispatch()



    // const test = 3
  



    const handleChange = (e) => {
      
        setFile(e.target.files[0])
        e.target.files[0].name && setFileName(e.target.files[0].name)
        

}

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file)
        dispatch(uploadPhoto(fileName))

        try {
            const res = await streams.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }

            });
            const { fileName, filePath } = res.data;
            setUploadedFile({ fileName, filePath })
            
            

        } catch (err) {
            if (err.response.status === 500) {
                console.log(err.response)
            } else {
                console.log(err.response.data.msg)
            }
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <div className="">
                        <input type="file" className="ui form small" id="" onChange={handleChange}></input>
                    </div>
                    <div className="">
                        <button type="submit" className="ui button green" id="">Upload</button>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </form>
            {uploadedFile ? <div className="row">
                
                <img style={{width: '50%'}} src={uploadedFile.filePath} alt="your upload"></img>

            </div> : <div></div>}
        </div>
    );
}
