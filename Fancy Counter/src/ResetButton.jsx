import { ResetIcon } from "@radix-ui/react-icons"; 

// eslint-disable-next-line react/prop-types
export default function ResetButton({ setCount }) {
  // Handles the button click, resetting the count and removing focus
  const handleClick = (event) => {
    setCount(0); // Resets the count to 0
    event.currentTarget.blur(); // Removes focus from the button after the click
  };

  return (
    // Renders the button with the reset icon
    <button onClick={handleClick} className="reset-btn">
      <ResetIcon className="reset-btn-icon" /> 
    </button>
  );
}
