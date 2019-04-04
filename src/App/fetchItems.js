const fetchItems = async (verb, keywords) => {
  try {
    const response = await fetch(
      `http://api.giphy.com/v1/gifs/${verb}?q=${keywords}&api_key=${
        process.env.REACT_APP_GIPHY_KEY
      }&limit=25`,
    );
    return response.json();
  } catch (error) {
    return error.message;
  }
};

export default fetchItems;
