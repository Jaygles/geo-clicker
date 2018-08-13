export default function(state, action) {
  switch (action.type) {
    case 'CHECK_AVAILABILITY': {
      const newState = { ...state };
      return newState;
    }
    default: {
      return state || null;
    }
  }
}
