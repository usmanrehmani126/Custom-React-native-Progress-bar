
import { View, StyleSheet, Animated, Text } from "react-native";
import React, { useEffect, useRef } from "react";

const App = () => {
  const progressAnimation = useRef(new Animated.Value(0)).current;

  const animateProgress = () => {
    Animated.timing(progressAnimation, {
      toValue: 100,
      duration: 10000,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        console.log("Animation trigered");
      }
    });
  };

  useEffect(() => {
    animateProgress();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 20, marginVertical: 20 }}>
        React native Custom Progress Bar.{" "}
      </Text>
      <View style={styles.progressBg}>
        <Animated.View
          style={[
            styles.progress,
            {
              width: progressAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 12,
    paddingRight: 12,
  },
  progressBg: {
    width: "100%",
    height: 5,
    backgroundColor: "#708090",
    borderRadius: 5,
  },
  progress: {
    width: "100%",
    height: 5,
    backgroundColor: "white",
    borderRadius: 5,
  },
});

export default App;
