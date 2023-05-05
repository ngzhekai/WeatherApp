import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import IconText from '../components/IconText';
import moment from 'moment';

const City = ({ weatherData }) => {
  const {
    container,
    imageLayout,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    rowLayout,
    riseSetWrapper,
    riseSetText,
  } = styles;

  const { name, country, population, sunrise, sunset } = weatherData;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={imageLayout}
      >
        {/* <Text style={[cityName, cityText]}>The Raffles Places</Text> */}
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconSize={50}
            iconColor={'red'}
            bodyText={population}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconSize={35}
            iconColor={'white'}
            // bodyText={'6:57 AM'}
            bodyText={moment(sunrise).format('h:mm A')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconSize={35}
            iconColor={'white'}
            // bodyText={'7:06 PM'}
            bodyText={moment(sunset).format('h:mm A')}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 30,
  },
  countryName: {
    fontSize: 24,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 15,
    color: 'white',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default City;
