import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BoardListContainer from "./pages/freeSecretBoard/BoardListContainer";
import HomeContainer from "./pages/home/HomeContainer";
import DefaultLayout from "./components/layout/DefaultLayout";

function App() {
  return (
      <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomeContainer/>}/>
            <Route path="/board" element={<BoardListContainer/>} />
          </Route>
      </Routes>
  );
}

export default App
