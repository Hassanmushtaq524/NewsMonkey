import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';

const App = () => {

  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API;


  return (
    <>
      <BrowserRouter>
        <LoadingBar
          color='purple'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar title="NewsMonkey" />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key={"general"} country={"us"} pageSize={9} apiKey={apiKey} category={"general"} />}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} key={"sports"} country={"us"} pageSize={9} apiKey={apiKey} category={"sports"} />}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} key={"technology"} country={"us"} pageSize={9} apiKey={apiKey} category={"technology"} />}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} key={"business"} country={"us"} pageSize={9} apiKey={apiKey} category={"business"} />}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} key={"health"} country={"us"} pageSize={9} apiKey={apiKey} category={"health"} />}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} key={"science"} country={"us"} pageSize={9} apiKey={apiKey} category={"science"} />}></Route>
        </Routes>


      </BrowserRouter>

    </>
  )

}

export default App
