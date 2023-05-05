import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from 'react-native';
import IconText from '../components/IconText';
import moment from 'moment';
import { countryName } from '../utilities/countryName';

const City = ({ weatherData }) => {
  const {
    container,
    imageLayout,
    cityName,
    cityText,
    countryNameText,
    populationWrapper,
    populationText,
    rowLayout,
    riseSetWrapper,
    riseSetText,
    infoWrapper,
    imageBlur,
  } = styles;

  const { name, country, population, sunrise, sunset } = weatherData;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={countryName[country].backgroundImg}
        style={imageLayout}
      >
        <View style={imageBlur} />
        <View style={infoWrapper}>
          <Text style={[cityName, cityText]}>{name}</Text>
          <Text style={[countryNameText, cityText]}>
            {countryName[country].name}
          </Text>
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
              bodyText={moment(sunrise).format('h:mm A')}
              bodyTextStyles={riseSetText}
            />
            <IconText
              iconName={'sunset'}
              iconSize={35}
              iconColor={'white'}
              bodyText={moment(sunset).format('h:mm A')}
              bodyTextStyles={riseSetText}
            />
          </View>
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
    fontSize: 29,
    paddingTop: 100,
  },
  countryNameText: {
    fontSize: 23,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
    margin: 8,
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    color: 'red',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 45,
  },
  riseSetText: {
    fontSize: 15,
    color: 'white',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBlur: {
    flex: 1,
    marginVertical: 80,
    marginHorizontal: 15,
    borderRadius: 20,
    backgroundColor: 'black',
    opacity: 0.65,
  },
  infoWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
export default City;
