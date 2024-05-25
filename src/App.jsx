// Import React and useState hook
import React, { useState } from 'react';

// Define ConditionalDisplay component
function ConditionalDisplay() {
  // Define a state variable to control the visibility
  const [isVisible, setIsVisible] = useState(false);

  // Render component
  return (
    <div>
      {/* Button to toggle visibility */}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      
      {/* Conditionally render content based on the state */}
      {isVisible && (
        <div>
          <h2>Conditional Content</h2>
          <p>This content is only displayed when the button is clicked.</p>
        </div>
      )}
    </div>
  );
}

// Define App component
function App() {
  // Render App component with 5 instances of ConditionalDisplay
  return (
    <div>
      <ConditionalDisplay />
      <ConditionalDisplay />
      <ConditionalDisplay />
      <ConditionalDisplay />
      <ConditionalDisplay />
    </div>
  );
}

// Export App component as default
export default App;
