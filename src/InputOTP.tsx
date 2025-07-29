import React, { useRef, useState, useEffect } from 'react';
import { InputOTPProps } from './types';

export const InputOTP = ({
  length = 6,
  onChange,
  autoFocus = true,
  className
}: InputOTPProps): React.ReactElement => {
  const [values, setValues] = useState<string[]>(Array(length).fill(''));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // Focus on first input when mounted if autoFocus is enabled
  useEffect(() => {
    if (autoFocus && inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
  }, [autoFocus]);

  const handleChange = (index: number, value: string) => {
    if (/[^0-9]/.test(value)) return; // Allow digits only
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    // Trigger onChange callback
    onChange?.(newValues.join(''));

    // Move to next input
    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData('Text').slice(0, length);
    if (/^\d+$/.test(pasted)) {
      const newValues = pasted.split('');
      while (newValues.length < length) newValues.push('');
      setValues(newValues);
      onChange?.(newValues.join(''));
    }
    e.preventDefault();
  };

  return (
    <div
      style={{ display: 'flex', gap: '8px' }}
      className={className}
    >
      {Array.from({ length }).map((_, i: number) => (
        <input
          key={i}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={values[i]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(i, e.target.value)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(i, e)}
          onPaste={(e: React.ClipboardEvent<HTMLInputElement>) => handlePaste(e)}
          ref={(el: HTMLInputElement | null) => { inputsRef.current[i] = el; }}
          aria-label={`Digit ${i + 1}`}
          style={{
            width: '40px',
            height: '50px',
            textAlign: 'center',
            fontSize: '24px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            outline: 'none',
          }}
        />
      ))}
    </div>
  );
};
