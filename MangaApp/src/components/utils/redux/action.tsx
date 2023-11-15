// redux/actions.ts
import {Dispatch} from 'redux';
import {
  addToFavoritesAPI,
  removeFromFavoritesAPI,
  fetchFavoritesAPI,
} from './apiService';
import {ToastAndroid} from 'react-native';

// Action Types
const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
const SET_FAVORITES = 'SET_FAVORITES';

// Action Creators
const addToFavoritesSuccess = (mangaId: string, userId: string) => ({
  type: ADD_TO_FAVORITES,
  payload: {mangaId, userId},
});

const removeFromFavoritesSuccess = (favoriteId: string) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: favoriteId,
});
const setFavorites = (favorites: object) => ({
  type: SET_FAVORITES,
  payload: favorites,
});

// Thunks
export const addToFavorites =
  (mangaId: string, userId: string) => async (dispatch: Dispatch) => {
    try {
      // Gọi API để thêm vào danh sách yêu thích
      await addToFavoritesAPI(mangaId, userId);
      dispatch(addToFavoritesSuccess(mangaId, userId));
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

export const removeFromFavorites =
  (favoriteId: string) => async (dispatch: Dispatch) => {
    try {
      // Gọi API để xóa khỏi danh sách yêu thích
      await removeFromFavoritesAPI(favoriteId);
      dispatch(removeFromFavoritesSuccess(favoriteId));
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
  };

export const fetchFavorites =
  (userId: string) => async (dispatch: Dispatch) => {
    try {
      // Gọi API để xóa khỏi danh sách yêu thích
      const response = await fetchFavoritesAPI(userId); // Assuming you have this API function
      console.log("response",)
      if (response.results == true) {
        console.log("response",response.favorites)
        dispatch(setFavorites(response.favorites));
      } else {
        ToastAndroid.show('Lấy dữ liệu không ok', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };
