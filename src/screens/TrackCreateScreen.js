import '../_mockLocation'
import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext);
    const [error] = useLocation(isFocused, (location) => {
        addLocation(location, state.recording);
    });
    
    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text style={{ fontSize: 48 }}>Create Track</Text>
            <Map />
            <TrackForm />
            {error ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);