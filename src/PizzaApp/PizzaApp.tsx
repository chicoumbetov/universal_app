import * as React from 'react';
import { useState } from 'react'
import { StyleSheet, Image, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import Header, { HEADER_HEIGHT } from "./components/Header";
import {
  PIZZA_SIZE,
  BREAD_PADDING,
  PADDING,
  assets,
  defaultState,
} from "./Config";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9F5F2",
    alignItems: "center",
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  content: {
    marginTop: PIZZA_SIZE + PADDING * 2 + HEADER_HEIGHT,
  },
  pizza: {
    margin: 32,
    width: PIZZA_SIZE,
    height: PIZZA_SIZE,
  },
  plate: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  bread: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    top: BREAD_PADDING,
    left: BREAD_PADDING,
    right: BREAD_PADDING,
    bottom: BREAD_PADDING,
  },
});


export default function PizzaApp() {
  const [state, setState] = useState(defaultState);
  const selected = useSharedValue(false);
  const style = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(selected.value ? 1.05 : 1) }],
  }));

  return (
    <View style={styles.root} >
      <Animated.View style={[styles.pizza, style]} >
        <Image source={assets.plate} style={styles.plate} />
      </Animated.View>
      <Header />
    </View>
  );
}
