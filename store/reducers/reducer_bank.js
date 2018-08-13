export default function(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      const newState = { ...state };
      newState.points += action.payload.inventory.pointsPickers;
      return newState;
    }
    case 'POINTS_MODIFY': {
      const newPoints = { ...state };
      newPoints.points += action.payload;
      return newPoints;
    }
    default: {
      return state || null;
    }
  }
}
