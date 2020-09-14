import React, { useEffect } from "react";
import { View, StyleSheet, Text, Animated, Easing } from "react-native";
import reactLogo from "../assets/images/react-logo.png";

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Home = ({ navigation }) => {
  const value = new Animated.Value(0);

  const animate = () => {
    value.setValue(0);
    Animated.timing(value, {
      toValue: 1,
      duration: 6000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => animate());
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <View style={styles.box}>
      <Animated.Image
        source={reactLogo}
        style={{
          transform: [
            {
              rotate: value.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "360deg"],
              }),
            },
            { perspective: 1000 },
          ],
          width: 150,
          height: 150,
        }}
      />
    </View>
  );
};

export default Home;
