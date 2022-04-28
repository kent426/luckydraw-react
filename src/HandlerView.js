import React from "react";
import { StyleSheet, View } from "react-native";
import { responsive } from "./styles/mixins";
import { colors } from "./styles/variables";

const styles = StyleSheet.create({
  container: {
    width: responsive.vertical(40),
    height: responsive.vertical(100),
    position: "relative",
    alignItems: "center",
  },
  bottomOuterCircle: {
    width: responsive.vertical(40),
    height: responsive.vertical(40),
    borderRadius: responsive.vertical(20),
    backgroundColor: colors.pink3,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomInnerCircle: {
    width: responsive.vertical(25),
    height: responsive.vertical(25),
    borderRadius: responsive.vertical(25) / 2,
    backgroundColor: colors.blue8,
  },
  upper: {
    height: responsive.vertical(84),
    width: responsive.vertical(40),
    // backgroundColor: 'yellow',
    alignItems: "center",
    position: "relative",
  },
  stick: {
    position: "absolute",
    bottom: 0,
    width: responsive.vertical(10),
    height: responsive.vertical(58),
    backgroundColor: colors.white,
    borderRadius: 7,
  },
  upperCircle: {
    width: responsive.vertical(40),
    height: responsive.vertical(40),
    borderRadius: responsive.vertical(20),
    backgroundColor: colors.pink3,
    position: "absolute",
    top: 0,
  },
});

export const HandlerView = ({ direction }) => {
  const switcher = {
    left: "-45deg",
    right: "45deg",
    middle: "0deg",
  };
  const deg = switcher[direction] || switcher.middle;
  return (
    <View style={styles.container}>
      {/*  */}
      <View style={styles.bottomOuterCircle}>
        <View style={styles.bottomInnerCircle} />
      </View>
      <View
        style={[
          // styles.upper,
          {
            height: responsive.vertical(84),
            width: responsive.vertical(40),
            // backgroundColor: 'yellow',
            alignItems: "center",
            position: "relative",
            transform: [
              {
                translateY: responsive.vertical(42),
              },
              { rotate: deg },
              {
                translateY: responsive.vertical(-42),
              },
            ],
          },
        ]}
      >
        <View style={[styles.stick]} />

        <View style={styles.upperCircle} />
      </View>
    </View>
  );
};
