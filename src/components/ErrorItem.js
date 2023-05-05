import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ErrorItem = ({ errorMsg }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>Sorry something went wrong...</Text>
      <Feather name={'frown'} size={100} color={'white'} />
      <Text style={[styles.errorMessage, styles.forDebug]}>
        ERROR: {errorMsg}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  errorMessage: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  forDebug: {
    marginTop: 20,
    fontSize: 10,
  },
});
export default ErrorItem;
