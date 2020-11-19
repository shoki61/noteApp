import React, { Component } from 'react';
import { LayoutAnimation } from 'react-native';
import { observer } from 'mobx-react';

import SignUpSecretNotes from './SignUpSecretNotes/SignUpSecretNotes';
import LoginSecretNotes from './LoginSecretNotes/LoginSecretNotes';

import helper from '../../controllers/helper';

class AuthSecretNotes extends Component{

    state={
        showHint : false,
        showError: false
    }

    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut();
    };

    showHindHandler = () => this.setState({ showHint: true });

    showErrorHandler = () => this.setState({ showError: false });

    loginFunc = () => {
        if (helper.loginPassword === helper.asyncNotePassword) {
            this.props.navigation.navigate('Secret_Notes');
            helper.loginPassword = '';
        }
        else this.setState({ showError: true });
    };

    render() {
        return (
            <>
                {
                    helper.asyncNotePassword !== null &&
                    <LoginSecretNotes
                        showHint={this.state.showHint}
                        showError={this.state.showError}
                        clickHind={this.showHindHandler}
                        clickError={this.showErrorHandler}
                        loginFunc={this.loginFunc}
                    />
                }
                {
                    helper.asyncNotePassword === null &&
                    <SignUpSecretNotes
                        navigate={() => this.props.navigation.navigate('Secret_Notes')}
                    />
                }
            </>
        );
    };
};

export default observer(AuthSecretNotes);