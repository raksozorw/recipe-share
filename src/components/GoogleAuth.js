import React from 'react'
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';


class GoogleAuth extends React.Component {
    

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '258485618847-e19ovful0e37mpkvu19nt1epskkj8el6.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    };



    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut()
        }
    };

    onSignInClick = () => {
        this.auth.signIn()
    };

    onSignOutClick = () => {
        this.auth.signOut()
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return <div>Checking auth...</div>
        }
            else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="btn btn-outline-light">
                    <i className="">
                    </i> Sign Out
                </button>
            )
        } else {
            return (<button onClick={this.onSignInClick} className="btn btn-outline-light">
            <i className="">
            </i> Sign In With Google
        </button>)
            }
    }


    render() {
        return <div>
           {this.renderAuthButton()}
        </div>
    }
};

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);








// NO REDUX SUPER EASY GOOGLE AUTH CODE!


// import React from 'react'

// class GoogleAuth extends React.Component {
//     state = { isSignedIn: null };

//     componentDidMount() {
//         window.gapi.load('client:auth2', () => {
//             window.gapi.client.init({
//                 clientId: '258485618847-e19ovful0e37mpkvu19nt1epskkj8el6.apps.googleusercontent.com',
//                 scope: 'email'
//             }).then(() => {
//                 this.auth = window.gapi.auth2.getAuthInstance();
//                 this.setState({ isSignedIn: this.auth.isSignedIn.get() })
//                 this.auth.isSignedIn.listen(this.onAuthChange);
//             });
//         });
//     };

//     onAuthChange = () => {
//         this.setState({ isSignedIn: this.auth.isSignedIn.get() });
//     };

//     onSignInClick = () => {
//         this.auth.signIn()
//     };

//     onSignOutClick = () => {
//         this.auth.signOut()
//     };

//     renderAuthButton() {
//         if (this.state.isSignedIn === null) {
//             return <div>Checking auth...</div>
//         }
//             else if (this.state.isSignedIn) {
//             return (
//                 <button onClick={this.onSignOutClick} className="ui red google button">
//                     <i className="google icon">
//                     </i> Sign Out
//                 </button>
//             )
//         } else {
//             return (<button onClick={this.onSignInClick} className="ui red google button">
//             <i className="google icon">
//             </i> Sign In With Google
//         </button>)
//             }
//     }


//     render() {
//         return <div>
//            {this.renderAuthButton()}
//         </div>
//     }
// };

// export default GoogleAuth;