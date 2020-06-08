import React from 'react'
import { connect } from 'react-redux';
// import streams from '../../apis/streams';
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'


class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
        
        return <div></div>
    }

    onSubmit = (formValues) => {
       this.props.editStream(this.props.match.params.id, formValues)
    }
    
   

    render() {
        return (
            !this.props.stream ? <div>loading</div> : <div>
                <div>
                    <h3>Edit a Recipe</h3>
                    <StreamForm
                        initialValues={{
                            title: this.props.stream.title,
                            description: this.props.stream.description,
                            ingredients: this.props.stream.ingredients,
                            methods: this.props.stream.methods,
                            fileName: this.props.photo
                          
                           
                        }}
                        onSubmit={this.onSubmit} photo={this.props.photo}/>
                </div>
            </div>
        );
    }
};  

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id],
        photo: state.streams.photo
    }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);