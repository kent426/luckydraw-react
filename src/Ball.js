import React, { Component } from "react";
import { View, Text } from "react-native";
import { array, object, string, number } from "prop-types";

export default class Ball extends Component {
  render() {
    if (!this.props.radius) {
      return null;
    }

    const radius = this.props.radius;
    const lenBall = 2 * radius;
    const x = this.props.body.position.x - radius;
    const y = this.props.body.position.y - radius;
    const id = this.props.body.id;
    const isSelect = this.props.body.oodIsSelect;
    // const x = 0
    // const y = 0
    // if (isSelect) {
    //   console.log(
    //     'JSON.stringify',
    //     JSON.stringify(this.props.body.collisionFilter),
    //   );
    // }

    return (
      <View
        style={{
          position: "absolute",
          left: x,
          top: y,
          // width: lenBall,
          // height: lenBall,
          width: lenBall * 0.9,
          height: lenBall * 0.9,
          borderRadius: radius,
          backgroundColor: this.props.color,
        }}
      >
        {/* {isSelect && <Text>{id}</Text>} */}
      </View>
    );
  }
}

Ball.propTypes = {
  radius: number,
  body: object,
  color: string,
};
