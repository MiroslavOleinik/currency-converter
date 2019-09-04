const initialState = {
  base: 0,
  exchangeRates: {
    dollarCourse: 2.11,
    euroCourse: 2.31,
    poundCourse: 2.52,
  }
}

export function updateValue(value) {
  return {
    type: 'UPDATE_CURRENCY',
    payload: {
      value
    },
  }
}

export function currency(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_CURRENCY':
      const { value } = action.payload;
      return {
        ...state,
        base: value,
      }
  
    default:
      return state;
  }
}
