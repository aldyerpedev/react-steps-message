import { useState } from "react";

const message = [
  "Learn React! 📚",
  "Develop Apps for Portfolio 👨",
  "Get a Job as Frontend Developer 💻",
];

export default function App() {
  return (
    <div>
      <h1 className="main-title">ReactJS Steps Messages by Aldy Rizky Putra</h1>
      <Steps />
    </div>
  );
}

function Steps() {
  const [steps, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (steps > 1) setSteps((s) => s - 1);
  }

  function handleNext() {
    if (steps < message.length) setSteps((s) => s + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={steps >= 1 ? "active" : ""}>1</div>
            <div className={steps >= 2 ? "active" : ""}>2</div>
            <div className={steps >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={steps}>
            <p>{message[steps - 1]}</p>
          </StepMessage>

          <div className="buttons">
            <Button
              backgroundColor="#10439f"
              textColor="#fff"
              onClick={handlePrevious}
            >
              <span>👈</span>Previous
            </Button>
            <Button
              backgroundColor="#10439f"
              textColor="#fff"
              onClick={handleNext}
            >
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step : {step}</h3>
      {children}
    </div>
  );
}

function Button({ backgroundColor, textColor, onClick, children }) {
  return (
    <button
      className="step-button"
      style={{ backgroundColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
