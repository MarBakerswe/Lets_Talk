// VoiceInputComponent.js
import React, { useState } from 'react';

// Define a functional component named VoiceInputComponent.
function VoiceInputComponent({ onSubmit }) {
  // Initialize state 'input' with an empty string.
  // 'setInput' is the function to update the 'input' state.
  const [input, setInput] = useState('');

  // Define a function to handle changes in the input field.
  // It updates the 'input' state with the current value of the input field.
  const handleInputChange = (event) => setInput(event.target.value);

  // Define a function to handle the submission of the input.
  // It calls the 'onSubmit' prop function, passing the current 'input' state as an argument.
  const handleSubmit = () => {
    onSubmit(input);
    setInput(''); // Optionally clear the input field after submission
  };

  // Render the component.
  return (
    <div>
      {/* Input field: Its value is tied to the 'input' state, and it updates on every change. */}
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Speak your command"
      />

      {/* Button: On click, it triggers the handleSubmit function. */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

// Export the VoiceInputComponent for use in other parts of the app.
export default VoiceInputComponent;
