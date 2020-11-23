// import '../_mockLocation'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Text } from 'react-native-elements'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import Map from '../components/Map'

const TrackCreateScreen = () => {
    const [error, setError] = useState(null)

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                console.log(location)
            });

            if (!granted) {
                throw new Error('Location permission not granted');
            }
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        startWatching();
    }, []);

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text style={{ fontSize: 48 }}>Create Track</Text>
            <Map></Map>
            {error ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;