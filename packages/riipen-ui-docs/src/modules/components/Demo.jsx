import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import withStyles from '@riipen-ui/styles/withStyles';

import MarkdownElement from 'src/modules/components/MarkdownElement';
import Sandbox from 'src/modules/components/Sandbox';

const styles = (theme) => ({
  root: {
    marginBottom: 40,
    marginLeft: -theme.spacing(2),
    marginRight: -theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 1),
      marginLeft: 0,
      marginRight: 0,
    },
  },
  demo: {
    position: 'relative',
    outline: 0,
    margin: 'auto',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.level2,
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
    },
  },
  code: {
    display: 'none',
    padding: 0,
    marginBottom: theme.spacing(1),
    marginRight: 0,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    '& pre': {
      overflow: 'auto',
      margin: '0px !important',
      maxHeight: 1000,
    },
  },
});

class Demo extends React.Component {
  static propTypes = {
    demo: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired,
  };

  render() {
    const { demo, options, styles } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.demo}>
          <Sandbox
            component={demo.jsx}
            name={demo.name}
          />
        </div>
        <MarkdownElement
          className={styles.code}
          text={`\`\`\`jsx\n${demo.rawJS}\n\`\`\``}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Demo);
