import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <>
        <Header />
        <AppBody>
          <Sidebar />
          <Switch>
            <Route path="/" exact>
              <Chat />
            </Route>
          </Switch>
        </AppBody>

        </>
      </Router>
    </div>
  );
}

export default App;

// const AppLoadingContents = styled.div`
//   text-align: center;
//   padding-bottom: 100px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   > img {
//     height: 100px;
//     padding: 20px;
//     margin-bottom: 40px;
//   }
// `;

// const AppLoading = styled.div`
//   display: grid;
//   place-items: center;
//   height: 100vh;
//   width: 100%;
// `;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;


