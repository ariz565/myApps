import { useEffect, useState } from "react";
import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
  // State to manage the count
  const [count, setCount] = useState(0);

  // State to determine if incrementing should be locked (after reaching 5)
  const locked = count === 5 ? true : false;

  // useEffect hook for handling Spacebar key presses
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Space") {
        // Calculate new count but prevent it from going over 5
        const newCount = count + 1;
        if (newCount > 5) {
          setCount(5);
          return;
        }
        setCount(newCount);
      }
    };

    // Add the keydown event listener
    window.addEventListener("keydown", handleKeydown);

    // Cleanup function: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]); // Run the effect when 'count' changes

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      {/* Dynamically apply 'card--limit' class if 'locked' is true */}
      <Title locked={locked} />
      {/* Pass 'locked' prop to potentially modify the title's appearance */}
      <Count count={count} />
      <ResetButton setCount={setCount} /> {/* Allow resetting the count */}
      <ButtonContainer>
        {/* Container for styling and potential button-related logic  */}
        <CountButton type="minus" setCount={setCount} locked={locked} />
        <CountButton type="plus" setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  );
}
