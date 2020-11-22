import React, { useContext } from 'react'
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/AuthContext'

const SignupScreen = () => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <KeyboardAvoidingView>
            <ScrollView style={styles.contentContainerStyle}>
                <View style={styles.container}>
                    <NavigationEvents
                        onWillFocus={clearErrorMessage}
                        onWillBlur={clearErrorMessage}
                    />
                    <AuthForm
                        headerText="Sign Up for Tracker"
                        errorMessage={state.errorMessage}
                        submitButtonText="Sign Up"
                        onSubmit={signup}
                    />
                    <NavLink
                        text="Already have an account? Sign in instead."
                        routeName="Signin"
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;