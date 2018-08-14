export default function(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      const newState = { ...state };
      newState.points += action.payload.inventory.pointsPickers.amount;
      newState.points +=
        action.payload.inventory.superPointsPickers.amount * 10;
      return { ...newState };
    }
    case 'PURCHASE_BANK': {
      const modifiedState = action.payload.unit.cost(
        state,
        action.payload.inventory,
        action.type,
      );
      const newState = modifiedState.newBank;
      return { ...newState };
    }
    case 'POINTS_MODIFY': {
      const newPoints = { ...state };
      newPoints.points += action.payload;
      return { ...newPoints };
    }
    default: {
      return state || null;
    }
  }
}
