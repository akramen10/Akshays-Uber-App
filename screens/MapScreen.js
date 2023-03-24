import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from "tailwind-react-native-classnames";
import MapView from 'react-native-maps';
import MapViewComponent from './components/Map';

const MapScreen = () => {
  return (
    <View>
      <Text>Here is the map stuff..</Text>
      <View style={tw `h-1/2`}>
        <MapViewComponent/>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})