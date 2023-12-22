import React, { useState, useEffect } from 'react';

function VoiceRecognitionComponent({ onTranscript }) {
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    // Check if the SpeechRecognition API is supported in the browser.
    // 'webkitSpeechRecognition' is for Safari and other browsers that use the WebKit engine.
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    // If the API is not supported, log an error and stop further execution.
    if (!SpeechRecognition) {
      console.error('SpeechRecognition not supported in this browser');
      return;
    }

    // Initialize the SpeechRecognition API.
    const recognition = new SpeechRecognition();
    recognition.continuous = true; // Allows the API to listen continuously.

    // Define what happens when the API successfully recognizes speech.
    recognition.onresult = (event) => {
      // Extract the transcript from the speech recognition result.
      const currentTranscript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      setTranscript(currentTranscript); // Update the component's state with the transcript.
      onTranscript(currentTranscript); // Call the onTranscript prop with the current transcript.
    };

    recognition.start(); // Start the speech recognition.

    // Define a cleanup function that stops speech recognition when the component unmounts or re-renders.
    return () => recognition.stop();
  }, [onTranscript]); // The effect depends on the onTranscript prop.

  // Render the component's UI.
  return <div>Listening: {transcript}</div>; // Display the recognized transcript.
}

export default VoiceRecognitionComponent;
