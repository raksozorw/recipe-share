import React from 'react'
import { Field } from 'redux-form';

const renderMethod = ({ fields },{ error }) => {
    
    const renderMultipleInputs = ({ input, label, meta }) => { 
      
        
        return (
            <div className="field">
                <input { ...input } autoComplete="off"></input>
                <br></br>
                </div>
        )
    };
        
 
        return <div className="field container">
            <label>Enter Method</label>
            <ol>
       
                {fields.map((method, index) =>
                    <li key={index}>
                        <div className="ui container grid">
                            <div className="ten wide column">
                                <Field name={method} component={renderMultipleInputs} label="Method"></Field>
                            </div>
                            <div className="two wide column">
                        <button className="ui button negative"
                            type="button"
                            title="Remove Step"
                                    onClick={() => fields.remove(index)}>Remove</button>
                                </div>
                            </div>

                    </li>
                )}
                {error && <li className="error">{error}</li>}
            </ol>
            <button className="ui button green" type="button" onClick={() => fields.push()}>Add New Method</button>
        </div>
    
}
 

export default renderMethod

