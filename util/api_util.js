export const fetchSearchGiphys = (searchTerm) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=2`,
  });
};