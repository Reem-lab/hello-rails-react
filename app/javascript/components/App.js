import React from "react"
import PropTypes from "prop-types"
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "../configureStore.js";
import Greeting from "./greetings.js";

class App extends React.Component {
  render () {
    return (
    <Provider store={store}>
     <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Greeting /> } />
        </Routes>
     </BrowserRouter>
     </Provider> 
    );
  }
}

export default App
