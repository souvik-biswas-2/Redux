# Redux and Redux Toolkit Notes

## What is Redux?

Redux is a predictable state container for JavaScript applications. It helps manage the state of your application in a predictable way, making it easier to debug and test.

### Core Principles

1. **Single Source of Truth**: The entire application state is stored in a single JavaScript object called the store.

2. **State is Read-Only**: The only way to change the state is to emit an action, an object describing what happened.

3. **Changes are Made with Pure Functions**: To specify how the state tree is transformed by actions, you write pure reducers.

## Redux Flow

1. **Action**: Plain JavaScript object that describes what happened (e.g., `{ type: 'INCREMENT' }`)
2. **Reducer**: Pure function that takes the current state and an action, and returns the new state
3. **Store**: Holds the application state and provides methods to dispatch actions and subscribe to changes
4. **Dispatch**: Method to send actions to the store
5. **Subscribe**: Method to listen for state changes

## Redux Toolkit

Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It simplifies common Redux patterns and reduces boilerplate.

### Key Features

1. **configureStore**: Simplifies store setup with good defaults
2. **createSlice**: Automatically generates action creators and action types
3. **createAsyncThunk**: Handles async logic in Redux
4. **Immutability**: Uses Immer internally for easier state updates

### createSlice

```javascript
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```

### configureStore

```javascript
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
```

## React Redux

React Redux provides bindings between React and Redux.

### Provider

Wrap your app with Provider to make the store available:

```jsx
import { Provider } from 'react-redux'
import { store } from './app/store'

<Provider store={store}>
  <App />
</Provider>
```

### useSelector

Access state from the store:

```jsx
import { useSelector } from 'react-redux'

const count = useSelector((state) => state.counter.value)
```

### useDispatch

Dispatch actions:

```jsx
import { useDispatch } from 'react-redux'
import { increment } from './features/counterSlice'

const dispatch = useDispatch()
dispatch(increment())
```

## Best Practices

1. **Keep reducers pure**: No side effects, same input always produces same output
2. **Normalize state shape**: Avoid nested data structures
3. **Use selectors**: Memoized selectors with reselect for performance
4. **Handle async with thunks**: Use createAsyncThunk for API calls
5. **Use Redux DevTools**: For debugging state changes

## Common Patterns

- **Thunk**: Function that can dispatch actions and access state
- **Saga**: More complex async logic handling
- ** Ducks pattern**: Co-locate actions, action types, and reducers

## When to Use Redux

- Complex state logic
- Multiple components need same data
- Frequent state updates
- Large applications with many components

## Alternatives

- Context API + useReducer (built-in React)
- Zustand
- Recoil
- Jotai

## Resources

- [Redux Official Docs](https://redux.js.org/)
- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [React Redux Docs](https://react-redux.js.org/)
- [Redux Style Guide](https://redux.js.org/style-guide/)