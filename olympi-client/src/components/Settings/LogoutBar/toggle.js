import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default Toggle() => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={80}
    />
  );
};