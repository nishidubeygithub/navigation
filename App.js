import React from  "react";
import {View, Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Homescreen from './components/HomeScreen';
import Aboutscreen from './components/AboutScreen';

const Stack = createNativeStackNavigator();


const App = () => {
	return(
		<NavigationContainer>
			<Stack.Navigator inititalRouteName="Aboutscreen" screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'pink',
          },
          headerTintColor: 'blue',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}>
				<Stack.Screen name='Home' component={Homescreen} options ={{title: "Home"}} cardShadowEnabled="true"/>
				<Stack.Screen name='About' component={Aboutscreen} options ={{title: "About"}}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
export default App;