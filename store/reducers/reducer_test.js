export default function(state, action) {
  switch (action.type) {
    case 'TEST': {
      const newState = 'test';
      return newState;
    }
    default: {
      return state || null;
    }
  }
}
