import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/features/splash-screen';

const Stack = createNativeStackNavigator()

const App: () => Node = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"dark-content"} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={noHeaderScreenOption}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const noHeaderScreenOption = {
  headerShown: false,
};

export default App;

