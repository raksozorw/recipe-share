import React from "react";
import { connect } from "react-redux";
import { fetchRecipe } from "../../actions";

class RecipeShow extends React.Component {
  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.id);
  }

  render() {
    if (this.props.recipe) {
      const {
        title,
        description,
        ingredients,
        methods,
        fileName,
      } = this.props.recipe;
      return (
        <div className='recipe-show'>
          <h1>{title}</h1>
          <div className=''>
            <h4>{description}</h4>
            <div className='wrapper container'>
              <div image-column>
                {fileName ? (
                  <img
                    src={`https://storage.googleapis.com/recipe-share-images/${fileName}`}
                    className='recipe-image rounded img-fluid'
                    alt={fileName}
                  />
                ) : (
                  <i className=''></i>
                )}
              </div>
              <div className='text-column'>
                <div className='ingredients-and-steps'>
                  <h5>Ingredients:</h5>
                  <div>
                    {ingredients &&
                      ingredients.map((ingredient) => {
                        return <li>{ingredient}</li>;
                      })}
                  </div>
                </div>
                <div className='ingredients-and-steps'>
                  <h5>Steps:</h5>
                  {methods &&
                    methods.map((method) => {
                      return <li>{method}</li>;
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { recipe: state.recipes[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchRecipe })(RecipeShow);

// Am I crazy or did I just realize that componentDidMount and fetchRecipe literally just do something to......
// fuck. Ok. We don't have state for everything when the app loads. We have initial state like empty arrays, etc.
//Whenever we need to access something from our database, we make a network request to it, it's return is then
// given to the Redux store which turns it into state!!! Then we map state out of the Redux store into our components, as props
