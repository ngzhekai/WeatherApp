import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={80}
          color="black"
        />
        <Text style={tempStyles}>{`${temp.toFixed(1)}℃`}</Text>
        <Text style={feels}>{`Feels like ${feels_like.toFixed(1)}℃`} </Text>
        <RowText
          messageOne={`High: ${Math.round(temp_max)}℃  `}
          // messageOne={`High: ${temp_max.toFixed(1)}℃`}
          // messageTwo={`Low: ${temp_min.toFixed(1)}℃`}
          messageTwo={`Low: ${Math.round(temp_min)}℃`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginVertical: 55,
    marginHorizontal: 50,
    borderRadius: 25,
  },
  tempStyles: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: 'black',
  },
  highLow: {
    color: 'black',
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 20,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
    textTransform: 'capitalize',
  },
  message: {
    fontSize: 25,
    textTransform: 'capitalize',
  },
});

export default CurrentWeather;
