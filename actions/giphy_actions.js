import * as APIUtil from '../util/api_util';
export const RECEIVE_GIPHYS = 'RECEIVE_GIPHYS';

export const receiveGiphys = (giphys) => ({
  type: RECEIVE_GIPHYS,
  giphys
});

export const fetchSearchGiphys = (searchTerm) => {
  return (dispatch) => {
    APIUtil.fetchSearchGiphys(searchTerm)
      .then(
        (giphys) => dispatch(receiveGiphys(giphys.data)),
      )
  };
};