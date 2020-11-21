import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        default:
            return state;
    }
};

const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            console.log(response.data);
        } catch (error) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with signup'})
        }
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
        // sign out
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup},
    { isSignedIn: false, errorMessage: '' }
);