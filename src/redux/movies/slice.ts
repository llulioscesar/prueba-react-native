import {createSlice} from '@reduxjs/toolkit';
import {MoviesState} from '../../types/redux';
import {REDUX_MOVIES} from './constates';
import {getMovieCreditsThunk, getMovieDetailThunk, getMoviesPopularThunk, getMoviesTopRateThunk} from './thunks';

export const moviesSlice = createSlice<MoviesState, any, typeof REDUX_MOVIES>({
  name: REDUX_MOVIES,
  initialState: {
    popular: [],
    topRate: [],
    loading: false,
    error: null,
    detail: null,
    credits: null,
  },
  reducers: {},
  extraReducers: builder => {
    // movies popular
    builder.addCase(getMoviesPopularThunk.pending, state => {
      state.loading = true;
      state.error = null;
      state.popular = [];
    });
    builder.addCase(getMoviesPopularThunk.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.popular = payload;
      state.error = null;
    });
    builder.addCase(getMoviesPopularThunk.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = `${payload}`;
    });

    // movies top rate
    builder.addCase(getMoviesTopRateThunk.pending, state => {
      state.loading = true;
      state.error = null;
      state.topRate = [];
    });
    builder.addCase(getMoviesTopRateThunk.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.topRate = payload;
      state.error = null;
    });
    builder.addCase(getMoviesTopRateThunk.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = `${payload}`;
    });

    builder.addCase(getMovieDetailThunk.pending, state => {
      state.loading = true;
      state.error = null;
      state.detail = null;
    });
    builder.addCase(getMovieDetailThunk.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.detail = payload;
      state.error = null;
    });
    builder.addCase(getMovieDetailThunk.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = `${payload}`;
    });

    builder.addCase(getMovieCreditsThunk.pending, state => {
      state.loading = true;
      state.error = null;
      state.credits = null;
    });
    builder.addCase(getMovieCreditsThunk.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.credits = payload;
      state.error = null;
    });
    builder.addCase(getMovieCreditsThunk.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = `${payload}`;
    });
  },
});
