import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from './Store';

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  const buttonStyle =
    theme === 'light'
      ? { backgroundColor: '#ffffff', color: '#000000' }
      : { backgroundColor: '#000000', color: '#ffffff' };

  return (
    <button onClick={handleThemeToggle} style={buttonStyle}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default ThemeToggle;
