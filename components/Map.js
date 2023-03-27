import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from "tailwind-react-native-classnames";
import { useSelector } from 'react-redux';
import { selectOrigin} from "../slices/navSlice";

const MapViewComponent = () => {
  const origin = useSelector(selectOrigin)
  return (  
    <MapView 
      style={tw `flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
    {origin?.location && (
      console.log(origin),
      <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Akshay's Origin"
          description={origin.location.lat + " " + origin.location.lng}
          identifier="origin"
      />
    )}
      </MapView>
  );
};

export default MapViewComponent;

const styles = StyleSheet.create({});
