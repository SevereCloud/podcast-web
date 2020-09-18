/* eslint-disable */
export const createAudioCtx = () => {
  const AudioCtxClass = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
  const audioCtx = new AudioCtxClass();
  return audioCtx;
};
export const createAudioBufferFromFile = (file, audioCtx, onLoad) => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);

  reader.onload = e => {
    const res = e.target?.result;
    audioCtx.decodeAudioData(res, onLoad);
  };
};
export const audioBufferSlice = (audioCtx, buffer, begin, end) => {
  const audioContext = audioCtx;
  let error = null;
  const duration = buffer.duration;
  const channels = buffer.numberOfChannels;
  const rate = buffer.sampleRate;

  if (begin < 0) {
    error = new RangeError('begin time must be greater than 0');
  }

  if (end > duration) {
    error = new RangeError('end time must be less than or equal to ' + duration);
  }

  const startOffset = rate * begin;
  const endOffset = rate * end;
  const frameCount = endOffset - startOffset;
  let newArrayBuffer;

  try {
    newArrayBuffer = audioContext.createBuffer(channels, endOffset - startOffset, rate);
    const anotherArray = new Float32Array(frameCount);
    const offset = 0;

    for (let channel = 0; channel < channels; channel++) {
      buffer.copyFromChannel(anotherArray, channel, startOffset);
      newArrayBuffer.copyToChannel(anotherArray, channel, offset);
    }
  } catch (e) {
    error = e;
    console.error(e);
  }

  return newArrayBuffer;
};
export const createStoryForSlice = (audioCtx, buffer, begin, end) => {
  const sllicedBuffer = audioBufferSlice(audioCtx, buffer, begin, end);
  const leftBuff = audioBufferSlice(audioCtx, buffer, 0, begin);
  const rightBuff = audioBufferSlice(audioCtx, buffer, end, buffer.duration);
  return [sllicedBuffer, {
    leftPart: leftBuff,
    rigftPart: rightBuff
  }];
};
export const createAudioFromStory = (currBuffer, storyPiece) => {
  let restoredBuffer;
  let ctx = createAudioCtx();

  if (storyPiece.leftPart) {
    restoredBuffer = concatAudioBuffers(ctx, [storyPiece.leftPart, currBuffer]);
  }

  if (storyPiece.rigftPart) {
    restoredBuffer = concatAudioBuffers(ctx, [currBuffer, storyPiece.rigftPart]);
  }

  return restoredBuffer;
};
export const concatAudioBuffers = (audioCtx, buffers) => {
  const channels = buffers[0].numberOfChannels;
  let output = audioCtx.createBuffer(channels, buffers.map(buffer => buffer.length).reduce((a, b) => a + b, 0), buffers[0].sampleRate);

  for (let channel = 0; channel < channels; channel++) {
    let offset = 0;
    buffers.map(buffer => {
      output.getChannelData(channel).set(buffer.getChannelData(channel), offset);
      offset += buffer.length;
    });
  }

  return output;
};
export const layerAudioBuffers = (audioCtx, buffers) => {
  const channels = buffers[0].numberOfChannels;
  let output = audioCtx.createBuffer(channels, buffers.map(buffer => buffer.length).reduce((a, b) => a + b, 0), buffers[0].sampleRate);

  for (let channel = 0; channel < channels; channel++) {
    buffers.map(buffer => {
      for (let i = buffer.getChannelData(channel).length - 1; i >= 0; i--) {
        output.getChannelData(channel)[i] += buffer.getChannelData(channel)[i];
      }
    });
  }

  return output;
};
//# sourceMappingURL=audioUtils.js.map
