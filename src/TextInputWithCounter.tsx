








// src/components/TextInputWithCounter.tsx
import React, { useState } from 'react';

const TextInputWithCounter: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const maxLength = 1000;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= maxLength) {
      setInputValue(e.target.value);
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        maxLength={maxLength}
        placeholder="Type here..."
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <div style={{ textAlign: 'right', color: '#888' }}>
        {maxLength - inputValue.length} characters left
      </div>
    </div>
  );
};

export default TextInputWithCounter;