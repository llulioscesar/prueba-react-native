import {API_KEY} from 'react-native-dotenv';
import {Credits, MovieDetail, MoviePaginate} from '../types/data';
import {Service} from './service';
import {ServiceConfig} from './serviceConfig';

class Movie extends Service {
  getDetail = (id: number): Promise<MovieDetail> => {
    return this.get<MovieDetail>(
      `/3/movie/${id}?api_key=${API_KEY}&language=es-MX`,
    ).then(result => this.success(result));
  };

  getCredits = (id: number): Promise<Credits> => {
    return this.get<Credits>(
      `/3/movie/${id}/credits?api_key=${API_KEY}&language=es-MX`,
    ).then(result => this.success(result));
  };

  getPopular = (page: number = 1): Promise<MoviePaginate> => {
    return this.get<MoviePaginate>(
      `/3/movie/popular?api_key=${API_KEY}&language=es-MX&page=${page}`,
    ).then(result => this.success(result));
  };

  getTopRate = (page: number = 1): Promise<MoviePaginate> => {
    return this.get<MoviePaginate>(
      `/3/movie/top_rated?api_key=${API_KEY}&language=es-MX&page=${page}`,
    ).then(result => this.success(result));
  };
}

export const MovieService = new Movie(ServiceConfig);
