import { call, takeEvery, put } from "redux-saga/effects";
import { fetchData } from "./dataSlice";
import { sagaActions } from "./sagaActions";
import axios from "axios";

let callAPI = async () => {
	return await axios.post(
		"https://graphqlzero.almansi.me/api",
		{
			query: `{
                    user(id: 1) {
                    id
                    username
                    email
                    address {
                        geo {
                            lat
                            lng
                        }
                    }
                }
            }`,
		},
		{
			headers: {
				"Content-Type": "application/json",
			},
		},
	);
};

export function* fetchDataSaga() {
	try {
		//@ts-ignore
		let result = yield call(() => {
			return callAPI();
		});

		yield put(fetchData(result.data.data.user));
	} catch (e) {
		yield put({ type: "TODO_FETCH_FAILED" });
	}
}

export function* rootSaga() {
	yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
