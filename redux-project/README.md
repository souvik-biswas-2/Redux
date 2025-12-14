# Redux Learning Project

This is a simple React application built with Vite to learn and practice Redux and Redux Toolkit.

## Features

- Counter functionality using Redux state management
- Redux Toolkit for simplified Redux setup
- React components connected to Redux store

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd redux-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── app/
│   └── store.js          # Redux store configuration
├── features/
│   └── counterSlice.js   # Counter slice with reducers
├── App.jsx               # Main app component
├── main.jsx              # App entry point with Provider
└── index.css             # Styles
```

## Redux Concepts Covered

- Store: Central state container
- Slices: Modular state management
- Actions: Plain objects describing changes
- Reducers: Pure functions updating state
- Selectors: Functions to access state
- Dispatch: Method to trigger actions

## Learn More

- [Redux Documentation](https://redux.js.org/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Redux Documentation](https://react-redux.js.org/)
