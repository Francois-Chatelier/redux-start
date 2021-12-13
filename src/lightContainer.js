import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  light: state,
});

const mapDispatchToProps = (dispatch) => ({
  onSwitch: () => dispatchEvent({ type: "SWITCH" }),
});

const LightComponent = ({ light, onSwitch }) => (
  <div>
    <p>{light}</p>
    <button onClick={onSwitch}>Switch</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(LightComponent);
