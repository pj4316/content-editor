import { WaveSurferPlayer } from "@/components/WaveSurferPlayer";
import {Box, Button, List, ListItem} from "@mui/material";
import TimelinePlugin from "wavesurfer.js";

export default function SoundModule() {
  return (
      <Box
      >
        <WaveSurferPlayer
            height={100}
            waveColor="rgb(200, 0, 200)"
            progressColor="rgb(100,0,100)"
            url={"https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"}
        />
      </Box>
  )
}
