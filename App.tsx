import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
// import { LogBox } from "react-native";
// import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
// import useColorScheme from './hooks/useColorScheme';
// import Navigation from './navigation';
import { Routes } from './src/Routes';

// import { assets as globalAssets } from "./src/components/assets";
// import { assets as pizzaAsset } from "./src/PizzaApp/assets";

import Pizza from './src/PizzaApp/PizzaApp'
import LoadAssets from './src/components/LoadAssets';

import { Root } from "native-base";
import { Font, AppLoading } from "expo";

/**
const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SFPro/SF-Pro-3Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SFPro/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SFPro/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SFPro/SF-Pro-Display-Medium.otf"),
  Antpolt: require("./assets/fonts/antpoltsemicond-bolditalic.ttf"),
};
*/



// const assets = [...globalAssets, ...pizzaAsset];
// const assets = [ ...globalAssets];
const Stack = createStackNavigator<Routes>();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="PizzaApp"
      component={Pizza}
      options={{
        title: "🍕 Pizza App",
      }}
    />
  </Stack.Navigator>
);

export default function App() {
  const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <LoadAssets >
        <AppNavigator />
      </LoadAssets>
    );
  }
}
