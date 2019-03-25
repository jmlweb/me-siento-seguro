import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainLayout.module.css';

const MainLayout = ({ header, main, footer }) => (
  <div className={styles.wrapper}>
    <header className={styles.header}>{header}</header>
    <main className={styles.main}>{main}</main>
    <footer className={styles.footer}>{footer}</footer>
  </div>
);

MainLayout.propTypes = {
  header: PropTypes.node.isRequired,
  main: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default MainLayout;
