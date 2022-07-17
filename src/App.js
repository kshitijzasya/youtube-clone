import React from 'react';
import './App.css';
import Header from './components/header/Header';
import SideBar from './components/Sidebar/SideBar';
import RecommendedVideos from './components/recommended/RecommendedVideos';
import SearchPage from './components/SearchPage/SearchPage';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const Main = _ =>  (<div className="flex">
<SideBar />
<RecommendedVideos />
</div>)

const Search = _ => <div className="flex">
<SideBar />
<SearchPage />
</div>;

const VideoPage = _ => (<div className="flex">
  <VideoPlayer />
</div>)

function App() {

  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/video/:videoId' element={<VideoPage />} />
          <Route path='/search/:searchQuery' element={<Search />}/>
          <Route path='/' element={<Main />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;