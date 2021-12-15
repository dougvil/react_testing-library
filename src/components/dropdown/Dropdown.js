import React, { useState } from "react";

export const Dropdown = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const _handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        data-testid={"button-dropdown"}
        onClick={setIsOpen.bind(null, !isOpen)}
      >
        {title}
      </button>
      {isOpen && (
        <ul role={"menu"}>
          {options.map((option) => (
            <li
              key={option}
              role={"menuitem"}
              onClick={() => _handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
