import React from 'react';
import { Button, View, Text, StyleSheet,TextInput } from 'react-native';


 const Homescreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <TextInput placeholder ="Name" style={styles.placeholder}/>
        <TextInput placeholder ="Email"style={styles.placeholder}/>
          <Button
          title="Submit"
          onPress={() => {navigation.navigate('About')}}/>
      </View>
    )
}
const styles = StyleSheet.create ({
      container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
      },
      placeholder:{
        borderWidth:1,
        padding:10,
        margin:10,
        height:30,
        width:150
      }
})
export default Homescreen;