import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

class TableRow extends React.Component {
  static propTypes = {
    /**
     * Children to render in the tr element
     */
    children: PropTypes.node,

    /**
     * Classes to apply to the root element
     */
    classes: PropTypes.arrayOf(PropTypes.string),

    /**
     * Force the row to display hovered style or not
     */
    forceHover: PropTypes.bool,

    /**
     * Whether to highlight the row on hover
     */
    hover: PropTypes.bool,

    /**
     * Whether to render the border for the row
     */
    border: PropTypes.bool,

    /**
     * Function to call when we mouseover the row
     */
    onMouseOver: PropTypes.func,

    /**
     * Function to call when the mouse exits the row
     */
    onMouseOut: PropTypes.func
  };

  static defaultProps = {
    border: true,
    forceHover: false
  };

  static contextType = ThemeContext;

  render() {
    const {
      children,
      classes,
      hover,
      forceHover,
      border,
      onMouseOver,
      onMouseOut
    } = this.props;

    const theme = this.context;

    return (
      <React.Fragment>
        <tr
          className={clsx(classes, forceHover && "forceHover")}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        >
          {children}
        </tr>
        <style jsx>{`
          tr {
            border-bottom: 1px solid
              ${border &&
                (theme.palette.divider
                  ? theme.palette.divider
                  : `transparent`)};
            border-left: 3px solid transparent;
          }

          tr.forceHover {
            background-color: ${theme.palette.common.white};
            border-left: 3px solid ${theme.palette.secondary.main};
          }

          tr:hover {
            ${hover ? `background-color: ${theme.palette.common.white};` : ""}
            ${hover
              ? `border-left: 3px solid ${theme.palette.secondary.main};`
              : ""}
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(TableRow);
