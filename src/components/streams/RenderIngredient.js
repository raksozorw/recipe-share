import React from 'react'
import { Field } from 'redux-form';

const renderIngredient = ({ fields },{ input, meta, error }) => {
    
  const renderMultipleInputs = ({input, label, meta}) => { 
        return (
            <div className="field">
                <input {...input} autoComplete="off"/>
                <br></br>
                </div>
        )
    };
        
    if (true) {
        return <div className="field">
            <label>Enter Ingredients</label>
            <ul>
       
                {fields.map((ingredient, index) =>
                    <li key={index}>
                        <div className="ui grid">
                            <div className="ten wide column">
                                <Field name={ingredient} component={renderMultipleInputs} label="Ingredients"></Field>
                            </div>
                            
                            <div className="two wide column">
                        <button className="ui button negative"
                            type="button"
                            title="Remove Ingredient"
                                    onClick={() => fields.remove(index)}>Remove</button>
                                </div>
                            </div>

                    </li>
                )}
                {error && <li className="error">{error}</li>}
            </ul>
            <button className="ui button green" type="button" onClick={() => fields.push()}>Add New Ingredient</button>
        </div>
    } else {
        return <div>Error</div>
    }
}

export default renderIngredient