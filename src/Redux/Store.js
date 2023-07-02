import { legacy_createStore as createStore } from "redux";

// store.js

const initialState = {
  theme: 'light',
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export const setTheme = (theme) => 
{
    return {
      type: 'SET_THEME',
      payload: theme,
    };
};


const store = createStore(themeReducer);

export default store;
