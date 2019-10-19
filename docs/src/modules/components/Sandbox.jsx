import PropTypes from 'prop-types';
import React from 'react';

import ErrorBoundary from 'src/modules/components/ErrorBoundary';

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    flexGrow: 1,
    height: 400,
    border: 'none',
    boxShadow: theme.shadows[1],
  },
});

class Sandbox extends React.Component {
  static propTypes = {
    component: PropTypes.elementType.isRequired,
    name: PropTypes.string.isRequired,
  };

  render() {
    const { component: Component, name } = props;

    return (
      <ErrorBoundary>
        <React.Fragment>
          <Component />
        </React.Fragment>
      </ErrorBoundary>
    );
  }
}

export default Sandbox;