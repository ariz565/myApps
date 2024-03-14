import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

// eslint-disable-next-line react/prop-types
export default function CountButton({ type, setCount, locked }) {
  // handleClick: Updates the count based on button type (minus or plus)
  const handleClick = (event) => {
    setCount((prev) => {
      // Updates count using a callback to access previous count
      if (type === "minus") {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0; // Prevent count from going below zero
        }
        return newCount;
      } else {
        // (type === "plus")
        const newCount = prev + 1;
        if (newCount > 5) {
          return 5; // Limit count to a maximum of 5
        }
        return newCount;
      }
    });

    event.currentTarget.blur(); // Remove focus from button after click
  };

  return (
    // Renders a button with either a PlusIcon or MinusIcon based on the 'type' prop
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}


// setCount((prev) => ...): This uses a callback with setCount for safer state updates. The prev argument represents the previous value of the count, allowing you to calculate the new value based on the old one.
// Conditional checks (if statements): The code prevents the count from going below 0 when the minus button is clicked and limits it to a maximum of 5 when the plus button is clicked.
// event.currentTarget.blur(): Prevents accidental repeated actions by removing focus from the button after it's clicked. This is often used when the Spacebar can also trigger the button.
// Conditional Rendering of Icons: The code dynamically displays either the MinusIcon or PlusIcon within the button, depending on the value of the type prop.