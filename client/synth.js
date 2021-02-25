import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Octave from "./octave";
import * as Tone from 'tone';


const Synth = () => {
  const [waveType, setWaveType] = useState('sine');
  const [lowestOctave, setLowestOctave] = useState(3);
  const [volume, setVolume] = useState(-6);
  const [pitch, setPitch] = useState(0);
  const [bpm, setBpm] = useState(120);
  const [voiceMode, setVoiceMode] = useState('mono');

  const mainVol = new Tone.Volume(volume);
  Tone.Transport.bpm.value = bpm;
  // add metronome to test

  let synth;
  switch(voiceMode) {
    case 'mono':
      synth = new Tone.MonoSynth({
        oscillator: {
          type: waveType
        }
      }).chain(mainVol, Tone.Destination);
      break;
    case 'poly':
      synth = new Tone.PolySynth(Tone.Synth, {
        oscillator: {
          type: waveType
        }
      }).chain(mainVol, Tone.Destination);
      break;
    default:
      synth = new Tone.MonoSynth({
        oscillator: {
          type: waveType
        }
      }).chain(mainVol, Tone.Destination);
  }

  const adjustMainVol = (evt) => {
    setVolume(evt.target.value);
  };

  const adjustTempo = (evt) => {
    setBpm(evt.target.value);
  };

  const adjustPitch = (evt) => {
    setPitch(evt.target.value);
    synth.set({ detune: evt.target.value });
    // successfully resetting pitch, but but has no audible effect
  };

  const selectWaveType = (evt) => {
    setWaveType(evt.target.value);
  };

  const selectLowestOctave = (evt) => {
    setLowestOctave(parseInt(evt.target.value));
  };

  function selectInstrument(evt) {
    setVoiceMode(evt.target.value);
  }

  return (
    <>
    <ul id='navbar'>
      <li><Link to='/'>back</Link></li>
      <li><button>how-to</button></li>
    </ul>
    <div className='synth'>
      <div className='controls flex'>
        <div id='main' className='section flex'>
          <label htmlFor='main-vol'>vol</label>
          <input
            id='main-vol'
            type='range'
            min={-16}
            max={4}
            value={volume}
            onChange={adjustMainVol}
          />
          <label htmlFor='main-tempo'>tempo</label>
          <input
            id='main-tempo'
            type='range'
            min={80}
            max={200}
            value={bpm}
            onChange={adjustTempo}
          />
           <label htmlFor='select-octave'>PITCH ({pitch}c)</label>
            <input
              id='pitch'
              type='range'
              min={-1200}
              max={1200}
              onChange={adjustPitch}
              value={pitch}
            />
        </div>
        <div id='main' className='section flex'>
            <label htmlFor='select-wave'>VOICE MODE</label>
            <select
              id='select-wave'
              onChange={selectInstrument}
              value={voiceMode}
            >
              <option>mono</option>
              <option>poly</option>
            </select>
            <label htmlFor='select-wave'>WAVE</label>
            <select
              id='select-wave'
              onChange={selectWaveType}
              value={waveType}
            >
                <option>sine</option>
                <option>square</option>
                <option>triangle</option>
                <option>sawtooth</option>
            </select>
            <label htmlFor='select-octave'>OCTAVE</label>
            <select
              id='select-octave'
              onChange={selectLowestOctave}
              value={lowestOctave}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
        </div>
        <div id='filter' className='section flex'>
          <label htmlFor='filter-adjust'>cutoff</label>
            <input
              id='filter-adjust'
              type='range'
              min={80}
              max={200}
              // onChange={adjustFilter}
            />
        </div>
        <div id='envelope' className='section flex'>
          <label htmlFor='attack'>attack</label>
            <input
              id='attack'
              type='range'
            />
            <label htmlFor='decay'>decay</label>
            <input
              id='decay'
              type='range'
            />
            <label htmlFor='attack'>sustain</label>
            <input
              id='sustain'
              type='range'
            />
            <label htmlFor='attack'>release</label>
            <input
              id='release'
              type='range'
            />
        </div>
      </div>
      <ul className='keyboard flex'>
        <Octave octave={lowestOctave} setLowestOctave={setLowestOctave} synth={synth} />
        <Octave octave={lowestOctave + 1} setLowestOctave={setLowestOctave} synth={synth} />
        <Octave octave={lowestOctave + 2} setLowestOctave={setLowestOctave} synth={synth}/>
      </ul>
    </div>
    </>
  );
};

export default Synth;
