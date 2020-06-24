import React, { useState } from 'react'
import {Button, Modal} from 'react-bootstrap'


const RBModal = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => {
        props.onDismiss()
        setShow(false);
    }
    const handleDelete = () => {
        props.onDismiss()
        setShow(false);
    }


    const handleShow = () => setShow(true);
  
    return (
        <>
            <Button variant="outline-danger" onClick={handleShow}>
                Delete
      </Button>
            
            
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            {props.description}

                        </div>
                        <div onClick={handleClose} className="btn-group">
                        <button onClick={props.actionData} className="btn btn-danger">Delete</button>
                        <button className="btn btn-secondary">Cancel</button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                       
                    </Modal.Footer>
                </Modal>
            
            
        </>
    );
}
  
export default RBModal;

//show needs to be global state, accessed fromdelete stream