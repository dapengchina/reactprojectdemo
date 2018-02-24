import store from '../stores/userStore';


const action =(state,type) => store.dispatch({state,type});

export default action;