
export const userReducer = (state='Sara', action) => {
	if (action.type === 'updateUser'){
		return action.payload;
	}
	return state;
}
