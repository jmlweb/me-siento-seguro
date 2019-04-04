const fetchItems = async (verb, keywords) => {
  try {
    const response = fetch(
      `http://api.giphy.com/v1/gifs/${verb}?q=${keywords}&api_key=${
        process.env.REACT_APP_GIPHY_KEY
      }&limit=25`,
    );
    const json = await response.json();
    await console.log(json);
    return json;
  } catch (error) {
    throw error.message;
  }
};

export default fetchItems;
