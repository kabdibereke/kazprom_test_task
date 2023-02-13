import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
	id: string;
	username: string;
	email: string;
	address: {
		geo: {
			lat: number;
			lng: number;
		};
	};
}
interface IUserProps {
	user: IUser[];
}

const initialState: IUserProps = {
	user: [],
};

const dataSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		fetchData: (state, action) => {
			state.user.push(action.payload);
		},
	},
});

export const { fetchData } = dataSlice.actions;
export default dataSlice.reducer;
