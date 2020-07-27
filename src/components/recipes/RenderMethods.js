import React from 'react'
import { Field } from 'redux-form';

const renderMethod = ({ fields },{ error }) => {
    
    const renderMultipleInputs = ({ input, label, meta }) => { 
      
        
        return (
            <div className="">
                <input { ...input } autoComplete="off" className="form-control"></input>
                <br></br>
                </div>
        )
    };
        
 
        return <div className="container render-field">
            <label>Enter Method</label>
            <ol>
       
                {fields.map((method, index) =>
                    <li key={index}>
                        <div className="stack-list">
                            <div className="">
                                <Field name={method} component={renderMultipleInputs} label="Method"></Field>
                            </div>
                            <div className="">
                        <button className="btn btn-danger"
                            type="button"
                            title="Remove Step"
                                    onClick={() => fields.remove(index)}>Remove</button>
                                </div>
                            </div>

                    </li>
                )}
                {error && <li className="error">{error}</li>}
            </ol>
            <button className="btn btn-info" type="button" onClick={() => fields.push()}>Add New Method</button>
        </div>
    
}
 

export default renderMethod

