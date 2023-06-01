import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
  favoriteFoods:any [];
  favoriteFoodsId: number[];
};

const initialState: CounterState = {
  favoriteFoods: [],
  favoriteFoodsId:[],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavoriteFood: (state, action: PayloadAction<any>) => {
      state.favoriteFoodsId =[...state.favoriteFoodsId, action.payload.idMeal];
      state.favoriteFoods =[...state.favoriteFoods, action.payload];
    },
    
      deleteFavoriteFood: (state, action: PayloadAction<any>) => {
        state.favoriteFoodsId =state.favoriteFoodsId.filter(
          item => item !==action.payload.idMeal );
        state.favoriteFoods = state.favoriteFoods.filter(
          item => item.idMeal!==action.payload.idMeal);
      },
  },
});

export const {addFavoriteFood,deleteFavoriteFood} = favoriteSlice.actions;

export default favoriteSlice.reducer;
