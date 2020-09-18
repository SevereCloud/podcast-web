import React, { useEffect, useState } from '../../../web_modules/react.js';
import { Button, Group, Card, CardGrid, Separator, Spinner } from '../../../web_modules/@vkontakte/vkui.js';
import { Icon24Play, Icon24Pause, Icon24Music, Icon24ArrowUturnLeftOutline } from '../../../web_modules/@vkontakte/icons.js';
import { Icon24ChartDown, Icon24ChartUp, Icon24Cut } from '../icons/index.js';
import WaveSurfer from '../../../web_modules/wavesurferjs.js';
import TimelinePlugin from './plugins/timeline.js';
import RegionsPlugin from './plugins/regions/index.js';
import { createAudioCtx, createAudioBufferFromFile, audioBufferSlice } from './audioUtils.js';

/* eslint-disable */
const AudioEditor = ({
  podcast
}) => {
  const {
    audioFile
  } = podcast;
  const [isBlobLoading, setIsBlobLoading] = useState(true);
  const [isEditable, setIsEditable] = useState(false);
  const [currentBuffer, setCurrentBuffer] = useState(null);
  const [editStory, setEditStory] = useState([]);
  const [shouldMusicPlay, setShouldMusicPlay] = useState(false);
  const [didMount, setDidMount] = useState(false);
  const [selectionRegion, setSelectionRegion] = useState(null); // eslint-disable-next-line

  const [wavesurfer, setWavesurfer] = useState(null);
  useEffect(() => {
    if (!didMount) {
      const wavesurfer = WaveSurfer.create({
        barWidth: 2,
        barRadius: 2,
        barGap: 4,
        barMinHeight: 2,
        barHeight: 0.6,
        cursorWidth: 1,
        cursorColor: 'var(--dynamic_red)',
        container: '#waveform',
        backend: 'WebAudio',
        height: 96,
        progressColor: '#3F8AE0',
        waveColor: '#3F8AE0',
        responsive: true,
        // waveColor: '#EFEFEF',
        //cursorColor: 'transparent',
        plugins: [TimelinePlugin.create({
          container: '#timeline',
          labelPadding: 0,
          timeInterval: pxPerSec => {
            if (pxPerSec >= 25) {
              return 1;
            } else if (pxPerSec * 5 >= 25) {
              return 5;
            } else if (pxPerSec * 15 >= 25) {
              return 10;
            }

            return Math.ceil(0.5 / pxPerSec) * 60;
          },
          unlabeledNotchColor: '#99a2ad',
          primaryFontColor: '#99a2ad',
          secondaryFontColor: '#99a2ad',
          fontSize: 9,
          height: 26,
          notchPercentHeight: 33
        }), RegionsPlugin.create({})]
      });
      wavesurfer.loadBlob(audioFile); // initial buffer
      // create audio context

      const ctx = createAudioCtx();
      createAudioBufferFromFile(audioFile, ctx, buffer => {
        setCurrentBuffer(buffer);
      });
      wavesurfer.on('ready', () => {
        setIsBlobLoading(false);
      });
      wavesurfer.on('interaction', () => {
        // be sure that only one region is created
        if (Object.keys(wavesurfer.regions.list).length === 0) {
          const selectionReg = wavesurfer.addRegion({
            start: 0,
            end: wavesurfer.getDuration(),
            color: 'rgba(0, 0, 0, 0,1)',
            handleStyle: {
              left: {
                backgroundColor: 'rgb(63, 138, 224)',
                width: '6px'
              },
              right: {
                backgroundColor: 'rgb(63, 138, 224)',
                width: '6px'
              }
            }
          });
          selectionReg.on('update-end', () => {
            // make a desicion if we can edit audio
            if (selectionRegion && wavesurfer) {
              const selectedStart = selectionRegion.start === 0;
              const selectedEnd = selectionRegion.end === wavesurfer?.getDuration();

              if (selectedStart && selectedEnd && isEditable) {
                setIsEditable(false);
              }
            } else if (!isEditable) {
              setIsEditable(true);
            }
          });
          setSelectionRegion(selectionReg);
        }
      });
      setDidMount(true);
      setWavesurfer(wavesurfer);
    }

    if (wavesurfer) {
      if (shouldMusicPlay) {
        wavesurfer.play();
      } else if (wavesurfer.isPlaying()) {
        wavesurfer.pause();
      }
    } // stop playing podcast on unmoun


    return () => {
      if (wavesurfer && wavesurfer.isPlaying()) {
        wavesurfer.pause();
      }
    };
  }, [shouldMusicPlay, wavesurfer]);

  const cutAudio = () => {
    console.log('wefwfewef cut cut cut');

    if (selectionRegion && wavesurfer) {
      setIsBlobLoading(true); // get region positions and remove it

      const start = selectionRegion.start;
      const end = selectionRegion.end;
      selectionRegion.remove();
      setSelectionRegion(null);
      setIsEditable(false); // create audio context

      const ctx = createAudioCtx();
      createAudioBufferFromFile(audioFile, ctx, buffer => {
        // slice buffer
        const sllicedBuffer = audioBufferSlice(ctx, buffer, start, end); // add history record

        setEditStory([...editStory, currentBuffer]);
        setCurrentBuffer(sllicedBuffer); // load buffer to wavesurfer

        wavesurfer.stop();
        wavesurfer.backend.load(sllicedBuffer);
        wavesurfer.drawBuffer();
        wavesurfer.isReady = true;
        wavesurfer.fireEvent('ready');
        wavesurfer.clearRegions();
      });
    }
  };

  const undoCutAudio = () => {
    if (editStory.length > 0 && wavesurfer) {
      const prevBuffer = editStory[editStory.length - 1];
      wavesurfer.backend.load(prevBuffer);
      wavesurfer.drawBuffer();
      wavesurfer.isReady = true;
      wavesurfer.fireEvent('ready');

      if (selectionRegion) {
        selectionRegion.remove();
        setSelectionRegion(null);
        setIsEditable(false);
      }

      wavesurfer.clearRegions(); // new story

      setEditStory([...editStory.slice(0, editStory.length - 1)]);
    }
  };

  const editStyles = isEditable ? {} : {
    opacity: 0.5,
    pointerEvents: 'none'
  };
  const storyStyles = editStory.length > 0 ? {} : {
    opacity: 0.5,
    pointerEvents: 'none'
  };
  return /*#__PURE__*/React.createElement(Group, {
    separator: "hide"
  }, /*#__PURE__*/React.createElement(CardGrid, null, /*#__PURE__*/React.createElement(Card, {
    size: "l",
    mode: "outline"
  }, /*#__PURE__*/React.createElement("div", {
    id: "timeline",
    style: {
      height: 26,
      background: 'var(--field_background)'
    },
    className: "timeline-border"
  }), /*#__PURE__*/React.createElement(Separator, {
    wide: true
  }), /*#__PURE__*/React.createElement("div", {
    id: "waveform",
    style: {
      height: 96,
      background: 'var(--field_background)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8
    }
  }, isBlobLoading && /*#__PURE__*/React.createElement(Spinner, {
    size: "medium",
    style: {
      minHeight: 44
    }
  }), !isBlobLoading && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      width: 44
    },
    before: shouldMusicPlay ? /*#__PURE__*/React.createElement(Icon24Pause, null) : /*#__PURE__*/React.createElement(Icon24Play, null),
    onClick: () => setShouldMusicPlay(!shouldMusicPlay),
    size: "l"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    style: {
      width: 44,
      marginRight: 4,
      ...editStyles
    },
    before: /*#__PURE__*/React.createElement(Icon24Cut, null),
    onClick: cutAudio,
    size: "l",
    mode: "secondary"
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      width: 44,
      ...storyStyles
    },
    before: /*#__PURE__*/React.createElement(Icon24ArrowUturnLeftOutline, null),
    onClick: undoCutAudio,
    size: "l",
    mode: "secondary"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    style: {
      width: 44,
      marginRight: 4
    },
    before: /*#__PURE__*/React.createElement(Icon24Music, null),
    size: "l",
    mode: "secondary"
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      width: 44,
      marginRight: 4
    },
    before: /*#__PURE__*/React.createElement(Icon24ChartUp, null),
    size: "l",
    mode: "secondary"
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      width: 44
    },
    before: /*#__PURE__*/React.createElement(Icon24ChartDown, null),
    size: "l",
    mode: "secondary"
  })))))));
};

export default AudioEditor;
//# sourceMappingURL=AudioEditor.js.map
