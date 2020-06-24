import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams, deleteStream } from '../../actions';
import RBModal from '../RBModal';
import history from '../../history';
import { Card, Button } from 'react-bootstrap';
import _ from 'lodash'


class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
        
    };


    renderAdmin(stream) {
        return stream.userId === this.props.currentUserId && (
            <div className="btn-group">
                
               
                
                    
                  
                
               <Link className="btn btn-outline-dark btn-block" onClick={() => {
                            history.push(`/streams/edit/${stream._id}`)
                            window.location.reload()
                        }}>Edit</Link>
                    
               <RBModal
                    title="Delete Stream"
                    description={`Are you sure you want to delete the recipe: ${stream.title}?`}
                    
                    actionData={() => {
                      
                        //in the action creator is the api callx
                        this.props.deleteStream(stream._id)
                        
                    }
                    }
                    onDismiss={() => history.push('/recipes')}
                    
                    
                    
                    ></RBModal>
        
                  
               
                

            </div>
        );
    };

    renderCreate() {
        return this.props.isSignedIn && <div style={{textAlign: 'right'}}>
            <Link to="/streams/new" className="btn btn-outline-dark">
                New Recipe
            </Link>
            </div>
    };

  
    renderList() {

        return this.props.streams.map(stream => {
            if (stream.title) { 
            return (
                <div className="recipe-card">
                    <Card key={stream._id} style={{ width: '18rem' }}>
                        <Link to={`/streams/${stream._id}`} className="link">
                            <Card.Img variant="top" src={stream.fileName ? require(`../../../public/uploads/${stream.fileName}`) : null} />
                        
                            <Card.Body className="">
                    
                                <Card.Title><h3>{stream.title}</h3></Card.Title>
                            
                                <Card.Text>
                                    {_.truncate(stream.description, { 'length': 60 })}
                                </Card.Text>
                                
                        
                            </Card.Body>
                        </Link>
                    
                        <div>{this.renderAdmin(stream)}</div>
                           
                    </Card>
                </div>



               
            )
            } else {
                return null;
        }
    })
    };

  
    

    render() {
      
        return (
            <div>
               
                <div className="recipe-list">
                  
                    <h1>Recipes</h1>
                    <div className="container">
                <div className="wrapper">
                    {this.renderList()}
                    
                </div>
                </div>
                
                </div>
                </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,
    } 
};

// object.values turns JS object into an array

export default connect(mapStateToProps, { fetchStreams, deleteStream, })(StreamList);



// <div className="list-group-item container-fluid" key={stream._id}>
                     

// <Link to={`/streams/${stream._id}`} className="link"> <h3 className="recipe">{stream.title}</h3> </Link>
// <div className="wrapper">
// <div className="grid-one">
// {stream.fileName && <img src={require(`../../../public/uploads/${stream.fileName}`)} className="img-fluid" alt={stream.fileName} />}
// </div>
//     <div className="grid-two info">
//     {stream.description}
//     <ul>
//         <li>Rating: ••••</li>
//         <li>Difficulty: ••</li>
//         <li>Something</li>
//     </ul>
// </div>





// </div>
// <div style={{textAlign: 'right'}}>{this.renderAdmin(stream)}</div>
// </div>