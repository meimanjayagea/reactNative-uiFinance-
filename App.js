import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StatusBar, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  const [data, setData] = useState([
    {
      title: 'AWS Cloud',
      date: '07/23/2022',
      amount: '$1323',
      color: '#fbc966',
      icon: 'aws',
    },
    {
      title: 'AWS Cloud',
      date: '07/23/2022',
      amount: '$1323',
      color: '#fbc966',
      icon: 'google-play',
    },
    {
      title: 'AWS Cloud',
      date: '07/23/2022',
      amount: '$1323',
      color: '#fbc966',
      icon: 'google-play',
    },
    {
      title: 'AWS Cloud',
      date: '07/23/2022',
      amount: '$1323',
      color: '#fbc966',
      icon: 'google-play',
    },
  ]);
  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <View style={{marginTop: 10}}>
        <StatusBar backgroundColor="#fafafa" />
        <Text style={{color: '#141318'}}>HELLO MEIMAN JAYA GEA </Text>
        <Text
          style={{
            color: '#141318',
            fontWeight: 'bold',
            fontSize: 22,
            marginTop: 5,
          }}>
          $9,420.00
        </Text>
      </View>

      <View
        style={{
          marginTop: 20,
          backgroundColor: '#ffffff',
          elevation: 2,
          padding: 15,
          borderRadius: 10,
        }}>
        <Text style={{color: '#141318', fontWeight: 'bold'}}>USD Account</Text>
        <Text style={{color: '#141318', fontWeight: 'bold', fontSize: 22}}>
          $4000
        </Text>

        <View style={{flexDirection: 'row', marginTop: 5}}>
          <TouchableOpacity style={{marginRight: 5}}>
            <Icon name="history" size={22} color="#e2e1e4" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="credit-card" size={22} color="#e2e1e4" />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <TouchableOpacity
            style={{
              marginRight: 10,
              backgroundColor: '#b3e0b8',
              paddingVertical: 5,
              paddingHorizontal: 20,
              borderRadius: 8,
            }}>
            <Text style={{color: '#141318'}}>Received</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight: 10,
              backgroundColor: '#b3cbf2',
              paddingVertical: 5,
              paddingHorizontal: 20,
              borderRadius: 8,
            }}>
            <Text style={{color: '#141318'}}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginTop: 10,
          backgroundColor: '#ffffff',
          elevation: 2,
          padding: 15,
          borderRadius: 10,
        }}>
        <Text style={{color: '#141318', fontWeight: 'bold'}}>USD Account</Text>
        <Text style={{color: '#141318', fontWeight: 'bold', fontSize: 22}}>
          €2000.00
        </Text>

        <View style={{flexDirection: 'row', marginTop: 5}}>
          <TouchableOpacity style={{marginRight: 5}}>
            <Icon name="history" size={22} color="#e2e1e4" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="credit-card" size={22} color="#e2e1e4" />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <TouchableOpacity
            style={{
              marginRight: 10,
              backgroundColor: '#b3e0b8',
              paddingVertical: 5,
              paddingHorizontal: 20,
              borderRadius: 8,
            }}>
            <Text style={{color: '#141318'}}>Received</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight: 10,
              backgroundColor: '#b3cbf2',
              paddingVertical: 5,
              paddingHorizontal: 20,
              borderRadius: 8,
            }}>
            <Text style={{color: '#141318'}}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{marginTop: 20, flex: 1}}>
        <Text style={{color: '#141318', fontWeight: 'bold', fontSize: 16}}>
          Resend Transaction
        </Text>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                elevation: 2,
                padding: 10,
                flexDirection: 'row',
                borderRadius: 6,
                marginTop: 10,
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 25,
                  backgroundColor: item.color,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 2,
                }}>
                <Icon name={item.icon} size={22} color="#e2e1e4" />
              </View>
              <View style={{marginLeft: 10, flex: 1}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16, color: '#141318'}}>
                  {item.title}
                </Text>
                <Text>{item.date}</Text>
                <Text
                  style={{
                    textAlign: 'right',
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#141318',
                  }}>
                  {item.amount}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default App;
