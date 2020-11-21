import React, { useContext } from 'react'
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements'
import AuthForm from '../components/AuthForm';
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);

    return (
        <KeyboardAvoidingView>
            <ScrollView style={styles.contentContainerStyle}>
                <View style={styles.container}>
                    <AuthForm
                        headerText="Sign Up for Tracker"
                        errorMessage={state.errorMessage}
                        submitButtonText="Sign Up"
                        onSubmit={signup}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                        <Spacer>
                            <Text style={styles.link}>Already have an account? Sign in instead</Text>
                        </Spacer>
                    </TouchableOpacity>
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
        marginBottom: 200
    },
    contentContainerStyle: {
        paddingVertical: 150,
    },
    link: {
        color: 'blue'
    }
});

export default SignupScreen;