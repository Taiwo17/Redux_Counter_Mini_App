import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'count',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementCount: (state) => {
      state.value += 1
    },
    decrementCount: (state) => {
      if (state.value <= 0) {
        return state
      }
      state.value -= 1
    },
    incrementAmt: (state, action) => {
      state.value += action.payload
    },
  },
})

// Export the reducers and the reducer must be in singular

export const countReducer = counterSlice.reducer

// Export the state of the slice

export const countState = (state) => state.count.value

// Export the actions and the actions must be in plurals
export const { incrementCount, decrementCount, incrementAmt } =
  counterSlice.actions
