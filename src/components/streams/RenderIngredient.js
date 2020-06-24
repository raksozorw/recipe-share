import React from 'react'
import { Field } from 'redux-form';


const renderIngredient = ({ fields },{ input, meta, error }) => {
    
  const renderMultipleInputs = ({input, label, meta}) => { 
        return (
            <div>
                <input {...input} autoComplete="off" className="form-control"/>
                <br></br>
                </div>
        )
    };
        
    if (true) {
        return <div className="container render-field">
            <label>Enter Ingredients</label>
            <ul>
       
                {fields.map((ingredient, index) =>
                    <li key={index}>
                        <div className="container stack-list">
                            <div className="">
                                <Field name={ingredient} component={renderMultipleInputs} label="Ingredients"></Field>
                            </div>
                            
                            <div className="">
                        <button className="btn btn-danger"
                            type="button"
                            title="Remove Ingredient"
                                    onClick={() => fields.remove(index)}>Remove</button>
                                </div>
                            </div>

                    </li>
                )}
                {error && <li className="error">{error}</li>}
            </ul>
            <button className="btn btn-info" type="button" onClick={() => fields.push()}>Add New Ingredient</button>
        </div>
    } else {
        return <div>Error</div>
    }
}

export default renderIngredient