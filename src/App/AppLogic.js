import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  List, Logo, MainLayout, Search,
} from '../components';
import { ACTIONS } from '../store';

import getPlaceholder from './getPlaceholder';
import fetchItems from './fetchItems';

const today = new Date();

export const SEARCH = 'search';
export const TRENDING = 'trending';

export const getDocumentTitle = keywords => `GiphySearch / ${keywords || (keywords === undefined ? 'Enter search' : 'Trending')}`;

export const getVerb = keywords => (keywords.length ? SEARCH : TRENDING);

export class AppLogicComponent extends PureComponent {
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
    document.title = getDocumentTitle(keywords);
    if (keywords !== undefined) {
      const verb = getVerb(keywords);
      fetchItems(verb, keywords).then((json) => {
        const results = json.data.map(({ title, images: { original }, id }) => ({
          title,
          image: original,
          id,
        }));
        resultsSet(results);
        this.setState({
          hasBeenQueried: true,
        });
      });
    }
  };

  render() {
    const placeholder = getPlaceholder(today);
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

export const mapStateToProps = state => ({
  keywords: state.keywords,
  results: state.results,
});

const mapDispatchToProps = {
  keywordsSet: ACTIONS.keywordsSet,
  resultsSet: ACTIONS.resultsSet,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppLogicComponent);
