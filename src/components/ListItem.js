import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utilities/weatherType';
import moment from 'moment'

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { item, date, temp, dateTextWrapper } = styles;
  return (
    <View style={item}>
      <Feather name={weatherType[condition]?.icon} size={50} color={'white'} />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('hh:mm A')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}℃ / ${Math.round(max)}℃`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 3,
    backgroundColor: '#B04759',
    // backgroundColor: '#E76161',
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
  dateTextWrapper: {
    flexDirection: 'column',
  },
});
export default ListItem;
