const signUpData = (state = {}, action) => {
	console.log(action)
	switch (action.type) {
		case 'SIGN_UP':
				return {
					...action.payload
				}
		case 'SIGN_UP_SUCCESS':
				return {
					...action.payload
				}
		default:
		return state;
	}
};
export default signUpData;
