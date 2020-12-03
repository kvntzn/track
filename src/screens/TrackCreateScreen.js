import '../_mockLocation' // comment when working on a real device
import React, { useContext, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);
    const callback = useCallback((location) => {
        addLocation(location, recording);
    }, [recording])
    const [error] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text style={{ fontSize: 48 }}>Create Track</Text>
            <Map />
            <TrackForm />
            {error ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={24} color="black" />
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);