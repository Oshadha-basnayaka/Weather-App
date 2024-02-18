import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Search} from "./view/component/search/Search";
import {Current} from "./view/component/Current/Current";
import {DefaultLayout} from "./view/component/DefaultLayout/DefaultLayout";

function App() {
  return ( <BrowserRouter>
          <Routes>
              <Route path="/*"
                     Component={DefaultLayout}>
              </Route>
          </Routes>
      </BrowserRouter>


  );
}

export default App;
