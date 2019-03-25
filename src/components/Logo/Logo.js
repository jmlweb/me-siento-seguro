import React from 'react';

import styles from './Logo.module.css';
import logoImage from './logo.png';

const Logo = () => (
  <div className={styles.wrapper}>
    <span className={styles.title}>GiphySearch</span>
    <img className={styles.logo} src={logoImage} alt="" />
    <span>by Sewan</span>
  </div>
);

export default Logo;
