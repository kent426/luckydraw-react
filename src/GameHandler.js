import React, { Component, Children } from "react";
import { View, PanResponder } from "react-native";

class GameHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width_hand: 0,
      height_hand: 0,
      x_hand: 0,
      y_hand: 0,
      // direction: 'middle'
    };
    this.isAllowedResponder = false;
    const { setLeft, setRight, setMiddle } = this.props;
    this._panResponder = PanResponder.create({
      // ----------- NEGOTIATION:
      // A view can become the touch responder by implementing the correct negotiation methods.

      // Should child views be prevented from becoming responder on first touch?
      // onStartShouldSetPanResponderCapture: (evt, gestureState) => () => {
      //   console.log('onStartShouldSetPanResponderCapture');
      //   return true;
      // },

      // Should child views be prevented from becoming responder of subsequent touches?
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => () => {
        console.log("onMoveShouldSetPanResponderCapture");
        return true;
      },

      // onShouldBlockNativeResponder: (evt, gestureState) => {
      //   console.log('onShouldBlockNativeResponder');
      //   return true;
      // },

      // There are two methods to ask the view if it wants to become responder:

      // - Called for every touch move on the View when it is not the responder
      //   does this view want to "claim" touch responsiveness?
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // console.log(
        //   "onMoveShouldSetPanResponder",
        //   this.isAllowedResponder,
        //   gestureState
        // );
        const touchX = evt.nativeEvent.pageX;
        const midX = this.state.x_hand + this.state.width_hand / 2;
        const withInRange = Math.abs(touchX - midX) <= 25;
        this.isAllowedResponder = this.state.y_hand !== 0 && withInRange;
        console.log("this.state.x_hand", this.state.x_hand);
        console.log("this.width_hand", this.width_hand);
        console.log("this.state.width_hand", this.state.width_hand);
        console.log("touchX", touchX);
        console.log("midx", midX);
        console.log("onStartShouldSetPanResponder", this.isAllowedResponder);
        return this.isAllowedResponder;
      },

      // ... And one when some other view requested to be the responder

      // - Something else wants to become responder.
      //   Should this view release the responder? Returning true allows release
      // onPanResponderTerminationRequest: (evt, gestureState) => {
      //   console.log('onPanResponderTerminationRequest');
      //   return false;
      // },

      // ----------- NEGOTIATION RESULT:
      // If the View returns true and attempts to become the responder,
      // one of the following will happen:

      // // - The View is now responding for touch events.
      onPanResponderGrant: (evt, gestureState) => {
        console.log("onPanResponderGrant");
        const touchX = evt.nativeEvent.pageX;
        const midX = this.state.x_hand + this.state.width_hand / 2;
        const withInRange = Math.abs(touchX - midX) <= 25;
        this.isAllowedResponder = this.state.y_hand !== 0 && withInRange;
        // console.log('touchX', touchX);
        // console.log('midX', midX);
        // console.log('onPanResponderGrant', this.isAllowedResponder);
        return this.isAllowedResponder;
        // This is the time to highlight and show the user what is happening
      },

      // // - Something else is the responder right now and will not release it
      // onPanResponderReject: (evt) => {
      //   console.log('onPanResponderReject');
      // },

      // ----------- ACTUAL TOUCH HANDLERS:
      // If the view is the responder, the following handlers could be called:

      // - Touch start
      // onPanResponderStart: (e) => {
      //   console.log('onPanResponderStart');
      // },

      // - The user is moving their finger
      onPanResponderMove: (e, gestureState) => {
        const dx = gestureState.dx;
        const touchX = e.nativeEvent.pageX;
        const midX = this.state.x_hand + this.state.width_hand / 2;
        const offsetX = touchX - midX;
        console.log("dx", dx);
        console.log("midX", midX);
        console.log("touchX", touchX);
        if (this.isAllowedResponder && dx > 5) {
          // this.setState({
          //   direction: 'right'
          // })
          setRight && setRight();
        } else if (this.isAllowedResponder && dx < -5) {
          // this.setState({
          //   direction: 'left'
          // })
          setLeft && setLeft();
        } else {
          // this.setState({
          //   direction: 'middle'
          // })
          setMiddle && setMiddle();
        } // React to the movement!
      },

      // - Fired at the end of the touch before onPanResponderRelease
      // onPanResponderEnd: (e) => {
      //   console.log('onPanResponderEnd');
      // },

      // - Fired at the end of the touch, ie "touchUp"
      onPanResponderRelease: (e, gestureState) => {
        console.log("onPanResponderRelease");
        // this.setState({
        //   direction: 'middle'
        // })
        setMiddle && setMiddle();
        this.isAllowedResponder = false;
      },

      // - The responder has been taken from the View.
      //   Might be taken by other views after a call to onPanResponderTerminationRequest,
      //   or might be taken by the OS without asking
      //   (happens with control center/ notification center on iOS)
      // onPanResponderTerminate: (evt, gestureState) => {
      //   console.log('onPanResponderTerminate');
      // }
    });
  }
  render() {
    // const switcher = {
    //   left: '-45deg',
    //   right: '45deg',
    //   middle: '0deg',
    // };
    // const deg = switcher[this.props.direction] || switcher.middle;

    console.log("state", this.state);
    // // const deg = switcher[ direction ] || switcher.middle
    return (
      <View
        {...this._panResponder.panHandlers}
        onLayout={(e) => {
          this.setState({
            width_hand: e.nativeEvent.layout.width,
            height_hand: e.nativeEvent.layout.height,
            x_hand: e.nativeEvent.layout.x,
            y_hand: e.nativeEvent.layout.y,
          });
        }}
        style={[
          {
            zIndex: 900,
            // height: responsiveVertical(83),
            // width: responsiveVertical(150),
            // top: responsiveVertical(453),
            position: "absolute",
            alignSelf: "center",
            alignItems: "center",
          },
          this.props.style,
        ]}
      >
        {this.props.children}
      </View>
    );
  }
}

export default GameHandler;
