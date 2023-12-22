import React, { useState, useEffect } from 'react';
import microphoneIcon from '../assets/images/mic.png';

function HomePage() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    // SpeechRecognition setup (only runs when isListening changes)
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true; // Keep listening even after the speech ends
    recognition.interimResults = true; // Show interim results

    recognition.onresult = (event) => {
      const interimTranscript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      setTranscript(interimTranscript);
    };

    recognition.onend = () => {
      // Handle end of recognition (e.g., stop button clicked)
    };

    if (isListening) {
      recognition.start(); // Start recognition
    } else {
      recognition.stop(); // Stop recognition
    }

    return () => {
      recognition.stop();
    };
  }, [isListening]);

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  return (
    <div className="homepage">
      {/* Microphone Icon */}
      <div className="microphone-icon" onClick={toggleListening}>
        <img src={microphoneIcon} alt="Microphone" />
      </div>

      {/* Transcribed Text - This will now appear below the microphone icon */}
      <div className="transcription">
        <span className="typewriter-text">{transcript}</span>
      </div>
    </div>
  );
}

export default HomePage;
