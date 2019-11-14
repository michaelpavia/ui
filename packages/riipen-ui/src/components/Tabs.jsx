import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

class Tabs extends React.Component {
  static propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.object,

    /**
     * Determines the color of the indicator.
     */
    color: PropTypes.oneOf(["secondary", "primary"]),

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: PropTypes.elementType,

    /**
     * Callback fired when the value changes.
     *
     * @param {object} event The event source of the callback
     * @param {any} value The value of the tab.
     */
    onChange: PropTypes.func,

    /**
     * The tabs orientation (layout flow direction).
     */
    orientation: PropTypes.oneOf(["horizontal", "vertical"]),

    /**
     * The value of the currently selected `Tab`.
     */
    value: PropTypes.any,

    /**
     *  Determines additional display behavior of the tabs:
     *
     *  - `standard` will render the default state.
     *  -`fullWidth` will make the tabs grow to use all the available space,
     *  which should be used for small views, like on mobile.
     */
    variant: PropTypes.oneOf(["standard", "fullWidth"])
  };

  static defaultProps = {
    color: "secondary",
    component: "div",
    orientation: "horizontal",
    variant: "standard"
  };

  handleChange = (e, value) => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(e, value);
    }
  };

  render() {
    const {
      children,
      classes,
      component: Component,
      orientation,
      value,
      variant
    } = this.props;

    const className = clsx("root", orientation, classes);

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        active: child.props.value === value,
        fullWidth: variant === "fullWidth",
        onClick: this.handleChange,
        orientation
      })
    );

    return (
      <React.Fragment>
        <Component className={className}>
          <div className={clsx("scroller")}>
            <div className={clsx("container", orientation)}>
              {childrenWithProps}
            </div>
          </div>
        </Component>
        <style jsx>{`
          .root {
            display: flex;
            min-height: 48px;
            overflow: hidden;
          }

          .vertical {
            flex-direction: column;
          }

          .scroller {
            display: inline-block;
            flex: 1 1 auto;
            overflow-x: auto;
            position: relative;
            white-space: nowrap;
          }

          .container {
            display: flex;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Tabs;
