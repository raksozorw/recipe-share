import React from "react";
import { connect } from "react-redux";
// import recipes from '../../apis/recipes';
import { fetchRecipe, editRecipe } from "../../actions";
import RecipeForm from "./RecipeForm";

class RecipeEdit extends React.Component {
  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.id);

    return <div></div>;
  }

  onSubmit = (formValues) => {
    this.props.editRecipe(this.props.match.params.id, formValues);
  };

  render() {
    return !this.props.recipe ? (
      <div>loading</div>
    ) : (
      <div>
        <div className='create'>
          <h1>Edit Recipe</h1>
          <RecipeForm
            initialValues={{
              title: this.props.recipe.title,
              description: this.props.recipe.description,
              ingredients: this.props.recipe.ingredients,
              methods: this.props.recipe.methods,
              fileName: this.props.recipe.fileName,
            }}
            onSubmit={this.onSubmit}
            photo={
              this.props.recipe.fileName
                ? this.props.recipe.fileName
                : this.props.photo
            }
            fileName={this.props.recipe.fileName}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipe: state.recipes[ownProps.match.params.id],
    photo: state.recipes.photo,
  };
};

export default connect(mapStateToProps, { fetchRecipe, editRecipe })(
  RecipeEdit
);
