import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


const Aboutscreen = ({navigation}) => {
 return (
      <View style={styles.container}>
        <Text>About Screen</Text>
        <Button
          title="Back"
          onPress={() => {navigation.navigate('Home')}}/>
      </View>
    )
}

const styles = StyleSheet.create({
         container:{flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center' 
}
})

export default Aboutscreen;