import React from 'react';
import { StyleSheet, View, Text,  FlatList } from 'react-native';

export default function HistoryScreen( { route}) {
    const {data} = route.params;
    console.log(data);
    return (
        <View style={styles.container}>
            <View>
                
          <Text>History</Text>
          <FlatList style={styles.list}
                data={data}
                renderItem={({ item }) =>
                <Text>{item.key}</Text>
            }
              keyExtractor={(item, index) => index.toString()}
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