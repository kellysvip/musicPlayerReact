import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import useMusicPlayer from "../hooks/useMusicPlayer.js";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
const TrackList = () => {
  const { trackList, playTrack, isPlaying, currentTrackIndex } = useMusicPlayer();
  return (
    <List
      className="music-list"
      sx={{
        width: "100%",
        maxWidth: 400,
        bgcolor: "background.paper",
        borderRadius: "5px",
        mb: 3,
        background: "rgba(255,255,255,0.8)",
      }}
    >
      {trackList.map((track, index) => (
        <ListItem onClick={() => playTrack(index)} key={index}>
          <ListItemAvatar>
            <Avatar>
              {isPlaying && currentTrackIndex === index ? <MusicNoteIcon /> : <HeadphonesIcon />}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={track.name} secondary={track.type} />
        </ListItem>
      ))}
    </List>
  );
};

export default TrackList;
