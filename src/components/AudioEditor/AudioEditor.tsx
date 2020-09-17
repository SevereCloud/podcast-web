import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  Button,
  Group,
  Card,
  CardGrid,
  Separator,
  Text,
} from '@vkontakte/vkui';
import {
  Icon24Play,
  Icon24Pause,
  Icon24Music,
  Icon24ArrowUturnLeftOutline,
} from '@vkontakte/icons';
import { Icon24ChartDown, Icon24ChartUp, Icon24Cut } from '../icons';

import type { Podcast } from '../../types';
import WaveSurfer from 'wavesurfer.js';
import TimelinePlugin from './plugins/timeline';
import RegionsPlugin from './plugins/regions';
import {
  createAudioCtx,
  createAudioBufferFromFile,
  audioBufferSlice,
  concatAudioBuffers,
} from './audioUtils';

interface IAudioEditorProps {
  podcast: Podcast;
}

/* eslint-disable */

const AudioEditor: FunctionComponent<IAudioEditorProps> = ({ podcast }: IAudioEditorProps) => {
  const { audioFile } = podcast;
  const [isBlobLoading, setIsBlobLoading] = useState<boolean>(true);
  const [shouldMusicPlay, setShouldMusicPlay] = useState<boolean>(false);
  const [didMount, setDidMount] = useState<boolean>(false);
  const [selectionRegion, setSelectionRegion] = useState<any>(null);
  // eslint-disable-next-line
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
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
        plugins: [
          TimelinePlugin.create({
            container: '#timeline',
            labelPadding: 0,
            timeInterval: (pxPerSec: number) => {
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
            notchPercentHeight: 33,
          }),
          RegionsPlugin.create({}),
        ],
      });
      wavesurfer.loadBlob(audioFile!);
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
                width: '6px',
              },
              right: {
                backgroundColor: 'rgb(63, 138, 224)',
                width: '6px',
              },
            },
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
    }

    // stop playing podcast on unmoun
    return () => {
      if (wavesurfer && wavesurfer.isPlaying()) {
        wavesurfer.pause();
      }
    };
  }, [shouldMusicPlay, wavesurfer]);

  const cutAudio = () => {
    if (selectionRegion && wavesurfer) {
      setIsBlobLoading(true);
      // get region positions and remove it
      const start: number = selectionRegion.start;
      const end: number = selectionRegion.end;
      selectionRegion.remove();
      setSelectionRegion(null);
      // create audio context
      const ctx = createAudioCtx();
      createAudioBufferFromFile(
        audioFile!,
        ctx,
        (buffer) => {
          // slice buffer
          const sllicedBuffer = audioBufferSlice(ctx, buffer, start, end)
          // set buffer
          wavesurfer.backend.load(sllicedBuffer);
          wavesurfer.drawBuffer();
          wavesurfer.isReady = true;
          wavesurfer.fireEvent('ready');
        },
      );
    }
  }

  const loadText = wavesurfer
    ? 'Обрезаем...'
    : 'Подготовка редактора (пара секунд)...';

  return (
    <Group separator="hide">
      <CardGrid>
        <Card size="l" mode="outline">
          <div
            id="timeline"
            style={{ height: 26, background: 'var(--field_background)' }}
            className="timeline-border"
          />

          <Separator wide />

          <div
            id="waveform"
            style={{ height: 96, background: 'var(--field_background)' }}
          />

          <div style={{ padding: 8 }}>
            {isBlobLoading && (
              <Text weight="regular" style={{ textAlign: 'center', height: 44 }}>
                {loadText}
              </Text>
            )}
            {!isBlobLoading && (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  style={{ width: 44 }}
                  before={shouldMusicPlay ? <Icon24Pause /> : <Icon24Play />}
                  onClick={() => setShouldMusicPlay(!shouldMusicPlay)}
                  size="l"
                />
                <div>
                  <Button
                    style={{ width: 44, marginRight: 4 }}
                    before={<Icon24Cut />}
                    onClick={cutAudio}
                    size="l"
                    mode="secondary"
                  />
                  <Button
                    style={{ width: 44 }}
                    before={<Icon24ArrowUturnLeftOutline />}
                    size="l"
                    mode="secondary"
                  />
                </div>
                <div>
                  <Button
                    style={{ width: 44, marginRight: 4 }}
                    before={<Icon24Music />}
                    size="l"
                    mode="secondary"
                  />
                  <Button
                    style={{ width: 44, marginRight: 4 }}
                    before={<Icon24ChartUp />}
                    size="l"
                    mode="secondary"
                  />
                  <Button
                    style={{ width: 44 }}
                    before={<Icon24ChartDown />}
                    size="l"
                    mode="secondary"
                  />
                </div>
              </div>
            )}
          </div>
        </Card>
      </CardGrid>
    </Group>
  );
};

export default AudioEditor;
