import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  List, Logo, MainLayout, Search,
} from '../components';
import { keywordsSet, resultsSet } from '../store';

import getPlaceholder from './getPlaceholder';

class App extends PureComponent {
  static defaultProps = {
    keywords: undefined,
  };

  static propTypes = {
    keywords: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object).isRequired,
    keywordsSet: PropTypes.func.isRequired,
    resultsSet: PropTypes.func.isRequired,
  };

  state = {
    hasBeenQueried: false,
  };

  componentDidMount() {
    this.doFetch();
  }

  componentDidUpdate(prevProps) {
    const { keywords } = this.props;
    if (prevProps.keywords !== keywords) {
      this.doFetch();
    }
  }

  doFetch = () => {
    const { keywords, resultsSet } = this.props;
    document.title = `GiphySearch / ${keywords
      || (keywords === undefined ? 'Enter search' : 'Trending')}`;
    if (keywords !== undefined) {
      const verb = keywords.length ? 'search' : 'trending';
      fetch(
        `http://api.giphy.com/v1/gifs/${verb}?q=${keywords}&api_key=${
          process.env.REACT_APP_GIPHY_KEY
        }&limit=25`,
      )
        .then(response => response.json())
        .then((json) => {
          const results = json.data.map(({ title, images: { original }, id }) => ({
            title,
            image: original,
            id,
          }));
          resultsSet(results);
          this.setState({
            hasBeenQueried: true,
          });
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  };

  render() {
    const placeholder = getPlaceholder();
    const { keywords, results, keywordsSet } = this.props;
    const { hasBeenQueried } = this.state;
    const main = (
      <Fragment>
        <Search
          initialValue={keywords}
          title="Enter your keywords (or send it empty for trending)"
          name="keyword"
          placeholder={`Try with ${placeholder}`}
          onSubmit={keywordsSet}
        />
        <List hasBeenQueried={hasBeenQueried} results={results} />
      </Fragment>
    );
    return (
      <MainLayout
        header={<Logo />}
        main={main}
        footer="🦄 GiphySearch is the best place to find your favourite gifs"
      />
    );
  }
}

const mapStateToProps = state => ({
  keywords: state.keywords,
  results: state.results,
});

const mapDispatchToProps = {
  keywordsSet,
  resultsSet,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
