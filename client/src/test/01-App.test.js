import React from "react";
// import { configure, mount } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import { App } from "../App.js";
import Home from "../pages/Home"
import Country from "../pages/Country"
import AddActivity from "../pages/AddActivity"
import LandingPage from "../pages/LandingPage"
import NoPage from"../pages/NoPage"


configure({ adapter: new Adapter() });

xdescribe("App", () => {
  let store;
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore([]);
  });

  xdescribe("El componente Nav debe renderizar en todas las rutas.", () => {
   
    it('Debería renderizarse en la ruta "/otraRuta"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/otraRuta"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
    expect(wrapper.find(LandingPage)).toHaveLength(0);
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(Country)).toHaveLength(0);
    expect(wrapper.find(AddActivity)).toHaveLength(0);
    expect(wrapper.find(NoPage)).toHaveLength(1);
    });
  });

  it('El componente LandingPage debe renderizar en la ruta / (Sólo en la ruta "/")', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(LandingPage)).toHaveLength(1);
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(Country)).toHaveLength(0);
    expect(wrapper.find(AddActivity)).toHaveLength(0);
    expect(wrapper.find(NoPage)).toHaveLength(0);
  });

  it('El componente Home debe renderizar en la ruta /home (Sólo en la ruta "/home")', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/home"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(LandingPage)).toHaveLength(0);
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(Country)).toHaveLength(0);
    expect(wrapper.find(AddActivity)).toHaveLength(0);
    expect(wrapper.find(NoPage)).toHaveLength(0);
  });

  it('El componente Home debe renderizar en la ruta /country (Sólo en la ruta "/country")', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/country"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(LandingPage)).toHaveLength(0);
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(Country)).toHaveLength(1);
    expect(wrapper.find(AddActivity)).toHaveLength(0);
    expect(wrapper.find(NoPage)).toHaveLength(0);
  });

  it("El componente AddActivity debe renderizar en la ruta /AddActivity ", () => {
    const container = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/AddActivity"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(LandingPage)).toHaveLength(0);
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(Country)).toHaveLength(0);
    expect(wrapper.find(AddActivity)).toHaveLength(1);
    expect(wrapper.find(NoPage)).toHaveLength(0);
  });



});