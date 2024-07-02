import React, { useState, useEffect } from "react";
import "./Home.css";

const messages = [
  "I am here to listen.",
  "I am here to help.",
  "I am your Virtual therapist",
];

function Looper() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % messages.length;
      const fullMessage = messages[i];

      if (isDeleting) {
        setCurrentMessage((prev) => prev.substring(0, prev.length - 1));
      } else {
        setCurrentMessage((prev) => fullMessage.substring(0, prev.length + 1));
      }

      if (!isDeleting && currentMessage === fullMessage) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentMessage === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setCharIndex(0);
      } else {
        setCharIndex(charIndex + 1);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 50 : 150);

    return () => clearTimeout(timer);
  }, [currentMessage, isDeleting, loopNum, charIndex]);

  return (
    <div className="Looper">
      <header className="Looper-header">
        <h1>{currentMessage}</h1>
      </header>
    </div>
  );
}

export default Looper;
