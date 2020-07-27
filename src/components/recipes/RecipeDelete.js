//UNNECESSARY CODE NOW 

// import React from 'react'
// import { connect } from 'react-redux';
// import Modal from '../Modal'
// import RBModal from '../RBModal'
// import history from '../../history';
// import { fetchStream, deleteStream } from '../../actions'
// import { Link } from 'react-router-dom';

// class StreamDelete extends React.Component {

//     componentDidMount() {
//         this.props.fetchStream(this.props.match.params.id)
        
//     };

//     renderActions = () => {
      
//         const id = this.props.match.params.id;
//         if (this.props.stream) {
//             return (
          
//                 <div>
//                     <button onClick={() => {
                        
                        
//                         this.props.deleteStream(id)
                      
//                     }
//                     }
                    
//                         className="btn btn-danger">Delete</button>
//                     <Link to="/" className="btn btn-outline-secondary">Cancel</Link>
//                 </div>
//             );
//         } 
//     };

//     renderContent() {
//         if (!this.props.stream) {
//             return "Are you sure you want to delete this recipe?"
//         }

//         return `Are you sure you want to delete the recipe: ${this.props.stream.title}?`
//     }; 

//     render() {
    

//         return (
//             <div>
//                 StreamDelete
//                 {/* <Modal
//                     header="Delete Stream"
//                     description={this.renderContent()}
//                     content={this.renderActions()}
//                     route="/"
//                     onDismiss={() => history.push('/')}

//                 /> */}
//                 <RBModal
//                     title="Delete Stream"
//                     description={this.renderContent()}
//                     content={this.renderActions()}
//                     onDismiss={() => history.push('/')}
//                     />
//             </div>
//         )
//     }
// };

// const mapStateToProps = (state, ownProps) => {
// return {stream: state.streams[ownProps.match.params.id], }
// };

// export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);