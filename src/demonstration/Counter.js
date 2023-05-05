import React, { useState, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);

  useEffect(() => {
    console.log(`Count changes`);
    return () => {
      console.log('useEffect cleanup');
    };
  }, [count]);

  const {
    container,
    title,
    designText,
    button,
    buttonType1,
    buttonText,
    buttonType2,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <Text style={title}>{`Counter: ${count}`}</Text>
      <Text style={designText}>Custom TouchableOpacity Button Design:</Text>
      <TouchableOpacity
        style={[button, buttonType1]}
        onPress={() => {
          setCount(count + 1);
        }}
      >
        <Text style={buttonText}>Increase the counter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[button, buttonType2]}
        onPress={() => {
          setCount(count - 1);
        }}
      >
        <Text style={buttonText}>Decrease the counter</Text>
      </TouchableOpacity>
      <Text style={designText}>Default React-Native Button Design:</Text>
      <Button
        color={'#FC4F00'}
        title={'Increase the new counter'}
        onPress={() => {
          setNewCount(count + 1);
        }}
      />
      <Button
        color={'#F79540'}
        title={'Decrease the new counter'}
        onPress={() => {
          setCount(count - 1);
        }}
      />
      <Text style={designText}>Which is better? Let me know!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B71375',
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop: 50,
    marginBottom: 50,
    color: '#FEFBE9',
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginHorizontal: 80,
    marginVertical: 10,
    elevation: 8,
    borderRadius: 5,
  },
  buttonType1: {
    backgroundColor: '#FC4F00',
  },
  buttonType2: {
    backgroundColor: '#F79540',
  },
  buttonText: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  designText: {
    justifyContent: 'flex-start',
    color: 'white',
    fontSize: 12,
    marginTop: 25,
    paddingHorizontal: 80,
  },
});
export default Counter;
