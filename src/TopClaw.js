import React, { Component } from "react";
import { View, Image } from "react-native";
import { array, object, string } from "prop-types";
import { dimensions } from "./styles/variables";

const responsiveVertical = (val) => (val / 667) * dimensions.height;
const responsiveHorizontal = (val) => (val / 375) * dimensions.width;

export default class TopClaw extends Component {
  constructor(props) {
    super(props);
    this.color = "#515151";
  }
  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;

    return (
      <View
        style={{
          position: "absolute",
          left: x,
          top: y,
          width,
          height,
          backgroundColor: this.props.color || "pink",
          alignItems: "center",
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            height,
            width: 4,
            backgroundColor: this.color,
            // transform: [
            //   {
            //     translateY: responsiveVertical(15)
            //   }
            // ]
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: responsiveVertical(25),
            transform: [
              {
                rotate: "45deg",
              },
              {
                translateX: responsiveVertical(8),
              },
              {
                translateY: -responsiveVertical(3),
              },
            ],
            width: 5,
            backgroundColor: this.color,
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            height: responsiveVertical(25),
            transform: [
              {
                rotate: "-45deg",
              },
              {
                translateX: -responsiveVertical(8),
              },
              {
                translateY: -responsiveVertical(3),
              },
            ],
            width: 5,
            backgroundColor: this.color,
          }}
        />
        {/* <View
          style={{
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            borderLeftWidth: responsiveHorizontal(20),
            borderRightWidth: responsiveHorizontal(20),
            borderBottomWidth: responsiveHorizontal(24),
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: this.color,
            position: 'absolute',
            bottom: responsiveVertical(-1),
            transform: [{rotate: '180deg'}],
          }}
        /> */}
        <Image
          source={require("./images/gameTri.png")}
          resizeMode={"cover"}
          style={{
            width: responsiveHorizontal(35),
            height: responsiveVertical(21),
            position: "absolute",
            bottom: responsiveVertical(0),
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: responsiveVertical(21),
            width: 5,
            height: responsiveVertical(35),
            backgroundColor: this.color,
            transform: [
              {
                translateX: (responsiveVertical(35) - 5) / 2,
              },
            ],
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: responsiveVertical(21),
            width: 5,
            height: responsiveVertical(35),
            backgroundColor: this.color,
            transform: [
              {
                translateX: -(responsiveVertical(35) - 5) / 2,
              },
            ],
          }}
        />
        <Image
          source={require("./images/gameTri.png")}
          resizeMode={"cover"}
          style={{
            width: responsiveHorizontal(35),
            height: responsiveVertical(21),
            position: "absolute",
            bottom: responsiveVertical(35),
          }}
        />
      </View>
    );
  }
}

TopClaw.propTypes = {
  size: array,
  body: object,
  color: string,
};
