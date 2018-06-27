/**
 *
 * AppBar
 *
 */

import React from 'react';
import {Link} from 'react-router';
import styles from './styles.css';
import FontAwesome from 'react-fontawesome';

function AppBar({toggleDrawer, email}) {
  const loginLink = email || (<Link to="/login">login</Link>);

  return (
    <div className={styles.appBar}>
      <div className={styles.iconButton}
           onClick={toggleDrawer}
      >
        <FontAwesome
          className={styles.icon}
          name="bars"
        />
      </div>
      <div className={styles.heading}>
        Coder daily
      </div>
      <div className={styles.linkContainer}>
        {loginLink}
      </div>
    </div>
  );
}

AppBar.propTypes = {
  email: React.PropTypes.string.isRequired,
  toggleDrawer: React.PropTypes.func.isRequired
};

export default AppBar;
