import {configureStore} from '@reduxjs/toolkit';
import favoriteReducer from '../screens/favorites/redux/favoriteSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

export const store = configureStore({
  reducer: {
    favorite: persistReducer( persistConfig,favoriteReducer),
  },
});

export const  persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
