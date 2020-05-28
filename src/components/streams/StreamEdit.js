import React from 'react'
import { connect } from 'react-redux';
import streams from '../../apis/streams';
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
                    <h3>Edit a Stream</h3>
                    <StreamForm
                        initialValues={{
                            title: this.props.stream.title,
                            description: this.props.stream.description,
                           
                        }}
                        onSubmit={this.onSubmit} />
                </div>
            </div>
        );
    }
};  

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);