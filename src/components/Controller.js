import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import useMusicPlayer from "../hooks/useMusicPlayer";
import PauseIcon from "@mui/icons-material/Pause";

const Controller = () => {
  const theme = useTheme();
  const {
    currentTrackName,
    currentTrackType,
    isPlaying,
    togglePlay,
    playNextTrack,
    playPreviousTrack,
  } = useMusicPlayer();

  const handlePlayPause = () => {
    togglePlay();
  };

  const hanldeNext = () => {
    playNextTrack();
  };

  const hanldePrevious = () => {
    playPreviousTrack();
  };
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        width: 400,
        background: "rgba(255,255,255,0.8)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CardContent
          sx={{
            flex: "1 0 auto",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{ display: "flex", justifyContent: "center" }}
            component="div"
            variant="h5"
          >
            {currentTrackName ? currentTrackName : "Cold Gin"}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {currentTrackType ? currentTrackType : "---"}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pl: 1,
            pb: 1,
            justifyContent: "center",
          }}
        >
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon onClick={hanldePrevious} />
            ) : (
              <SkipPreviousIcon onClick={hanldePrevious} />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            {isPlaying ? (
              <PauseIcon
                onClick={handlePlayPause}
                sx={{ height: 38, width: 38 }}
              />
            ) : (
              <PlayArrowIcon
                onClick={handlePlayPause}
                sx={{ height: 38, width: 38 }}
              />
            )}
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon onClick={hanldeNext} />
            ) : (
              <SkipNextIcon onClick={hanldeNext} />
            )}
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default Controller;
