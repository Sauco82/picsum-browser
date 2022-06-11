import { render as originalRender } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import { store } from "./store/store";


function render(ui, renderOptions = {}){
  const  wrapper = ({children}) => <Provider store={store}>{children}</Provider>;

  return originalRender(ui, {wrapper, store, ...renderOptions});
}

const renderWithRouter = (ui, history, renderOptions) => {
  const wrapper = ({children}) => (
    <Provider store={store}>
      <Router location={history.location} navigator={history} >
        {children}
      </Router>
    </Provider>
  );

  return originalRender(ui, {wrapper, store, ...renderOptions});
};

export * from "@testing-library/react";
export { render, renderWithRouter };