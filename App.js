import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalculatorScreen from './calculator';
import HistoryScreen from './history';

const Stack = createNativeStackNavigator()

export default function App() {
  

  return (
        <NavigationContainer>          
          <Stack.Navigator initialRouteName="Calculator">
            <Stack.Screen name="Calculator" component={CalculatorScreen} />
            <Stack.Screen name="History" component={HistoryScreen} />
          </Stack.Navigator>
        </NavigationContainer>

  );
  }




    
    const styles = StyleSheet.create({
     
        container: {
        marginTop: 200,
        justifyContent: 'center', 
        alignItems: 'center',
        alignContent: 'center',
        margin: 10,
      },
    
      buttonContainer: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
      },
    
      button: {
        marginRight: 10,
        marginBottom: 10,
      },
    });