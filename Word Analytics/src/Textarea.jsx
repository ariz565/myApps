import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setWarningText("Scripts are not allowed");
      setShowWarning(true);
      newText = newText.replace("<script>", "");
    } else if (newText.includes("<>")) {
      setWarningText("<> are not allowed");
      setShowWarning(true);
      newText = newText.replace("<>", "");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        className="textarea"
        placeholder="Enter your text ..."
        spellCheck="false"
      />
      {showWarning ? <Warning /> : null}
    </div>
  );
}
