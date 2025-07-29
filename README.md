# @makozi/react-input-otp

A stylized OTP (One Time Password) input component for React with **auto-focus**, **paste support**, and **accessibility**.

---

## Features

- Multiple input fields for OTP digits
- Auto-focus and keyboard navigation
- Paste support (entire OTP at once)
- Accessible with screen readers
- Customizable length and styling

---

## Installation

```bash
npm install @makozi/react-input-otp

```

or with yarn:

```bash
yarn add @makozi/react-input-otp

```



## Usage

```
import React, { useState } from 'react';
import { InputOTP } from '@makozi/react-input-otp';

const App = () => {
  const [otp, setOtp] = useState('');

  return (
    <div>
      <h2>Enter OTP</h2>
      <InputOTP
        length={6}
        onChange={(value) => setOtp(value)}
        autoFocus
      />
      <p>Current OTP: {otp}</p>
    </div>
  );
};


export default App;

```



## Props

| Prop       | Type     | Default | Description                              |
|------------|----------|---------|------------------------------------------|
| length     | number   | 6       | Number of OTP digits                     |
| onChange   | function | -       | Callback with concatenated OTP value     |
| autoFocus  | boolean  | true    | Auto focus first input on mount          |
| className  | string   | -       | Custom wrapper class for styling         |

## Styling

Each input is styled with a default width, height, border, and font size.
You can override styles by passing a className to the component and targeting the input fields.
Example (CSS)

```
.my-otp-wrapper input {
  border-color: #0078d4;
  background: #f0f6ff;
}
```

## License

MIT © Makozi Marizu-Ibewiro