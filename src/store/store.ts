import { configureStore } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import  itemSlice  from './ItemSlice'
import modalSlice from './modalSlice'
const persistConfig = {
	key: "root",
	storage,
};
const persistedReducer = persistReducer(persistConfig, itemSlice);
export const store = configureStore({
  reducer: {
    modal:modalSlice,
    items:persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})
export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch