import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Text } from 'react-native-elements'
import { requestPermissionsAsync } from 'expo-location'
import Map from '../components/Map'

const TrackCreateScreen = () => {
    const [error, setError] = useState(null)

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
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
            <Map></Map>
            {error ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;