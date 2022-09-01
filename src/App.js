import "./App.css";
import React from "react";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./components/TrackList";
import Controller from "./components/Controller";
function App() {
  return (
    <div className="App">
      <MusicPlayerProvider>
        <div className="container">
          <TrackList />
          <Controller />
        </div>
      </MusicPlayerProvider>
    </div>
  );
}

export default App;
