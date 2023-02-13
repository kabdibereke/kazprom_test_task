import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga";
import itemSlice from "./ItemSlice";
import modalSlice from "./modalSlice";
import dataSlice from "./dataSlice";
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
const persistConfig = {
	key: "root",
	storage,
};
const persistedReducer = persistReducer(persistConfig, itemSlice);
let sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
	reducer: {
		modal: modalSlice,
		items: persistedReducer,
		users: dataSlice,
	},

	middleware: [
		...getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
		sagaMiddleware,
	],
});
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
