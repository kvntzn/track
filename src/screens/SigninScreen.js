import React, { useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context } from '../context/AuthContext'

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(Context);

    return (
        <KeyboardAvoidingView>
            <ScrollView style={styles.contentContainerStyle}>
                <View style={styles.container}>
                    <NavigationEvents 
                        onWillFocus={clearErrorMessage}
                        onWillBlur={clearErrorMessage}
                    />
                    <AuthForm
                        headerText="Sign In to Your Account"
                        errorMessage={state.errorMessage}
                        submitButtonText="Sign In"
                        onSubmit={signin}
                    />
                    <NavLink
                        text="Don't have an account? Sign up instead."
                        routeName="Signup"
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    },
    contentContainerStyle: {
        paddingVertical: 100,
    },
});

export default SigninScreen;