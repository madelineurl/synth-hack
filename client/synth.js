import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Octave from './octave';
import * as Tone from 'tone';
import MainControls from './main-controls';
import OscillatorControls from './oscillator-controls';
import Filter from './filter';
import Envelope from './envelope';

const Synth = () => {
  const [waveType, setWaveType] = useState('sine');
  const [lowestOctave, setLowestOctave] = useState(3);
  const [volume, setVolume] = useState(-6);
  const [pitch, setPitch] = useState(0);
  const [bpm, setBpm] = useState(120);
  const [voiceMode, setVoiceMode] = useState('mono');
  const [filterCutoff, setFilterCutoff] = useState(0);
  const [envelope, setEnvelope] = useState({
    attack: 0.6,
    decay: 0.2,
    sustain: 0.5,
    release: 2
  });

  const mainVol = new Tone.Volume(volume);
  Tone.Transport.bpm.value = bpm;
  // add metronome to confirm

  let synth;
  const { attack, decay, sustain, release } = envelope;

  switch(voiceMode) {
    case 'mono':
      synth = new Tone.MonoSynth({
        oscillator: {
          type: waveType
        },
        envelope: {
          attack, decay, sustain, release
        }
      }).chain(mainVol, Tone.Destination);
      break;
    case 'poly':
      synth = new Tone.PolySynth(Tone.Synth, {
        oscillator: {
          type: waveType
        },
        envelope: {
          attack: 0.6,
          decay: 0.2,
          sustain: 0.5,
          release: 2
        }
      }).chain(mainVol, Tone.Destination);
      break;
    default:
      synth = new Tone.MonoSynth({
        oscillator: {
          type: waveType
        },
        envelope: {
          attack: 0.6,
          decay: 0.2,
          sustain: 0.5,
          release: 2
        }
      }).chain(mainVol, Tone.Destination);
  }

  const filter = new Tone.AutoFilter({ frequency: filterCutoff }).toDestination();
  // synth.connect(filter);

  const bindings = {
    'KeyA': `C${lowestOctave}`,
    'KeyW': `C#${lowestOctave}`,
    'KeyS': `D${lowestOctave}`,
    'KeyE': `D#${lowestOctave}`,
    'KeyD': `E${lowestOctave}`,
    'KeyF': `F${lowestOctave}`,
    'KeyT': `F#${lowestOctave}`,
    'KeyG': `G${lowestOctave}`,
    'KeyY': `G#${lowestOctave}`,
    'KeyH': `A${lowestOctave}`,
    'KeyU': `A#${lowestOctave}`,
    'KeyJ': `B${lowestOctave}`,
    'KeyK': `C${lowestOctave + 1}`,
    'KeyO': `C#${lowestOctave + 1}`,
    'KeyL': `D${lowestOctave + 1}`,
    'KeyP': `D#${lowestOctave + 1}`,
    'Semicolon': `E${lowestOctave + 1}`,
    'Quote': `F${lowestOctave + 1}`,
  };

  document.addEventListener("keypress", (evt) => {
    if (evt.code === 'KeyZ' && lowestOctave > 0) {
      setLowestOctave(lowestOctave - 1);
    } else if (evt.code === 'KeyX' && lowestOctave < 5) {
      setLowestOctave(lowestOctave + 1);
    }
  });

  const adjustMainVol = (evt) => {
    setVolume(evt.target.value);
  };

  const adjustTempo = (evt) => {
    setBpm(evt.target.value);
  };

  const adjustPitch = (evt) => {
    setPitch(evt.target.value);
    synth.set({ detune: evt.target.value });
  };

  const selectWaveType = (evt) => {
    setWaveType(evt.target.value);
  };

  const selectInstrument = (evt) => {
    setVoiceMode(evt.target.value);
  };

  const adjustEnvelope = (evt) => {
    setEnvelope({
      ...envelope, [evt.target.name]: parseInt(evt.target.value)
    });

    console.log('attack', synth.envelope.attack)
    console.log('decay', synth.envelope.decay)
    console.log('sustain', synth.envelope.sustain)
    console.log('release', synth.envelope.release)
    console.log('target name', evt.target.name);
    console.log('state envelope before latest change', envelope)
    synth.envelope[evt.target.name] = parseInt(evt.target.value);
  };

  console.log('attack', synth.envelope.attack)
  console.log('state attack', envelope.attack);
  return (
    <>
    <ul id='navbar'>
      <li><Link to='/'>back</Link></li>
      {/* <li><button>how to</button></li> */}
    </ul>
    <div className='synth'>
      <div className='controls flex'>
       <MainControls
          bpm={bpm}
          volume={volume}
          pitch={pitch}
          adjustMainVol={adjustMainVol}
          adjustPitch={adjustPitch}
          adjustTempo={adjustTempo}
      />
        <OscillatorControls
          lowestOctave={lowestOctave}
          voiceMode={voiceMode}
          selectInstrument={selectInstrument}
          waveType={waveType}
          selectWaveType={selectWaveType}
          setLowestOctave={setLowestOctave}
        />
        <Filter setFilterCutoff={setFilterCutoff} filterCutoff={filterCutoff} />
        <Envelope adjustEnvelope={adjustEnvelope} envelope={envelope} />
      </div>
      <ul className='keyboard flex'>
        <Octave octave={lowestOctave} synth={synth} bindings={bindings} />
        <Octave octave={lowestOctave + 1} synth={synth} bindings={bindings} />
        <Octave octave={lowestOctave + 2} synth={synth} bindings={bindings}/>
      </ul>
    </div>
    </>
  );
};

export default Synth;
