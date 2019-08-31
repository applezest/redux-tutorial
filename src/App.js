import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <p>user: {props.user}</p>
      <button onClick={() => props.updateUser('kim')}>change name</button>
    </div>
  );
}


// store에 있는 state를 props로 mapping
const mapStateToProps = (state) => ({
  //왼쪽은 props, 오른쪽은 state = {product: xxx, user: yyy}
  user: state.user
})

// action을 dispatch하는 펑션을 props로 mapping
const mapActionToProps = (dispatch) => ({
  // 왼쪽은 props, 오른쪽은 action
  updateUser: (name) => dispatch(updateUser(name))
})

export default connect(mapStateToProps, mapActionToProps)(App);
