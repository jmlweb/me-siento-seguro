import React from 'react';
import PropTypes from 'prop-types';

import styles from './List.module.css';

const getSpanWStyles = ({ width }) => {
  if (width > 130 * 4) {
    return styles.spanW3;
  }
  if (width > 130 * 3) {
    return styles.spanW2;
  }
  return styles.spanW1;
};

const getSpanHStyles = ({ height }) => {
  if (height > 90 * 4) {
    return styles.spanH3;
  }
  if (height > 90 * 3) {
    return styles.spanH2;
  }
  return styles.spanH1;
};

const List = ({ hasBeenQueried, results }) => (!hasBeenQueried || results.length ? (
  <div className={styles.wrapper}>
    {results.map(({ title, image, id }) => {
      const spanWStyles = getSpanWStyles(image);
      const spanHStyles = getSpanHStyles(image);
      return (
        <div key={id} className={[styles.item, spanWStyles, spanHStyles].join(' ')}>
          <img className={styles.image} src={image.url} alt="" />
          <p className={styles.title}>{title}</p>
        </div>
      );
    })}
  </div>
) : (
  <div className={styles.noResults}>There are no results</div>
));

List.propTypes = {
  hasBeenQueried: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.shape({
        url: PropTypes.string,
      }),
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default List;
