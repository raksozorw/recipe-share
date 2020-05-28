import React from 'react'
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component{

    componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
}


    render() {

        if (this.props.stream) {
            const { title, description } = this.props.stream;
            return <div>
        <div>
                    <h1>{title}</h1> 
                    <h5>{description}</h5>
                </div>
            </div>
        } else {
            return <div>Loading...</div>
        }
    };
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);

// Am I crazy or did I just realize that componentDidMount and fetchStream literally just do something to......
// fuck. Ok. We don't have state for everything when the app loads. We have initial state like empty arrays, etc.
//Whenever we need to access something from our database, we make a network request to it, it's return is then 
// given to the Redux store which turns it into state!!! Then we map state out of the Redux store into our components, as props