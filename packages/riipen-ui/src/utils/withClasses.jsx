import React from "react";
import PropTypes from "prop-types";

const withClasses = WrappedComponent => {
  const handle = props => {
    const { classes, ...other } = props;
    return <WrappedComponent classes={["riipen", ...classes]} {...other} />;
  };

  handle.defaultProps = {
    classes: []
  };

  handle.propTypes = {
    /**
     * Class list to append the default classes to.
     */
    classes: PropTypes.array
  };

  const name = WrappedComponent.displayName || WrappedComponent.name;
  handle.displayName = `withClasses(${name})`;

  return handle;
};

export default withClasses;
