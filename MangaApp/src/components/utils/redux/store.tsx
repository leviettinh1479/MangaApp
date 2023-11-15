// redux/store.ts
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

interface AppState {
  favorites: string[];
}

const initialState: AppState = {
  favorites: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FROM_FAVORITES':
      return { ...state, favorites: state.favorites.filter(id => id !== action.payload) };
      case 'SET_FAVORITES':
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;