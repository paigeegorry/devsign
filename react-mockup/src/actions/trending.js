import { getQuotesInfo } from '../services/simpsonsApi';

export const FETCH_QUOTES = 'FETCH_QUOTES';
export const FETCH_QUOTES_LOADING = 'FETCH_QUOTES_LOADING';
export const fetchQuotes = () => ({
  type: FETCH_QUOTES,
  loadStart: FETCH_QUOTES_LOADING,
  payload: getQuotesInfo()
});


