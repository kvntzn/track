import createDataContext from './createDataContext'

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return ({ email, password }) => {
        // make api request to sign up with that email and password
        
        // if we sign up, modify our state, and say that we are authenticated

        // if we signing up fails, we probably need to reflect an error message
        // somewhere

    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        // try to signin
        // handles success by updating state
        // handle failure by showing error message
    };
};

const signout = (dispatch) => {
    return () => {

    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup},
    { isSignedIn: false }
);