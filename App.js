import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import { useGetWeather } from './src/hooks/useGetWeather';
import ErrorItem from './src/components/ErrorItem';
import Counter from './src/demonstration/Counter';

const App = () => {
  const [loading, errorMsg, weather] = useGetWeather();

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <ErrorItem errorMsg={errorMsg}/>
      ) : (
        <ActivityIndicator size={'large'} color={'purple'} />
      )}
    </View>
    // <Counter />
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'lightgrey',
  },
});
export default App;
