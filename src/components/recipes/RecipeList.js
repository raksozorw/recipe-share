import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRecipes, deleteRecipe } from "../../actions";
import RBModal from "../RBModal";
import history from "../../history";
import { Card, Button } from "react-bootstrap";
import _ from "lodash";

class RecipeList extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  renderAdmin(recipe) {
    return (
      recipe.userId === this.props.currentUserId && (
        <div className='btn-group'>
          <Link
            className='btn btn-outline-dark btn-block'
            onClick={() => {
              history.push(`/recipes/edit/${recipe._id}`);
              window.location.reload();
            }}
          >
            Edit
          </Link>

          <RBModal
            title='Delete Recipe'
            description={`Are you sure you want to delete the recipe: ${recipe.title}?`}
            actionData={() => {
              //in the action creator is the api callx
              this.props.deleteRecipe(recipe._id);
            }}
            onDismiss={() => history.push("/recipes")}
          ></RBModal>
        </div>
      )
    );
  }

  renderCreate() {
    return (
      this.props.isSignedIn && (
        <div style={{ textAlign: "right" }}>
          <Link to='/recipes/new' className='btn btn-outline-dark'>
            New Recipe
          </Link>
        </div>
      )
    );
  }

  renderList() {
    return this.props.recipes.map((recipe) => {
      if (recipe.title) {
        return (
          <div className='recipe-card'>
            <Card key={recipe._id} style={{ width: "18rem" }}>
              <Link to={`/recipes/${recipe._id}`} className='link'>
                <Card.Img
                  variant='top'
                  src={
                    recipe.fileName
                      ? `https://storage.googleapis.com/recipe-share-images/${recipe.fileName}`
                      : null
                  }
                />

                <Card.Body className=''>
                  <Card.Title>
                    <h3>{recipe.title}</h3>
                  </Card.Title>

                  <Card.Text>
                    {_.truncate(recipe.description, { length: 60 })}
                  </Card.Text>
                </Card.Body>
              </Link>

              <div>{this.renderAdmin(recipe)}</div>
            </Card>
          </div>
        );
      } else {
        return null;
      }
    });
  }

  render() {
    return (
      <div>
        <div className='recipe-list'>
          <h1>Recipes</h1>
          <div className='container'>
            <div className='wrapper'>{this.renderList()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: Object.values(state.recipes),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

// object.values turns JS object into an array

export default connect(mapStateToProps, { fetchRecipes, deleteRecipe })(
  RecipeList
);

// <div className="list-group-item container-fluid" key={recipe._id}>

// <Link to={`/recipes/${recipe._id}`} className="link"> <h3 className="recipe">{recipe.title}</h3> </Link>
// <div className="wrapper">
// <div className="grid-one">
// {recipe.fileName && <img src={require(`../../../public/uploads/${recipe.fileName}`)} className="img-fluid" alt={recipe.fileName} />}
// </div>
//     <div className="grid-two info">
//     {recipe.description}
//     <ul>
//         <li>Rating: ••••</li>
//         <li>Difficulty: ••</li>
//         <li>Something</li>
//     </ul>
// </div>

// </div>
// <div style={{textAlign: 'right'}}>{this.renderAdmin(recipe)}</div>
// </div>
