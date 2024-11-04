import React, { useState, useMemo, createContext, useReducer } from "react";
import Page from "./component/page";
import PostList from "./container/post-list";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Logo from "./component/logo";

export const THEME_TYPE = {
  LIGHT : 'light',
  DARK : 'dark',
};

export const ThemeContext = createContext(null);

const THEME_ACTION_TYPE = {
  TOGGLE : "toggle",
};

const themeReducer = (state, action) => {
  switch(action.type) {
    case THEME_ACTION_TYPE.TOGGLE:
      return state === THEME_TYPE.DARK ? THEME_TYPE.LIGHT : THEME_TYPE.DARK;
    default:
      return state;
  }
}

function App() {
  const [currentTheme, dispatch] = useReducer(themeReducer, THEME_TYPE.LIGHT);

  const theme = useMemo(
    () => ({
      value: currentTheme,
      toggle : () => dispatch({type : THEME_ACTION_TYPE.TOGGLE}),
    }), [currentTheme]
  );
  return (
    <Page>
      <Header/>
      <Logo/>
      <ThemeContext.Provider value={theme}>
        <PostList />
      </ThemeContext.Provider>
      <Footer/>
    </Page>
  );
}

export default App;
