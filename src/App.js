import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const App = () => {
  Geolocation.getCurrentPosition(info => console.log(info));
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Start</Text>
    </SafeAreaView>
  );
};

export default App;
