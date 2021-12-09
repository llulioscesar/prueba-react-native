import {createAsyncThunk} from '@reduxjs/toolkit';
import {MovieService} from '../../services/movies';
import {Credits, Movie, MovieDetail} from '../../types/data';

export const getMoviesPopularThunk = createAsyncThunk<Movie[], number, {}>(
  'movies/get_popular',
  async (page: number, {rejectWithValue}) => {
    try {
      return (await MovieService.getPopular(page)).results;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message || err.message);
    }
  },
);

export const getMoviesTopRateThunk = createAsyncThunk<Movie[], number, {}>(
  'movies/get_top_rate',
  async (page: number, {rejectWithValue}) => {
    try {
      return (await MovieService.getTopRate(page)).results;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message || err.message);
    }
  },
);

export const getMovieDetailThunk = createAsyncThunk<MovieDetail, number, {}>(
  'movies/get_detail',
  async (id: number, {rejectWithValue}) => {
    try {
      return await MovieService.getDetail(id);
    } catch (err: any) {
      return rejectWithValue(err.response.data.message || err.message);
    }
  },
);

export const getMovieCreditsThunk = createAsyncThunk<Credits, number, {}>(
  'movies/get_credits',
  async (id: number, {rejectWithValue}) => {
    try {
      return await MovieService.getCredits(id);
    } catch (err: any) {
      return rejectWithValue(err.response.data.message || err.message);
    }
  },
);
