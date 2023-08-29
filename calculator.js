import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';

export default function CalculatorScreen({ navigation }) {
    const [firstNumber, setfirstNumber] = React.useState(0);
    const [secondNumber, setsecondNumber] = React.useState(0);
    const [answer, setAnswer] = React.useState(firstNumber + secondNumber);
    const [data, setData] = React.useState([]);
    const [text, setText] = React.useState('');

    const initialFocus = useRef(null);
  
    const buttonPlus = () => {
      const first=parseInt(firstNumber);
      const second=parseInt(secondNumber);
      const sum=first + second;
      setAnswer(sum);
      const text = firstNumber+'+'+secondNumber+'='+sum;
      setData([...data, { key: text }]);
      setText('');
      setfirstNumber('');
      setsecondNumber('');
      initialFocus.current.focus();
    }
  
    const buttonMinus = () => {
      const sum=firstNumber - secondNumber;
      setAnswer(sum);
      const text = firstNumber+'-'+secondNumber+'='+sum;
      setData([...data, { key: text }]);
      setText('');
      setfirstNumber('');
      setsecondNumber('');
      initialFocus.current.focus();

    }
  
    
    return (
        <View style={styles.container}>
          <View>
            <Text>
              {'Result: '+ answer}
            </Text>
          </View>
          
          <View>
          
          <TextInput
            style={{width: 200, borderColor: 'black', borderWidth: 1,  }}
            ref={initialFocus}
            keyboardType={'numeric'}
            value={firstNumber}
            onChangeText={number => setfirstNumber(number)}
          />
          <TextInput
            style={{width: 200, borderColor: 'black', borderWidth: 1 }}
            keyboardType={'numeric'}
            value={secondNumber}
            onChangeText={number => setsecondNumber(number)}
          />
          </View>
          <View>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button color='pink' onPress={buttonPlus} title="+"/>
                </View>
                <View>
                <Button color='pink' onPress={buttonMinus} title="-"/>
                </View>
            <StatusBar style="auto" />
            </View>
          </View>
          <View>
          <Button color='pink'
            title="History"
            onPress={() => navigation.navigate('History', {data})} // Navigate to Settings screen
            />
          </View>
        </View>
  
    );
    };

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