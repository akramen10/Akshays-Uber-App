import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin} from "../slices/navSlice";
import {GOOGLE_MAPS_APIKEY} from "@env";

export default async function getPlaceId(latitude, longitude) {
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_APIKEY}`);
  const data = await response.json();
  if (data.results.length > 0) {
    return data.results[0].place_id;
  }
  return null;
};

const styles = StyleSheet.create({})