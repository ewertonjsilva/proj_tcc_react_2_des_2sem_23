// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
//import rootReducer from './reducers'; // Criaremos isso em breve
import counterReducer from './reducers/carrinho';

// const store = configureStore(
//   {
//     counter: counterReducer,
//   }
// )

// export default store;

// https://react-redux.js.org/tutorials/quick-start



export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
