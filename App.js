
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Categories from './Pages/Categories.js';
import ItemDetails from './Pages/ItemDetails.js';
import SplashScreen from './Pages/SplashScreen.js';
import OutputPage from './Pages/OutputPage.js';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import {Provider} from 'react-redux'
import store from './Store/index';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
    <View style={styles.main}>
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {/* <Stack.Screen name="/" component={Categories} /> */}
        <Stack.Screen name="/" component={SplashScreen} />
        <Stack.Screen name="details" component={ItemDetails} />
        <Stack.Screen name="categories" component={Categories} />
        <Stack.Screen name="OutputPage" component={OutputPage} />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
    </View>
    </Provider>
    );
};

const styles = StyleSheet.create({
main:{
  flex:1
}
});

export default App;
