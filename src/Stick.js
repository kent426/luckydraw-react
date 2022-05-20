import React, { Component } from "react";
import { View } from "react-native";
import { array, object, string } from "prop-types";

export default class Stick extends Component {
  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;
    const rot = this.props.body.angle;

    return (
      <div
        style={
          {
            // transform: `translateX(${-5 * this.props.direction}px)`,
          }
        }
      >
        <View
          style={{
            position: "absolute",
            left: x,
            top: y,
            width,
            height,
            transform: [
              { translateX: `${3 * this.props.direction}px` },
              { rotate: `${rot}rad` },
            ],
            transformOrigin: "top center",
            backgroundColor: this.props.color || "pink",
            zIndex: this.props.zIndex,
          }}
        />
      </div>
    );
  }
}

Stick.propTypes = {
  size: array,
  body: object,
  color: string,
};
