
//store생성
import {createStore} from "redux";
import {allReducers} from "./reducers";

export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store);

// action은 객체, action type은 string
const action = {
	type: 'changeState',
	payload: {
		newState: 'new state'
	}
}

console.log(store.getState());
store.dispatch(action)
console.log(1)
console.log(store.getState());
console.log('2');
