'use client';
import { useCallback, useEffect, useRef, useState } from "react";
import WaveSurfer from 'wavesurfer.js'
import { Region } from "wavesurfer.js/dist/plugins/plugins/regions.js";
import RegionsPlugin from "wavesurfer.js/dist/plugins/regions.js";

const audiobufferToBlob = require('audiobuffer-to-blob');

type ExtendedWaveSufer = {
  wavesurfer: WaveSurfer | null,
  selectedX: number,
  selectedY: number
}
const useWavesurfer = (containerRef: any, options: any): ExtendedWaveSufer => {
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null)
  const [selectedX, setSelectedX] = useState<number>(0)
  const [selectedY, setSelectedY] = useState<number>(0)

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!containerRef.current) return

    const ws = WaveSurfer.create({
      ...options,
      container: containerRef.current,
    })

    const wsRegions = ws.registerPlugin(RegionsPlugin.create())

    wsRegions.enableDragSelection({
      color: 'rgba(255, 0,0, 0.1)'
    })
    wsRegions.on('region-in', (region: any) => {
      setSelectedX(region.start)
      setSelectedY(region.end)

    })

    wsRegions.on('region-updated', (region: any) => {
      setSelectedX(region.start)
      setSelectedY(region.end)
    })
    setWavesurfer(ws)

    return () => {
      ws.destroy()
    }
  }, [options, containerRef])

  return { wavesurfer, selectedX, selectedY }
}

function createBuffer(originalBuffer: AudioBuffer, duration: number) {
  var sampleRate = originalBuffer.sampleRate
  var frameCount = duration * sampleRate
  var channels = originalBuffer.numberOfChannels
  return new AudioContext().createBuffer(channels, frameCount, sampleRate)
}

function copyBuffer(fromBuffer: AudioBuffer, fromStart: number, fromEnd: number, toBuffer: AudioBuffer, toStart: number) {
  var sampleRate = fromBuffer.sampleRate
  var frameCount = (fromEnd - fromStart) * sampleRate
  for (var i = 0; i < fromBuffer.numberOfChannels; i++) {
    var fromChanData = fromBuffer.getChannelData(i)
    var toChanData = toBuffer.getChannelData(i)
    for (var j = 0, f = Math.round(fromStart * sampleRate), t = Math.round(toStart * sampleRate); j < frameCount; j++, f++, t++) {
      toChanData[t] = fromChanData[f]
    }
  }
}

export const WaveSurferPlayer = (props: any) => {
  const containerRef = useRef<any>()
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const extendedWavesurfer = useWavesurfer(containerRef, props)

  const wavesurfer = extendedWavesurfer.wavesurfer
  // On play button click
  const onPlayClick = useCallback(() => {
    wavesurfer?.isPlaying() ? wavesurfer?.pause() : wavesurfer?.play()
  }, [wavesurfer])

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.key === 'Delete') {
      console.log('del key pressed: ', event.key, extendedWavesurfer.selectedY, extendedWavesurfer.selectedX)
      var originalBuffer = wavesurfer?.getDecodedData()
      if (originalBuffer) {
        var cuttedDuration = originalBuffer.duration - (extendedWavesurfer.selectedY - extendedWavesurfer.selectedX)
        var newBuffer = createBuffer(originalBuffer, cuttedDuration)

        console.log(`duration=${originalBuffer.duration}, start=${extendedWavesurfer.selectedX}, end=${extendedWavesurfer.selectedY}`)
        console.log(`length=${originalBuffer.length}, ${originalBuffer.duration * originalBuffer.sampleRate}`)
      }
    }
  }
  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!wavesurfer) return

    document.addEventListener('keydown', keyDownHandler)
    setCurrentTime(0)
    setIsPlaying(false)

    const subscriptions = [
      wavesurfer.on('play', () => setIsPlaying(true)),
      wavesurfer.on('pause', () => setIsPlaying(false)),
      wavesurfer.on('timeupdate', (currentTime) => setCurrentTime(currentTime)),
    ]

    return () => {
      subscriptions.forEach((unsub: any) => unsub())
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [wavesurfer])

  return (
    <>
      <div ref={containerRef} style={{ minHeight: '120px' }} />

      <button onClick={onPlayClick} style={{ marginTop: '1em' }}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      <p>Seconds played: {currentTime}, start={extendedWavesurfer.selectedX}, end={extendedWavesurfer.selectedY}</p>
    </>
  )
}
