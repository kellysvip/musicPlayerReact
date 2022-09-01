import React, { useState } from "react";
import Track1 from "./track1.mp3";
import Track2 from "./track2.mp3";
import Track3 from "./track3.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Run Now",
      type: "Son Tung M-TP",
      file: Track1,
    },
    {
      name: "Ngã Tư Không Đèn",
      type: "Trang, Khoa Vũ",
      file: Track2,
    },
    {
      name: "Pink Venom",
      type: "Đen Hồng Band",
      file: Track3,
    },
  ],
  currentTrackIndex: 0,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
