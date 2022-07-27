import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/features/splash-screen';
import Home from './src/features/home';
import SendMoney from './src/features/send-money';

const Stack = createNativeStackNavigator()

const App: () => Node = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"light-content"} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={noHeaderScreenOption}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SendMoney" component={SendMoney} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const noHeaderScreenOption = {
  headerShown: false,
};

export default App;

