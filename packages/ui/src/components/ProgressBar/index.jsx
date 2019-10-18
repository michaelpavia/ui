import PropTypes from 'prop-types';
import React from 'react';

import { ThemeContext } from '../ThemeContext';

export const styles = (theme) => ({
  root: {
    background: theme.palette.background.default,
    border: none,
    borderRadius: theme.shape.borderRadius.large,
    height: '8px',
    margin: 0,
    MozAppearence: 'none',
    WebkitAppearance: 'none',
    width: '100%',
    '&::-webkit-progress-bar' {
      background: theme.palette.background.default,
      borderRadius: borderRadius: theme.shape.borderRadius.large,
    },
    '&::-webkit-progress-value' {
      borderRadius: borderRadius: theme.shape.borderRadius.large,
    }
  },
});

class ProgressBar extends React.Component {
  static propTypes = {
    /**
     * List of additional classes to apply to this component.
     */
    classes: PropTypes.arrayOf(PropTypes.string),

    /**
     * The percentage of the progress between 0 and 1.
     */
    progress: PropTypes.number,

    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf([
      'disabled',
      'negative',
      'positive',
      'primary',
      'secondary',
      'tertiary',
    ]),
  };

  static defaultProps = {
    classes: [],
    variant: 'primary',
  };

  render() {
    const { classes, completion, variant } = this.props;

    const className = [
      css.progressBar,
      css[variant],
    ]
      .concat(classes)
      .filter(Boolean)
      .join(' ');

    return (
      <progress className={className} style={{ opacity }} value={completion} />
    );
  }
}

ProgressBar.contextType = ThemeContext;

export default ProgressBar;
