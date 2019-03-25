// ACTION TYPES
const KEYWORDS_SET = 'KEYWORDS/SET';
const RESULTS_SET = 'RESULTS/SET';

// ACTION CREATORS
const keywordsSet = payload => ({
  type: KEYWORDS_SET,
  payload,
});

const resultsSet = payload => ({
  type: RESULTS_SET,
  payload,
});

export const ACTIONS = {
  keywordsSet,
  resultsSet,
};

// INITIAL STATE

const initialState = {
  keywords: undefined,
  results: [],
};

// REDUCER

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case KEYWORDS_SET:
      return {
        ...state,
        keywords: payload,
      };
    case RESULTS_SET:
      return {
        ...state,
        results: payload,
      };
    default:
      return state;
  }
};

export default reducer;
