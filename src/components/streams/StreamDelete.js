import React from 'react'
import { connect } from 'react-redux';
import Modal from '../Modal'
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions'
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {

    componentDidMount() {
this.props.fetchStream(this.props.match.params.id)
    };

    renderActions = () => {
        const id = this.props.match.params.id;
        return (
            <div>
                <button onClick={() => this.props.deleteStream(id)} className="ui negative button">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </div>
        );
    };

    renderContent() {
        if (!this.props.stream) {
            return "Are you sure you want to delete this stream?"
        }

        return `Are you sure you want to delete the stream: ${this.props.stream.title}`
    }; 

    render() {
    

        return (
            <div>
                StreamDelete
                <Modal
                    header="Delete Stream"
                    description={this.renderContent()}
                    content={this.renderActions()}
                    route="/"
                    onDismiss={() => history.push('/')}

                />
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
return {stream: state.streams[ownProps.match.params.id], }
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);