import axios from 'axios';

export default function({ store, route, redirect, req }) {
  let userInfo = store.state.userInfo;
  if (userInfo) {
    axios.defaults.headers['Authorization'] = userInfo;
  }
}
