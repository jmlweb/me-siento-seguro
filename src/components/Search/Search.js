import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './Search.module.css';
import searchIcon from './search.svg';

class Search extends PureComponent {
  static getDerivedStateFromProps({ initialValue }, { value }) {
    return {
      value: value === undefined ? initialValue : value,
    };
  }

  static defaultProps = {
    initialValue: '',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    initialValue: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: undefined,
  };

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    const { onSubmit } = this.props;
    const { value } = this.state;
    e.preventDefault();
    onSubmit(value);
  };

  render() {
    const { title, initialValue, ...rest } = this.props;
    const { value } = this.state;
    return (
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <p>{title}</p>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              className={styles.input}
              {...rest}
              value={value}
              onChange={this.onChange}
            />
            <button className={styles.button} type="submit">
              <img width="24" height="24" src={searchIcon} alt="search" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
